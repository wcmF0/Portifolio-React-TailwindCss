import React, { useState, useEffect, useRef } from "react";
import ProjetoAram from "./assets/ProjetoAram.png";
import CardBank from "./assets/CardBank.png";
import CodeConnect from "./assets/CodeConnect.png";
import SpotifyClone from "./assets/SpotifyClone.png";
import Fokus from "./assets/Fokus.png";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiVite } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("about");
  const [filter, setFilter] = useState("Todas");
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [showCopied, setShowCopied] = useState(false);

  const allTechnologies = [
    { name: "HTML5", icon: FaHtml5, category: ["Front-End"] },
    { name: "CSS3", icon: FaCss3Alt, category: ["Front-End"] },
    { name: "JavaScript", icon: FaJs, category: ["Front-End", "Back-End"] },
    {
      name: "TypeScript",
      icon: SiTypescript,
      category: ["Front-End", "Back-End"],
    },
    { name: "React", icon: FaReact, category: ["Front-End"] },
    { name: "TailwindCss", icon: RiTailwindCssFill, category: ["Front-End"] },
    { name: "Vite", icon: SiVite, category: ["Front-End"] },
    { name: "Node.js", icon: FaNodeJs, category: ["Back-End"] },
    { name: "Git", icon: FaGit, category: ["Ferramentas"] },
    { name: "GitHub", icon: FaGithub, category: ["Ferramentas"] },
    {
      name: "Visual Studio Code",
      icon: BiLogoVisualStudio,
      category: ["Ferramentas"],
    },
    { name: "Figma", icon: FaFigma, category: ["Ferramentas"] },
    { name: "Vercel", icon: IoLogoVercel, category: ["Ferramentas"] },
  ];
  const [technologies, setTechnologies] = useState(allTechnologies);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("wcmf2002@gmail.com");
    setShowCopied(true);

    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  useEffect(() => {
    AOS.init({
      duration: 800, // Duração da animação em milissegundos
      easing: "ease-out-cubic", // Efeito suave
      once: false, // Permite que a animação ocorra tanto ao descer quanto ao subir
    });
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (projectsRef.current && aboutRef.current) {
        const aboutTop = aboutRef.current.offsetTop;
        const aboutBottom =
          aboutRef.current.offsetTop + aboutRef.current.offsetHeight;
        const projectsTop = projectsRef.current.offsetTop;

        if (window.scrollY >= projectsTop) {
          setActiveSection("projects");
        } else if (window.scrollY >= aboutTop && window.scrollY < aboutBottom) {
          setActiveSection("about");
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setTechnologies(
      newFilter === "Todas"
        ? allTechnologies
        : allTechnologies.filter((tech) => tech.category.includes(newFilter))
    );
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "AramRandomizer",
      description:
        "Um aplicativo web simples projetado para resolver um problema específico em jogos personalizados de ARAM (Modo de Jogo de League of Legends). No ARAM padrão, os jogadores geralmente têm 2 rerolls, criando uma seleção de 15 campeões. No entanto, essa funcionalidade não está disponível em jogos personalizados. Este aplicativo resolve o problema se comunicando com a API do Jogo, gerando aleatoriamente até 50 campeões únicos para cada equipe. Além disso, ele inclui um recurso prático para visualizar buffs e nerfs dos campeões com base no patch atual do jogo.",
      image: ProjetoAram,
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://aram-randomizer-roan.vercel.app/?lang=en-US",
    },
    {
      title: "Web Page - CardBank",
      description:
        "Projeto focado em criar uma página web moderna e funcional que comunica claramente os benefícios do banco aos seus clientes. O projeto inclui elementos dinâmicos e interativos, garantindo uma navegação intuitiva, além de um design responsivo que se adapta a diversos dispositivos. Meu foco foi oferecer uma experiência visualmente atraente e centrada no usuário.",
      image: CardBank,
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      link: "https://card-bank-react.vercel.app",
    },
    {
      title: "CodeConnectApp",
      description:
        "        A tela de feed da aplicação apresenta um menu de navegação, uma barra de pesquisa, seções de filtros e ordenação, além de cards que resumem as postagens realizadas na plataforma. Atualmente, todos os elementos possuem apenas funcionalidades visuais.",
      image: CodeConnect,
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      link: "https://codeconnect-react-app.vercel.app",
    },
    {
      title: "Fokus Pomodoro",
      description:
        "Criei um timer Pomodoro intuitivo para aumentar a produtividade, com funções de lista de tarefas e música integrada para aprimorar o foco e o gerenciamento de tempo.",
      image: Fokus,

      technologies: ["TypeScript", "JavaScript", "HTML", "CSS"],
      link: "https://fokus-ts-one.vercel.app",
    },
    {
      title: "Spotify Clone",
      description:
        "Projeto desenvolvido junto à imersão da Alura, que consistia em criar uma réplica do site Spotify e criar uma API com alguns artistas",
      image: SpotifyClone,
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      link: "https://spotify-react-jet.vercel.app",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-[#0f172a] text-gray-300  ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      <div
        ref={glowRef}
        className="mouse-glow"
        style={{
          position: "fixed",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          filter: "blur(40px)",
        }}
      ></div>
      <div className="flex flex-col lg:flex-row lg:p-12 lg:mr-10 lg:ml-10">
        {/* Left Fixed Container */}
        <div
          className="lg:fixed lg:w-1/2 h-screen p-8 flex flex-col justify-between"
          data-aos="fade-right"
        >
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 text-[#e2e8f0]">
              Wagner Filho
            </h1>
            <h2 className="text-2xl text-gray-400 text-[#e2e8f0]">
              Desenvolvedor Front End
            </h2>
            <p className="text-lg max-w-xl mt-4 text-[#8E9DB2]">
              Desenvolvo interfaces web funcionais e acessíveis, garantindo
              usabilidade e desempenho.
            </p>

            {/* Navigation Buttons */}
            <div className="flex flex-col gap-4 mt-11">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className={`h-fit w-fit transition-all duration-300 text-left  relative group ${
                  activeSection === "about" ? "text-[#64ffda]" : "text-gray-400"
                }`}
              >
                <span className="relative z-10">SOBRE MIM</span>
                <span
                  className={`relative inset-0 bg-[#64ffda]/10 rounded-lg transition-all duration-300  ${
                    activeSection === "about"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                ></span>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#64ffda] transition-all duration-300 ${
                    activeSection === "about"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>

              <button
                onClick={() => scrollToSection(projectsRef)}
                className={`h-fit w-fit transition-all duration-300 text-left relative group  ${
                  activeSection === "projects"
                    ? "text-[#64ffda]"
                    : "text-gray-400"
                }`}
              >
                <span className="relative z-10">PROJETOS</span>
                <span
                  className={`relative inset-0 bg-[#64ffda]/10 rounded-lg transition-all duration-300 ${
                    activeSection === "projects"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                ></span>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#64ffda] transition-all duration-300 ${
                    activeSection === "projects"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            </div>
            <div className="flex space-x-6 text-gray-400 mt-12">
              <a
                href="https://www.github.com/wcmF0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors hover:scale-150"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/wcmf0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors hover:scale-150"
              >
                <Linkedin size={24} />
              </a>
              <a
                onClick={handleCopyEmail}
                style={{ cursor: "pointer" }}
                className="hover:text-white transition-colors hover:scale-150"
              >
                <Mail size={24} />
              </a>
              <a
                href="/src/assets/Currículo Wagner Costa Magalhães Filho.pdf"
                download
                className="hover:text-white transition-colors hover:scale-150"
              >
                <FileText size={24} />
                {showCopied && (
                  <div className="copied-message">Email copiado!</div>
                )}
              </a>
            </div>
          </div>
        </div>

        {/* Right Scrollable Container */}
        <div className={`lg:w-1/2 lg:ml-[50%] p-8 transition-all duration-700`}>
          <section ref={aboutRef} className="mb-16" data-aos="fade-up">
            <div
              className="space-y-4 mb-16 text-[#8E9DB2]"
              data-aos="fade-left"
            >
              <p>
                Olá, meu nome é Wagner Filho. Atualmente curso Análise e
                Desenvolvimento de Sistemas e nos últimos meses, tenho me
                dedicado ao aprendizado e aprimoramento em tecnologias.
              </p>
              <p>
                Estou em busca da minha primeira oportunidade na área de
                Desenvolvimento, pronto para aplicar os conhecimentos adquiridos
                e continuar evoluindo profissionalmente.
              </p>
              <p>
                Sou bacharel em Direito e recentemente realizei uma transição de
                carreira para a área de Desenvolvimento, motivado pela paixão
                por tecnologia e inovação.
              </p>
            </div>

            <h3
              className="text-2xl font-bold text-[#e2e8f0] mb-8"
              data-aos="fade-left"
            >
              Tecnologias
            </h3>
            <div className="mb-8">
              {["Todas", "Front-End", "Back-End", "Ferramentas"].map(
                (category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 m-2 rounded ${
                      filter === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-[#e2e8f0]"
                    } hover:bg-blue-500 transition-all`}
                    onClick={() => handleFilterChange(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            {/* Tecnologias com animação */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map(({ name, icon: Icon }, index) => (
                <div
                  key={`${name}-${filter}-${index}`}
                  className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all flex justify-center items-center space-x-2 opacity-0 transform translate-y-4"
                  style={{
                    animation: `fadeIn 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <Icon size={40} color="#e2e8f0" />
                  <span className="text-[#e2e8f0] font-semibold">{name}</span>
                </div>
              ))}
            </div>
          </section>

          <section ref={projectsRef} className="mb-16" data-aos="fade-up">
            <h3
              className="text-2xl font-bold text-[#e2e8f0] mb-8"
              data-aos="fade-left"
            >
              Projetos
            </h3>
            <div className="space-y-12 group">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="relative border-2 border-[#8E9DA5] rounded-lg overflow-hidden transition-all duration-300 group-hover:opacity-20 hover:!opacity-100 hover:scale-105 hover:border-[#64ffda]"
                  data-aos="fade-in"
                  data-aos-delay={index * 100}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.classList.add("hover-active");
                    target.querySelectorAll(".hover-target").forEach((el) => {
                      el.classList.add("highlight");
                    });
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.classList.remove("hover-active");
                    target.querySelectorAll(".hover-target").forEach((el) => {
                      el.classList.remove("highlight");
                    });
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-8 flex flex-col items-center"
                  >
                    {/* Título do projeto */}
                    <h4 className="text-xl font-bold text-gray-200 transition-all duration-300 text-center hover-target">
                      {project.title}
                      <ExternalLink className="inline-block ml-2" size={20} />
                    </h4>
                    <div className="flex justify-center mb-4">
                      {/* Imagem do projeto */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-64 h-40 object-cover mt-2"
                      />
                    </div>
                    <p className="text-gray-400 mb-4 text-[#8E9DB2] text-center text-justify text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {/* Tecnologias */}
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#0a192f]/50 px-3 py-1 rounded-full text-sm text-gray-400 transition-all duration-300 hover-target"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>
          <footer
            className="footer p-2 text-center mt-5 text-[#8E9DB2]"
            data-aos="fade-in"
          >
            Portfólio inspirado pela{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://brittanychiang.com"
            >
              Brittany Chiang
            </a>
            , codificado no{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://code.visualstudio.com"
            >
              Visual Studio Code
            </a>{" "}
            por mim mesmo. Construído com{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://react.dev"
            >
              React{" "}
            </a>
            e{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com"
            >
              Tailwind CSS
            </a>
            , implantado com{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vercel.com/"
            >
              Vercel
            </a>
            . Todo o texto está configurado na fonte{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://rsms.me/inter/"
            >
              Inter
            </a>
            .
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
