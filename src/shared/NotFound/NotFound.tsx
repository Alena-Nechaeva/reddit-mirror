import React from 'react'
import { Link } from 'react-router-dom'
import styles from './notfound.css'

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <span className={styles.notFoundMessage}>
        404 — page not found
      </span>
      <Link to="/posts">Go to the main page</Link>
    </div>
  )
}