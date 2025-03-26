import { motion } from 'framer-motion';
import { useState } from 'react';


const careerItems = [
    {
        period: "2019-2020",
        companyTitle: "Unect Jr",
        url: "https://unect.com.br/",
        positionTitle:
            "Associate Financial Analyst",
        cardDetailedText: `My first projects.`,
        imageUrl: "https://unect.com.br/src/fundoServi%C3%A7os.png",
        logoUrl: "https://unect.com.br/src/LogoFOOTER1.png"
    },
    {
        period: "2021",
        companyTitle: "Yankton Technologies",
        url: "https://yankton.com.br/",
        positionTitle:
            "Intern Web Developer",
        cardDetailedText: `Did my first deployment. Delivered 3 apps to production.`,
        imageUrl: "https://yankton.com.br/assets/home/banner-dark/banner-home.png",
        logoUrl: "https://yankton.com.br/assets/svgs/logo-branca.svg"
    },
    {
        period: "2022-2023",
        companyTitle: "Vortx DTVM",
        url: "https://www.vortx.com.br/",
        positionTitle:
            "Fullstack Developer",
        cardDetailedText: `First time working with Microservices and Cloud-Native technologies.`,
        imageUrl: "https://cdn.vortx.com.br/images/site/imagens/2020.png",
        logoUrl: "https://cdn.vortx.com.br/images/site/imagens/Grupo9.png"
    },
    {
        period: "2024-2025",
        companyTitle: "PwC Brazil",
        url: "https://www.pwc.com.br/",
        positionTitle:
            "Fullstack Developer",
        cardDetailedText: `First time doing everything from scratch. All on my own.`,
        imageUrl: "https://www.pwc.com.br/content/dam/pwc/gx/en/shared/images/megatrends-webassets-hero.png",
        logoUrl: "https://www.pwc.com.br/etc.clientlibs/pwc/clientlibs/rebrand-clientlibs/components-colors/resources/images/slim-header-v2/PwC-logo-white.svg"
    },
]

const TimelineItemCard = ({ item }: { item: typeof careerItems[number] }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="timeline-item-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            <div className="card-image-container">
                <img src={item.imageUrl} alt={item.companyTitle} className="company-image" />

                <motion.div
                    className="company-logo-container"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src={item.logoUrl} alt={`${item.companyTitle} logo`} className="company-logo" />
                </motion.div>

                <motion.div
                    className="card-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h3>{item.period}</h3>
                    <h4><a href={item.url} target="_blank" rel="noopener noreferrer">{item.companyTitle}</a></h4>
                    <p>{item.positionTitle}</p>
                    <p>{item.cardDetailedText}</p>
                </motion.div>
            </div>
        </motion.div>
    )
}

const Timeline = () => {
    return (
        <div id="timeline">
            <div className="timeline-line"></div>
            {careerItems.map((item) => (
                <TimelineItemCard key={item.period} item={item} />
            ))}
        </div>
    );
};

export default Timeline;