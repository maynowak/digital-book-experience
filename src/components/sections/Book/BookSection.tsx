import Container from "../../layout/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Button from "../../ui/Button/Button";
import styles from "./BookSection.module.css";
export default function BookSection() {
  return (
    <section id="book" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.coverFrame}>
              <div className={styles.coverSurface}>
              {/* TODO: Replace placeholder with the real published book cover when available. */}
              <figure aria-label="Book cover placeholder" className={styles.cover}>
                <figcaption className={styles.visuallyHidden}>Book cover will be integrated</figcaption>
                <div role="img" aria-hidden="true">Book cover will be integrated</div>
              </figure>
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