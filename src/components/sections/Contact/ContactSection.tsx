import Container from '../../layout/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import Button from '../../ui/Button/Button'
import styles from './ContactSection.module.css'
import useReveal from '../../../hooks/useReveal'
export default function ContactSection() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="contact" className={`${styles.section} dbx-reveal`} ref={ref as any}>
      <Container size="narrow">
        <SectionHeading
          overline="Kontakt"
          title="Lass uns ins Gespräch kommen"
          description="Ich freue mich auf deine Nachricht."
        />
        <form className={styles.form}>
          <label htmlFor="contact-name" className="visuallyHidden">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email" className="visuallyHidden">
            E-Mail
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="E-Mail"
            autoComplete="email"
            required
          />

          <label htmlFor="contact-message" className="visuallyHidden">
            Nachricht
          </label>
          <textarea id="contact-message" name="message" placeholder="Nachricht" required />

          <Button type="submit">Nachricht senden</Button>
        </form>
      </Container>
    </section>
  )
}
