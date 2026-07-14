import Container from "../../layout/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Image from "../../ui/Image/Image";
import Button from "../../ui/Button/Button";
import bookCover from "../../../assets/book/book-cover.svg";
import styles from "./BookSection.module.css";
export default function BookSection() {
  return (
    <section id="book" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.coverFrame}>
            <div className={styles.coverSurface}>
              <Image
                src={bookCover}
                alt="Buchcover"
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