import { motion } from "motion/react";
import { Button } from "./Button";
import { useNavigate } from "react-router";


export const Menu = () => {
    const navigate = useNavigate()
    return (
        <>
            <motion.div className="menu-container">
                <Button onTap={() => navigate('/')} textContent="Home" />
                <Button onTap={() => navigate('/portfolio')} textContent="Portfolio" />
                <p> ⚠️ This page is still under construction</p>
            </motion.div>
        </>
    );
};
