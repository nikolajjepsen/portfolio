import { AnimatePresence, motion } from 'framer-motion';
import Aside from './Aside';

export default function PageContent({
    justifyCenter,
    hasAside,
    className,
    children,
}) {
    const pageVariants = {
        pageInitial: {
            opacity: 0,
        },
        pageAnimate: {
            opacity: 1,
        },
    };
    const pageMotionProps = {
        initial: 'pageInitial',
        animate: 'pageAnimate',
        variants: pageVariants,
        duration: 0.25,
    };

    const asideVariants = {
        asideInitial: {
            x: '-100%',
        },
        asideAnimate: {
            x: 0,
        },
    };
    const asideMotionProps = {
        initial: 'asideInitial',
        animate: 'asideAnimate',
        variants: asideVariants,
        delay: 0.25,
        duration: 0.5,
    };

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
