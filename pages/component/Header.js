import React from 'react'
import Link from 'next/link'

import styles from '../../styles/Home.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/signup">Signup</Link>
                </li>
            </ul>
        </div>
    )
}
