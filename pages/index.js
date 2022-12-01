import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <div className={styles.grid}>
          <Link href="/register">
            <div className={styles.card}>
              <h3>Register as Seller &rarr;</h3>
              <p>Register yourself as a service provider/seller</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
