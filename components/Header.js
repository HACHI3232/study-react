import Link from 'next/link';
import styles from "../components/Header.module.css"

// import styles from './Footer.module.css'

export function Header() {
  return (
      <header className={styles.header}>
        <Link href="/" className={styles.anchor}>
          Index
        </Link>
        <Link href="/about"  className={styles.anchor}>
          About
        </Link>
      </header>
  );
}
