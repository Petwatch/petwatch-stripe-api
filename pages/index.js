import Link from "next/link"
import styles from "../styles/Home.module.css"

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// Listen for any change on document `marie` in collection `users`
exports.myFunctionName = functions.firestore
    .document('building-codes/123456789/posts').onWrite((change, context) => {
      // ... Your code here
    });

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

          <Link href="/pay-out">
            <div className={styles.card}>
              <h3>Pay as a Customer &rarr;</h3>
              <p>Pay as a customer to the service provider</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
