import Container from "../../layout/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Image from "../../ui/Image/Image";
import Button from "../../ui/Button/Button";
import styles from "./BookSection.module.css";
export default function BookSection() {
  return (
    <section id="book" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.coverFrame}>
              <div className={styles.coverSurface}>
              {/* Asset pending: use semantic image element without placeholder artwork. Add real cover to `src/assets/book/` when available. */}
              <Image
                alt="Buchcover (noch nicht verfügbar)"
                className={styles.cover}
              />
            </div>
          </div>
          <div className={styles.details}>
            <SectionHeading
              overline="Das Buch"
              title="Eine Reise durch Gedanken"
              description="Poetische Impulse."
            />
            <div className={styles.actions}>
              <Button variant="outline">Leseprobe</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}