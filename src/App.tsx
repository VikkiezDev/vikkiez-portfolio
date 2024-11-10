import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Terminal, Cpu, User, Award, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';

function App() {
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      description: 'Expert in React, TypeScript, and modern CSS frameworks',
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Development',
      description: 'Proficient in Node.js, Python, and database management',
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces',
    },
    {
      icon: <Terminal size={32} />,
      title: 'DevOps',
      description: 'Experience with CI/CD, Docker, and cloud platforms',
    },
    {
      icon: <Cpu size={32} />,
      title: 'System Architecture',
      description: 'Designing scalable and maintainable systems',
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2023',
      verifyUrl: 'https://aws.amazon.com/verification',
    },
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2023',
      verifyUrl: 'https://aws.amazon.com/verification',
    },
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2023',
      verifyUrl: 'https://aws.amazon.com/verification',
    },
    {
      title: 'Professional Scrum Master I',
      organization: 'Scrum.org',
      date: '2023',
      verifyUrl: 'https://www.scrum.org/certificates/verify',
    },
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <Section id="home" title="" className="flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            Hi, I'm <span className="text-purple-600">Vignesh Nadar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a href="#contact" className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
              Contact Me
            </a>
            <a href="#projects" className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors">
              View Work
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills & Expertise">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects" className="bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" title="Certifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Award className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.organization}</p>
              <p className="text-gray-500">{cert.date}</p>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-purple-600 hover:text-purple-700 transition-colors"
              >
                Verify Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About Me" className="bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="/assets/img/Vignesh Nadar.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
          />
          <p className="text-lg text-gray-700 mb-8">
            Enthusiastic, detail-oriented, with foundational skills in MySQL, Python, and MS Excel. Eager to learn and apply best practices in database management, data manipulation, and optimization. 
            Dedicated to promoting effective data-driven decisions. 
            Committed to delivering high-quality results while expanding my technical expertise in database administration.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/VikkiezDev" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vignesh-nadar23/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vigneshndrwork23@gmail.com" className="text-gray-700 hover:text-purple-600">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;
