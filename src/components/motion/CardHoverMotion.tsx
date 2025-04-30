import { motion } from "framer-motion";
import AppearMotion from "./AppearMotion";

export default function CardHoverMotion({ children }) {
    return (
        <AppearMotion>
            <motion.div
                whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 }
                }}
            >
                {children}
            </motion.div>
        </AppearMotion>
    )
}
