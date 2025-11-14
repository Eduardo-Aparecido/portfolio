import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Database, 
  Smartphone,
  Send,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { toast } = useToast();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contato", href: "#contact" },
  ];

  const projects = [
    {
      title: "Painel de Chamados",
      description: "Projeto Full-stack para administrar abertura de chamados em pequenas empresas.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Database"],
      github: "https://github.com/Eduardo-Aparecido/painel-de-chamados",
      demo: "https://painel-chamados.infinityfreeapp.com/",
    },
    {
      title: "Página de Divulgação",
      description: "Criada para divulgar locais e eventos nas cidades.",
      tech: ["React", "TypeScript", "Supabase", "Vercel"],
      github: "https://github.com/Eduardo-Aparecido/ROUTS-PROJECT",
      demo: "https://routs-project.vercel.app/",
    },
    {
      title: "Controle de Estoque",
      description: "Projeto Full-stack para monitorar o estoque com logs e permissionamento.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Database"],
      github: "https://github.com/Eduardo-Aparecido/controle-de-estoque",
      demo: "https://controle-de-estoque.infinityfree.me/index.php?page=login",
    },
  ];

  const skills = [
    { name: "Frontend Dev", icon: Code2, color: "electric" },
    { name: "UI/UX Design", icon: Palette, color: "neon-purple" },
    { name: "Backend Dev", icon: Database, color: "neon-green" },
    { name: "Mobile Dev", icon: Smartphone, color: "electric" },
  ];

  // ✅ Função de envio de email (EmailJS)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_ko636jg", // seu service_id
        "template_lzof8mf", // seu template_id
        form,
        "c0zGOUPfRD-X1w8i-" // sua public_key
      )
      .then(
        () => {
          toast({
            title: "Mensagem enviada!",
            description: "Obrigado por entrar em contato. Entrarei em contato com você em breve.",
          });
          form.reset();
        },
        (error) => {
          toast({
            title: "Erro ao enviar",
            description: "Ocorreu um problema. Tente novamente.",
            variant: "destructive",
          });
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              PORTFÓLIO
            </motion.h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 flex flex-col gap-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4,
          }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"
          style={{ opacity, scale }}
        />

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Eduardo Aparecido</span>
              <br />
              <span className="text-foreground">Desenvolvedor Front-end</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              Criando experiências digitais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                asChild
              >
                <a href="#projects">Projetos</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="#contact">Contato</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16"
            >
              <a href="#about" className="inline-block animate-float">
                <ChevronDown size={32} className="text-primary" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Sobre <span className="gradient-text">Mim</span>
            </h2>
            
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-border/50">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou um desenvolvedor web e designer apaixonado, 
                com um olhar aguçado para criar experiências digitais bonitas e funcionais. 
                Minha jornada na tecnologia tem sido movida pela curiosidade e pelo desejo constante de aprender e inovar.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Especializado em tecnologias web modernas, 
                preencho a lacuna entre design e desenvolvimento para oferecer experiências de usuário perfeitas. 
                Do conceito à implantação, garanto que cada projeto seja elaborado com atenção aos detalhes e ao desempenho.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="/curriculo.jpg" download>
                    Download CV
                  </a>
                </Button>

                <div className="flex gap-4">
                  {/* GitHub */}
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-border hover:border-primary hover:text-primary"
                    asChild
                  >
                    <a
                      href="https://github.com/Eduardo-Aparecido"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </Button>

                  {/* LinkedIn */}
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-border hover:border-primary hover:text-primary"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/eduardo-aparecido-b8858753/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                  </Button>

                  {/* Email */}
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-border hover:border-primary hover:text-primary"
                    asChild
                  >
                    <a
                      href="mailto:aparecidoj.edu@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Eduardo,%20tudo%20bem?%20Gostaria%20de%20falar%20sobre..."
                    >
                      <Mail size={20} />
                    </a>
                  </Button>
                </div>

              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Principais <span className="gradient-text">Projetos</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" className="border-border hover:border-primary hover:text-primary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Código
                        </a>
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Demonstração
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Minhas <span className="gradient-text">Skills</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-8 text-center bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <skill.icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Tecnologias com as quais trabalho</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "TailwindCSS", "PHP", "phpMyAdmin"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-muted text-foreground rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Entre em <span className="gradient-text">Contato</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Tem algum projeto em mente? Entre em contato!
            </p>

            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Nome
                  </label>
                  <Input name="name" placeholder="Seu nome" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input name="email" type="email" placeholder="Seu.email@exemplo.com" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Mensagem
                  </label>
                  <Textarea name="message" placeholder="Deixe uma mensagem..." rows={5} required />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
                  <Send size={20} className="mr-2" /> Enviar Mensagem
                </Button>
              </form>

              <div className="mt-8 flex justify-center gap-6">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:contact@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">
              © 2025 Portfólio.
            </p>
            
            <div className="flex gap-6">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projetos
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              ↑ Voltar ao topo
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
