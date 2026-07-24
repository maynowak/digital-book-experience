import { chromium } from 'playwright'
import { createServer } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = resolve(__dirname, '..')

async function startVite() {
  const server = await createServer({
    root: PROJECT_ROOT,
    server: { port: 5173, strictPort: true },
  })
  await server.listen()
  return server
}

const EVAL_FN = () => {
  function getStyles(el) {
    var COMPUTED = 'opacity,transform,willChange,isolation,zIndex,mixBlendMode,contain,backfaceVisibility,perspective,translate,scale,rotate,position,pointerEvents,overflow,transition,animation,display'.split(',')
    var LAYOUT = 'offsetWidth,offsetHeight,clientWidth,clientHeight'.split(',')
    var cs = getComputedStyle(el)
    var info = {}
    for (var i = 0; i < COMPUTED.length; i++) info[COMPUTED[i]] = cs.getPropertyValue(COMPUTED[i])
    for (var i = 0; i < LAYOUT.length; i++) info[LAYOUT[i]] = String(el[LAYOUT[i]])
    info.tagName = el.tagName
    info.className = el.className
    return info
  }

  var container = document.querySelector('[class*="posterOverlay"]')
  var image = container ? container.querySelector('img') : null
  var video = document.querySelector('video')

  var report = {
    posterContainer: container ? getStyles(container) : null,
    posterImage: null,
    video: null,
    hints: [],
  }

  if (image) {
    var imgInfo = getStyles(image)
    imgInfo.naturalWidth = String(image.naturalWidth)
    imgInfo.naturalHeight = String(image.naturalHeight)
    imgInfo.complete = String(image.complete)
    imgInfo.currentSrc = image.currentSrc
    report.posterImage = imgInfo
  }

  if (video) {
    var vidInfo = getStyles(video)
    vidInfo.videoWidth = String(video.videoWidth)
    vidInfo.videoHeight = String(video.videoHeight)
    vidInfo.paused = String(video.paused)
    vidInfo.currentSrc = video.currentSrc
    report.video = vidInfo
  }

  if (image && image.complete && image.naturalWidth > 0) {
    var r = image.getBoundingClientRect()
    if (r.right < 0 || r.left > window.innerWidth || r.bottom < 0 || r.top > window.innerHeight) {
      report.hints.push('image is outside viewport (rect: ' + JSON.stringify(r) + ')')
    }
    if (r.width === 0 || r.height === 0) {
      report.hints.push('image has zero bounding rect')
    }
    report.hints.push('image checkVisibility: ' + image.checkVisibility())
  }

  var elements = [container, image, video]
  var labels = ['container', 'image', 'video']
  for (var i = 0; i < labels.length; i++) {
    var el = elements[i]
    if (!el) continue
    var cs = getComputedStyle(el)
    var wc = cs.getPropertyValue('willChange')
    if (wc && wc !== 'auto') report.hints.push(labels[i] + ': willChange:' + wc + ' -> compositor layer')
    if (cs.getPropertyValue('transform') !== 'none') report.hints.push(labels[i] + ': has transform -> compositor layer')
    if (cs.getPropertyValue('isolation') === 'isolate') report.hints.push(labels[i] + ': isolation:isolate -> stacking context')
  }

  if (container && image) {
    report.hints.push('container opacity=' + getComputedStyle(container).opacity + ' transition=' + getComputedStyle(container).getPropertyValue('transition'))
    report.hints.push('image opacity=' + getComputedStyle(image).opacity + ' transition=' + getComputedStyle(image).getPropertyValue('transition'))
  }

  if (container && video) {
    report.hints.push('container rect: ' + JSON.stringify(container.getBoundingClientRect()))
    report.hints.push('video rect: ' + JSON.stringify(video.getBoundingClientRect()))
  }

  if (container) {
    var parent = container.parentElement
    if (parent) {
      var ps = getComputedStyle(parent)
      report.hints.push('parent (' + parent.className + '): display=' + ps.display + ' isolation=' + ps.isolation + ' position=' + ps.position)
    }
  }

  return report
}

async function main() {
  console.log('Starting Vite dev server...')
  const server = await startVite()
  const url = 'http://localhost:5173'

  console.log('Opening ' + url + ' ...')
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await context.newPage()

  page.on('console', (msg) => {
    if (msg.type() === 'error') console.error('  browser error:', msg.text())
  })

  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)
  await page.waitForSelector('[class*="posterOverlay"]', { timeout: 5000 })

  // Snapshot 1: initial state (before any interaction / scroll)
  console.log('=== Initial State (before scroll/autoplay) ===')
  const initial = await page.evaluate(EVAL_FN)
  for (const [key, val] of Object.entries(initial)) {
    if (key === 'hints') continue
    console.log('\n--- ' + key + ' ---')
    if (val) {
      for (const [k, v] of Object.entries(val)) console.log('  ' + k + ': ' + v)
    } else {
      console.log('  (not found)')
    }
  }
  if (initial.hints.length) {
    console.log('\n--- Hints ---')
    for (const h of initial.hints) console.log('  \u2022 ' + h)
  }

  // Scroll into view (triggers autoplay via IntersectionObserver)
  await page.evaluate(() => {
    const el = document.querySelector('[class*="posterOverlay"]')
    if (el) el.scrollIntoView({ block: 'center' })
  })
  await page.waitForTimeout(500)
  console.log('\n=== After Scroll / Autoplay ===')
  const report = await page.evaluate(EVAL_FN)
  for (const [key, val] of Object.entries(report)) {
    if (key === 'hints') continue
    console.log('\n--- ' + key + ' ---')
    if (val) {
      for (const [k, v] of Object.entries(val)) {
        console.log('  ' + k + ': ' + v)
      }
    } else {
      console.log('  (not found)')
    }
  }

  if (report.hints.length) {
    console.log('\n--- Hints ---')
    for (const h of report.hints) console.log('  \u2022 ' + h)
  }

  await browser.close()
  await server.close()
  console.log('\nDone.')
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
