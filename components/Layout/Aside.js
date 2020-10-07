import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './../../styles/Aside.module.scss';

export default function Aside() {
    return (
        <aside className={styles.aside}>
            <div className={styles.profileImage}>
                <img
                    src="/images/profile-image.jpg"
                    alt="Profile image of me."
                />
            </div>
            <div className={styles.about}>
                <h2>Hi, I'm Nikolaj</h2>
                <p>
                    I've spent the last 10 years working with web development
                    and digital marketing. Through many adventures, I've had the
                    pleasure of working with smart people within their
                    respective fields.
                </p>
                <p>
                    I've gained experience building small as well as large
                    platforms utilising all the tools in my constantly
                    increasing tool belt.
                </p>
                <div className={styles.icons}>
                    <a
                        href="https://github.com/nikolajjepsen/"
                        aria-label="View my Github"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nikolajsjepsen/"
                        aria-label="Find me on LinkedIn"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </aside>
    );
}
