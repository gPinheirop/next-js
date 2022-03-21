import Link from "next/link"

export default function Navbar(){
    return (
        <ul>
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
      </ul>
    )
}