import { motion } from 'framer-motion';

const ScrollDownArrow = () => {
    const arrowVariants = {
        initial: { y: 0 },
        animate: { y: [0, 10, 0], transition: { duration: 1.5, repeat: Infinity } },
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
            <motion.div
                style={{
                    fontSize: '2rem',
                }}
                variants={arrowVariants}
                initial="initial"
                animate="animate"
            >
                ⬇️
            </motion.div>
        </div>
    );
};

export default ScrollDownArrow;