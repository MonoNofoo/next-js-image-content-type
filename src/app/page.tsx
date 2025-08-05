import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image src='https://d344q2ej6fb281.cloudfront.net/review/fe330504-2b74-4fe2-bad1-9b61c23d805f/2.jpg' width={500} height={500} alt='test' />
      </main>
    </div>
  );
}
