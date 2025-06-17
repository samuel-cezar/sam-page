import { motion } from "motion/react"
import './Portfolio.css'
import santanderImage from '../../assets/santander.jpg';
import datalakeSchema from '../../assets/datalake-server.jpeg';
import internalRegulatory from '../../assets/schematics.jpg'
import gcpAutomation from '../../assets/gcp-automation.png'
import { Accordion } from "../../components/Accordion";
import { Menu } from "../../components/Menu";
import ScrollDownArrow from "../../components/ScrollDownArrow";
export const Portfolio = () => {
    return (
        <>
            <Menu />
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} id="intro">
                    <h2>Portfolio</h2>
                    <p>I'll give you like one for each year, the most simbolic one for me.</p>
                    <p>The idea in here is to show you a bit about my range of technical knowledge</p>
                    <p>Also there's technical details on each (click the tabs 😊)</p>
                    <ScrollDownArrow />
                </motion.div>
            </section>
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <h2>Santander Landing Page - 2021</h2>
                    <img src={santanderImage} alt="Santander Landing Page I did as an intern back in 2021" />
                    <p>Developed a cutting-edge <a href="https://www.santander.com.br/hotsite/santanderfinanciamentos/">hotsite</a> based on the client's innovative approach to online engagement.</p>
                    <Accordion
                        title="Technical Details"
                        themeColor="#cc0001"
                        content={(<p>The page was designed to be fully responsive, highly accessible, and optimized for performance, delivering a seamless user experience. Built using HTML, CSS, JavaScript, and jQuery, integrated with ASP.NET Razor Pages to ensure a robust and scalable solution.</p>)} />
                </motion.div>
            </section>
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <h2>Datalake Server - 2022</h2>
                    <img src={datalakeSchema} />
                    <p>Developing a Comprehensive Top-Down Solution with a leading <a href="https://www.vortx.com.br/">Fintech company</a> for seamless top-down data analysis.</p>
                    <Accordion themeColor="#8e734a" title="Technical Details" content={(<p>Tackled the challenge of segregated data spread across market institutions, file handling systems, and legacy databases by consolidating and optimizing data processing workflows. Leveraged AWS Lambda and Node.js to create an efficient, serverless architecture that ensured real-time updates and data integrity.</p>)} />
                </motion.div>
            </section>
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <h2>Internal Regulatory Portal - 2023</h2>
                    <img src={internalRegulatory} />
                    <p>I worked with the Compliance Team to develop a Low-Code Frontend with AWS Lambda microservices, enabling real-time tracking of regulatory debts and predicting future debts with over 95% accuracy.</p>
                    <Accordion themeColor="#8e734a" title="Technical Details" content={(<p>Using Python, Pandas and Numpy These numbers seemed impossible to achieve. Best work of my life.</p>)} />
                </motion.div>
            </section>
            <section className="img-container">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <h2>Automatic Report Generator - 2024</h2>
                    <img src={gcpAutomation} />
                    <p>This was the first time I've tried something entirely new due to client urgent needs.</p>
                    <Accordion themeColor="#e77b2a" title="Technical Details" content={(<p>This client's older software stopped working. This automation restored most of the functionalities he had on his previous system but it was 90% cheaper 😎</p>)} />
                </motion.div >
            </section>
        </>
    )
}

