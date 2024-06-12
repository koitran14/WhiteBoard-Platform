"use client"

import { AnimatePresence, motion } from "framer-motion";

const Section = ({
    children,
}:{
    children:React.ReactNode,
}) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
 
export default Section;