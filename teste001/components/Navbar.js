import Link from "next/link"

import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return (
        <ul className={styles.navbar}>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/products">
                    <a>produtos</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>sobre</a>
                </Link>
            </li>
            <li>
                <Link href="/promo">
                    <a>promoções</a>
                </Link>
            </li>
      </ul>
    )
}