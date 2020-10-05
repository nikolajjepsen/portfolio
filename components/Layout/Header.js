import Head from 'next/head';

import Navigation from './Navigation';

export default function Header({ headTitle }) {
    return (
        <header>
            <Head>
                <title>{headTitle}</title>
            </Head>
            <div className="logo">
                Nikolaj
                <strong>Jepsen</strong>
            </div>
            <Navigation />
        </header>
    );
}
