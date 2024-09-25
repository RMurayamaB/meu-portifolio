import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Home = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto text-left text-mainText"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-5xl font-bold mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Sobre mim
      </motion.h1>
      <motion.p
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Rafael Murayama Barcelos
      </motion.p>
      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Olá! Eu sou Rafael Murayama Barcelos, um entusiasta do desenvolvimento
        front-end com paixão por criar experiências digitais cativantes.
        Atualmente, estou focado no estudo de ReactJS e outras tecnologias
        modernas, sempre com atenção aos detalhes e uma busca contínua por
        inovação. Meu objetivo é desenvolver interfaces intuitivas e responsivas
        que ofereçam aos usuários uma experiência fluida e envolvente, aliando
        estética e funcionalidade de forma estratégica.
      </motion.p>
      <motion.div
        className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0 sm:space-x-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="https://github.com/RMurayamaB"
          target="_blank"
          className="flex "
        >
          <Github size={28} className="mr-2" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/rafael-murayama-barcelos-014511266"
          target="_blank"
          className="flex items-center"
        >
          <Linkedin size={28} className="mr-2" />
          LinkedIn
        </a>
        <div className="flex ">
          <Mail size={28} className="mr-2" />
          <span>Email: rafaelmurayama@hotmail.com</span>
        </div>
        <div className="flex">
          <Phone size={28} className="mr-2" />
          <span>Telefone: (64) 99276-1742</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Home;
