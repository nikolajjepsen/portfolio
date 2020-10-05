import Link from 'next/link';

export default function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/projects/">Projects</Link>
                </li>
                <li>
                    <Link href="/experiences/">Experiences</Link>
                </li>
            </ul>
        </div>
    );
}
