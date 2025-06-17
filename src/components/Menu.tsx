import { motion } from "framer-motion";
import { Button } from "./Button";
import { useNavigate } from "react-router"; // Corrected the import path for react-router-dom
import { useState } from "react";

export const Menu = () => {
    const navigate = useNavigate();

    const pagesRelation = [
        '/',
        '/career',
        '/portfolio',
    ];

    const [page, setPage] = useState(0);

    const menuButtonOnTap = (index: number) => {
        console.log(index); // This console.log prints the correct index value
        setPage(index);
        navigate(pagesRelation[index]);
    };

    return (
        <>
            <motion.div className="menu-container">
                {pagesRelation.map((_, index) => (
                    <Button
                        key={index}
                        onTap={() => menuButtonOnTap(index)}
                        textContent={['🏠', 'Career', 'Portfolio'][index]}
                        className={page === index ? 'choosenMenuOption' : ''}
                    />
                ))}
            </motion.div>
        </>
    );
};