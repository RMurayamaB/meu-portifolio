import { Github, Linkedin, Mail, Phone } from "lucide-react";

const MainContent = () => {
  return (
    <main className="p-8 pt-32 min-h-screen md:ml-80">
      <div className="max-w-4xl mx-auto text-left">
        <h1 className="text-5xl font-bold mb-2">Sobre mim</h1>
        <p className="text-2xl font-bold mb-4">Rafael Murayama Barcelos</p>
        <p className="text-lg mb-8">
          Ipsem lorem Ipsem lorem Ipsem lorem Ipsem lorem Ipsem lorem Ipsem
          lorem Ipsem lorem Ipsem lorem Ipsem lorem Ipsem lorem Ipsem lorem
          Ipsem lorem
        </p>
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0 sm:space-x-8 text-center">
          <a href="github.com/RMurayamaB" target="_blank" className="flex ">
            <Github size={28} className="mr-2" />
            GitHub
          </a>
          <a
            href="linkedin.com/in/rafael-murayama-barcelos-014511266"
            target="_blank"
            className="flex items-center"
          >
            <Linkedin size={28} className="mr-2" />
            LinkedIn
          </a>
          <div className="flex ">
            <Mail size={28} className="mr-2" />
            <span>Email: rafaelbarcelos@gmail.com</span>
          </div>
          <div className="flex">
            <Phone size={28} className="mr-2" />
            <span>Telefone: (64) 99276-1742</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
