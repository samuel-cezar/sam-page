import { motion } from "motion/react"
import { Menu } from "../../components/Menu"
import Timeline from "./ui/Timeline"
import './Career.css'

export const Career = () => {
    return (
        <div className="container">
            <Menu />
            <main>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} id="career">
                    <h2>Career</h2>
                    <p>Just a little timeline for you to see my journey</p>
                </motion.div>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} id="timeline-container">
                    <Timeline />
                </motion.div>
            </main>
        </div>
    )
}
