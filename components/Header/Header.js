import styles from "../../styles/Header.module.css"
import Link from "next/link"
export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <div className={styles.headerLink}>Stripe Connect Payments</div>
      </Link>
    </div>
  )
}
