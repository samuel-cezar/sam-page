import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
    title: string,
    content: any
    themeColor?: string,
}

export const Accordion = ({ title, content, themeColor }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={false}
                animate={{ backgroundColor: isOpen ? "#444444" : themeColor }}
                onClick={() => setIsOpen(!isOpen)}
                style={{ padding: "0.5em", cursor: "pointer", color: "white" }}
            >
                {title}
            </motion.header>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ overflow: "hidden" }}
                    >
                        <div style={{ padding: "0.5em 0.2em 0.2em 0.2em", backgroundColor: "#dddddd" }}>
                            {content}
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};