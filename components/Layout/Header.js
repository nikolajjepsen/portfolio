import Head from 'next/head';

import Navigation from './Navigation';

export default function Header({ headTitle, metaDescription }) {
    return (
        <header>
            <Head>
                <title>{headTitle}</title>
                <meta
                    name="description"
                    content={
                        metaDescription
                            ? metaDescription
                            : "Hi, I'm Nikolaj. I've spent the last 13 years working with web development and digital marketing."
                    }
                />
            </Head>
            <div className="logo">
                Nikolaj
                <strong>Jepsen</strong>
            </div>
            <Navigation />
        </header>
    );
}
