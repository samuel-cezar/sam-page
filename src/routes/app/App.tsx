import { motion } from "motion/react";
import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Menu } from "../../components/Menu";

export const App = () => {
  const navigate = useNavigate()

  const getAgeFromDate = (dateOfBirth = "2000-01-06") => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const phrases = [
    <motion.p>
      Hi! I'ts Sam's web page! 👋
    </motion.p>,
    <motion.p>
      Samuel Santos is a {getAgeFromDate()} years old Software Engineer from Brasilia, Brazil. 📍
    </motion.p>,
    <motion.p>
      <em>(He moved to the south to the state of <a href="https://en.wikipedia.org/wiki/Paran%C3%A1_(state)">Paraná</a><br />to study in <a href="https://www.utfpr.edu.br/">one of the best colleges in the country</a>)</em>
    </motion.p>,
    <motion.p>
      Maybe you'd like to check his <a onClick={() => navigate('/portfolio')}>past experiences</a>? 🖥️
    </motion.p>,
    <motion.p>
      He started programming {getAgeFromDate('2011-01-01')} years ago with pure HTML and CSS. 🧒 <br /><em>(The internet was very interesting for child Sam 🧑‍💻)</em>
    </motion.p>,
    <motion.p>
      He's already worked previously with both Azure and AWS.< br /><em>(He prefers AWS tho 🤫) </em>
    </motion.p>,
    <motion.p>
      <em>(It feels like I've already met you. 🤔)</em>
    </motion.p>,
    <motion.p>
      Did you know that Sam started working on his first college year 🎓< br /><em>(He's very proud of this. 🤫)</em>
    </motion.p>,
    <motion.p>
      Looking for <a onClick={() => navigate('/portfolio')}>Sam's previous work</a>? 🖥️
    </motion.p>,
    <motion.p>
      <em>(Are you still reading this? 😲)</em>
    </motion.p>,
    <motion.p>
      <em>(I'm impressed 😝<br />People rarely stay with me this long. 😔)</em>
    </motion.p>,
    <motion.p>
      <em>(Usually I'm very forgetful but not this time cause you're my friend.🤞)</em>
    </motion.p>,
    <motion.p>
      <em>(I promise I will remember you<br />it's just that Sam gave me very limited resources.🤞)</em>
    </motion.p>,
    <motion.p>
      <em>{`(｡◕‿‿◕｡) **chilling with friend**`}</em>
    </motion.p>,
    <motion.p>
      🙂
    </motion.p>,
    <motion.p>
      😐
    </motion.p>,
    <motion.p>
      😶
    </motion.p>
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Menu />
      <motion.div className="text-container" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        {phrases[index]}
      </motion.div>
    </>
  );
};