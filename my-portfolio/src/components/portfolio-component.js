import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Code, Database, Globe, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma completa de e-commerce com React, Node.js, MongoDB e sistema de pagamentos integrado.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "fullstack"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com gráficos em tempo real e visualizações avançadas.",
      tech: ["React", "D3.js", "Express", "PostgreSQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "frontend"
    },
    {
      title: "API RESTful Microservices",
      description: "Arquitetura de microserviços robusta com autenticação, rate limiting e documentação completa.",
      tech: ["Node.js", "Docker", "Redis", "MySQL", "Swagger"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "backend"
    },
    {
      title: "Social Media App",
      description: "Aplicativo social completo com chat em tempo real, posts, stories e sistema de notificações.",
      tech: ["React Native", "Firebase", "Node.js", "WebSocket"],
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "mobile"
    },
    {
      title: "Task Management System",
      description: "Sistema de gerenciamento de tarefas com Kanban board, colaboração em equipe e relatórios.",
      tech: ["Vue.js", "Express", "MongoDB", "Socket.io", "Chart.js"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "fullstack"
    },
    {
      title: "ML Model Deployment",
      description: "Deploy de modelos de machine learning com API Flask e interface React para predições.",
      tech: ["Python", "Flask", "React", "TensorFlow", "Docker"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "ai"
    }
  ];

  const skills = {
    frontend: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "SASS", "Next.js"],
    backend: ["Node.js", "Python", "Express", "Django", "Flask", "GraphQL", "REST APIs"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma"],
    tools: ["Docker", "AWS", "Git", "CI/CD", "Webpack", "Jest", "Postman"]
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-2xl animate-bounce" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item ? 'text-purple-400' : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 space-y-4 bg-black/40 backdrop-blur-md rounded-lg">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-6">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Code size={48} className="text-purple-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-slide-up">
            Desenvolvedor
            <br />
            <span className="text-4xl md:text-6xl">Fullstack</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up-delay">
            Criando experiências digitais excepcionais com tecnologias modernas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Ver Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transform hover:scale-105 transition-all duration-300"
            >
              Entrar em Contato
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Sou um desenvolvedor fullstack apaixonado por criar soluções inovadoras e escaláveis. 
                  Com experiência em desenvolvimento front-end e back-end, trabalho com as mais modernas 
                  tecnologias do mercado.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Minha jornada inclui projetos desafiadores em e-commerce, dashboards analytics, 
                  APIs robustas e aplicações mobile. Sempre busco aprender novas tecnologias e 
                  aplicar as melhores práticas de desenvolvimento.
                </p>
                
                <div className="flex gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">3+</div>
                    <div className="text-sm text-gray-400">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">50+</div>
                    <div className="text-sm text-gray-400">Projetos Concluídos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">20+</div>
                    <div className="text-sm text-gray-400">Tecnologias</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-white/10 p-8 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    <Globe className="w-12 h-12 text-purple-400 animate-pulse" />
                    <Database className="w-12 h-12 text-pink-400 animate-pulse delay-100" />
                    <Code className="w-12 h-12 text-blue-400 animate-pulse delay-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-purple-600 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-purple-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Habilidades
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={category}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 capitalize text-purple-400">
                  {category === 'frontend' ? 'Frontend' : 
                   category === 'backend' ? 'Backend' : 
                   category === 'database' ? 'Database' : 'Tools'}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-2 bg-white/5 rounded-lg hover:bg-purple-500/20 transition-colors"
                    >
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vamos Trabalhar Juntos?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Estou sempre aberto a novos desafios e oportunidades. 
              Entre em contato e vamos criar algo incrível!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:seu.email@exemplo.com"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Mail size={20} />
                Enviar Email
              </a>
              
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/seu-perfil"
                  className="p-4 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/seu-usuario"
                  className="p-4 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Portfolio. Desenvolvido com React e muito ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;