import { AnimatePresence, motion } from 'framer-motion';
import Aside from './Aside';

const pageMotionProps = {
    initial: 'pageInitial',
    animate: 'pageAnimate',
    variants: {
        pageInitial: {
            opacity: 0,
        },
        pageAnimate: {
            opacity: 1,
        },
    },
};

const asideMotionProps = {
    initial: 'asideInitial',
    animate: 'asideAnimate',
    variants: {
        asideInitial: {
            scale: 0.9,
        },
        asideAnimate: {
            scale: 1,
        },
    },
    transition: {
        duration: 0.6,
    },
};

export default function PageContent({
    justifyCenter,
    hasAside,
    className,
    children,
}) {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div {...pageMotionProps}>
                <div className={`content ${className}`}>
                    {hasAside && (
                        <motion.div {...asideMotionProps}>
                            <Aside />
                        </motion.div>
                    )}
                    <main className={justifyCenter ? 'justify-center' : ''}>
                        <div className="wrapper">{children}</div>
                    </main>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
