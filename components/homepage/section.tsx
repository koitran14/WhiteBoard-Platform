"use client"

import { motion } from "framer-motion";

const Section = ({
    children,
    delay
}:{
    children:React.ReactNode,
    delay?: number | 0
}) => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: delay}}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
}
 
export default Section;