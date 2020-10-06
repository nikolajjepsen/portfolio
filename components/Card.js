import styles from './../styles/Card.module.scss';

export const Card = ({ variant, children, onClick }) => {
    return (
        <div
            className={`
                ${styles.card} 
                ${[variant ? `${styles[`variant-${variant}`]}` : '']}
            `}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export const CardHeader = ({ children }) => {
    return <div className={styles.header}>{children}</div>;
};

export const CardBody = ({ children }) => {
    return <div className={styles.body}>{children}</div>;
};

export const CardBottom = ({ children }) => {
    return <div className={styles.bottom}>{children}</div>;
};
