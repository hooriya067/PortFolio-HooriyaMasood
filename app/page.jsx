'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, Database, Github, Layers3, Linkedin, Mail, Server, Sparkles, Cpu } from 'lucide-react';
import Scene from './components/Scene';

const projects = [
  {
    title: 'Advance Deepfake Detection',
    stack: 'PyTorch · CNN + Transformer · RGB + FFT',
    description:
      'Built a hybrid deepfake detection system combining RGB and frequency-domain (FFT) features with transformer-based fusion. Extended the model to perform region-level localization using superpixel segmentation and weak supervision, enabling interpretable detection of manipulated areas rather than just image-level classification.',
    highlights: ['Multimodal RGB + FFT pipeline', 'Cross-dataset testing', 'Interpretability / fake-region localization'],
    link: 'https://github.com/hooriya067/Advanced-deepfake-detection-with-annotation',
    cta: 'View project',
    private: false,
  },
  {
    title: 'Insight Canvas',
    stack: 'React · FastAPI · Machine Learning · Plotly',
    description:
      'Engineered an intelligent data visualisation platform that automatically generates and ranks insights from datasets using ML-based ranking models (LambdaMART). Built a full-stack system with interactive dashboards, story generation, and chart history for enhanced analytical workflows.',
    highlights: [
      'ML-based chart ranking (LambdaMART)',
      'Story builder for data narratives',
      'Interactive dashboards with Plotly',
      'Full-stack architecture (React + FastAPI)',
    ],
    link: 'mailto:hcyhm2@nottingham.edu.my?subject=Request%20access%20to%20Insight%20Canvas',
    cta: 'Request access',
    private: true,
  },
  {
    title: 'Rentify - Peer2Peer Renting',
    stack: 'Kotlin · Jetpack Compose · Firebase · Stripe',
    description:
      'Built a full-stack mobile rental platform enabling peer-to-peer item sharing with real-time booking, conflict-free scheduling, and secure payments. Designed using MVVM architecture with Firebase and a custom Stripe backend, supporting features like time-slot validation, penalty enforcement, messaging, and transaction tracking in a scalable, production-style system.',
    highlights: [
      'Real-time booking & scheduling',
      'Firebase backend integration',
      'Stripe payment workflow',
    ],
//     link: 'mailto:hcyhm2@nottingham.edu.my?subject=Request%20access%20to%20Rentify',
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=hcyhm2@nottingham.edu.my&su=Request%20Access&body=Hi%20Hooriya,%20I%20would%20like%20to%20request%20access%20to%20Rentify.',
    cta: 'Request access',
    private: true,
  },
  {
    title: 'Warehouse Management - Hybrid Multi-Agent System',
    stack: 'Python · Multi-Agent Systems · A* · Reinforcement Learning',
    description:
      'Developing a hybrid Intelligent multi-agent warehouse system combining A* path planning, congestion-aware task allocation, and reactive safety control. Uses dynamic traffic heatmaps to optimise routing, reduce deadlocks, and improve multi-robot coordination in constrained environments.',
    highlights: [
      'Hybrid architecture (planning + adaptive layer)',
      'Congestion-aware task allocation',
      'Dynamic heatmap-based routing',
      'Focus on deadlock reduction & efficiency',
    ],
    link: '#',
    cta: 'Ongoing project',
    private: true,
  },
  {
    title: 'Flower Segmentation Pipeline',
    stack: 'Python · OpenCV · NumPy · Image Processing',
    description:
      'Designed a classical image processing pipeline to segment flowers from complex backgrounds using bilateral filtering, K-means clustering, watershed refinement, and morphological operations. Achieved high segmentation accuracy (mIoU ~0.91) with a lightweight and interpretable approach.',
    highlights: [
      'K-means clustering + watershed segmentation',
      'Morphological refinement pipeline',
      'mIoU up to ~0.91',
      'No deep learning – efficient & interpretable',
    ],
    link: 'https://github.com/hooriya067/Flower-segmentation',
    cta: 'View project',
    private: false,
  },
  {
    title: 'Sky Strike Saga - 2D Survival Game Engine',
    stack: 'Java · Maven · Game Logic · OOP',
    description:
      'Developed a 2D survival game featuring real-time player movement, enemy, collision handling, and health-based combat mechanics. Designed using object-oriented principles with modular systems for game state management, rendering, and interaction logic.',
    highlights: [
      'Real-time player movement & controls',
      'Enemy AI behaviour & combat system',
      'Collision detection & health mechanics',
      'Modular OOP-based game architecture',
    ],
    link: 'https://github.com/hooriya067/DevMainSoft-CW2024',
    cta: 'View project',
    private: false,
  },
  {
    title: 'Developer Portfolio',
    stack: 'Next.js · React · Tailwind CSS · Three.js · Vercel',
    description:
      'Built a modern 3D portfolio website to showcase AI, full-stack, and systems projects with interactive visuals and recruiter-focused design. Features smooth animations, responsive layouts, and direct integration with live projects and GitHub repositories.',
    highlights: [
      '3D interactive landing (Three.js)',
      'Responsive & recruiter-friendly design',
      'Project showcase with live/demo links',
      'Deployed on Vercel with CI/CD',
    ],
    link: 'https://port-folio-hooriya-masood-nw8d.vercel.app/',
    cta: 'View project',
    private: false,
  },
];

const skills = [
  {
    icon: BrainCircuit,
    title: 'AI / Machine Learning',
    items: [
      'PyTorch',
      'TensorFlow',
      'Deep Learning',
      'Computer Vision',
      'Vision Transformers (ViT)',
      'CNNs',
    ],
  },
  {
    icon: Server,
    title: 'Backend / Systems',
    items: [
      'Python',
      'Java',
      'Node.js',
      'FastAPI',
      'Django',
      'REST APIs',
      'Inference Systems',
      'Data Pipelines',
    ],
  },
  {
    icon: Layers3,
    title: 'Frontend / Applications',
    items: [
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'HTML/CSS',
      'Plotly',
      'Interactive Dashboards',
    ],
  },
  {
    icon: Database,
    title: 'Data & Infrastructure',
    items: [
      'SQL',
      'Firebase',
      'Supabase',
      'Cloud Firestore',
      'Pandas',
      'NumPy',
    ],
  },
  {
    icon: Cpu,
    title: 'Engineering & Tools',
    items: [
      'C',
      'Kotlin',
      'Haskell',
      'Data Structures & Algorithms',
      'Multi-Agent Systems',
      'System Design',
      'Git & GitHub',
      'Debugging & Optimization',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/70 backdrop-blur-xl">
      <div className="container-width flex items-center justify-between py-4">
        <a href="#top" className="text-sm font-semibold tracking-[0.18em] text-white/90 uppercase">
          Hooriya Masood
        </a>
        <nav className="hidden gap-6 text-sm text-soft md:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg bg-grid opacity-40" />
      <div className="container-width relative grid min-h-[92vh] items-center gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent shadow-glow">
            <Sparkles size={16} />
            AI Engineer · Software Developer · Full-Stack Builder
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            I build <span className="gradient-text">AI systems</span>, web apps, and software that are practical,
            intelligent, and deployable.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-soft md:text-lg">
            I’m Hooriya Masood, a final-year Computer Science student passionate about both AI engineering and software
            development. I work across machine learning, computer vision, full-stack web development, and mobile app
            development, building systems where models, APIs, data flow, and user experience come together cleanly.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl border border-accent/40 bg-accent/15 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-accent/20"
            >
              View Projects
            </a>
            <a
              href="https://github.com/hooriya067"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              GitHub
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-soft">
            <span>PyTorch</span>
            <span>FastAPI</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Kotlin</span>
            <span>Computer Vision</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="glass relative h-[420px] overflow-hidden rounded-[32px] shadow-glow"
        >
          <Scene />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/10 to-transparent p-6">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.22em] text-soft">Current focus</p>
              <p className="mt-2 text-sm text-white/90">
                AI systems · Full-stack development · Intelligent interfaces · Mobile & web applications
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container-width">
        <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Featured Projects
        </motion.h2>
        <motion.p className="section-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.08 }}>
          A selection of projects showing how I work across AI modeling, backend systems, and product-facing interfaces.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.08 }}
              className="glass group rounded-[28px] p-6 transition hover:-translate-y-1"
            >
              <div className="mb-6 h-40 rounded-2xl border border-white/10 bg-gradient-to-br from-accent/10 via-white/5 to-accent2/10" />
              <p className="text-xs uppercase tracking-[0.18em] text-accent">{project.stack}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-soft">{project.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-white/90">
                {project.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
          {project.private ? (
              <a
                href={project.link}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition group-hover:gap-3"
              >
                {project.cta} <ArrowUpRight size={16} />
              </a>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition group-hover:gap-3"
              >
                {project.cta} <ArrowUpRight size={16} />
              </a>
        )}
                        </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container-width">
        <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Skills & Technical Range
        </motion.h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                className="glass rounded-[28px] p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.08 }}
              >
                <div className="mb-4 inline-flex rounded-2xl border border-accent/30 bg-accent/10 p-3 text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <ul className="mt-5 space-y-2 text-sm leading-7 text-soft">
                  {skill.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-width">
        <div className="glass grid gap-8 rounded-[32px] p-8 md:grid-cols-[0.85fr_1.15fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">About me</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Builder mindset. Research depth. Product focus.</h2>
          </div>
          <div className="space-y-5 text-sm leading-8 text-soft md:text-base">
            <p>
              I am a final-year Computer Science student at the University of Nottingham Malaysia with a strong interest in AI and Software engineering, computer vision, and full-stack systems.
            </p>
            <p>
              My projects usually sit at the intersection of research and real software: training models, exposing them through APIs, and designing interfaces that make them usable for real people.Also in Frontend Development as well as Backend Integration.
            </p>
            <p>
              I am especially interested in roles where I can contribute across the Full Stack Web and App development, stack—building intelligent products, evaluating model performance, and turning technical ideas into reliable systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="pb-24 pt-8">
      <div className="container-width">
        <div className="glass rounded-[32px] p-8 md:p-10">
          <h2 className="section-title">Let’s build something meaningful.</h2>
          <p className="section-subtitle">
            I am currently looking for internship opportunities in AI engineering, Software engineering, Full-Stack Development , and intelligent systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:hcyhm2@nottingham.edu.my" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 hover:bg-white/5">
              <Mail size={18} /> Email
            </a>
            <a href="https://github.com/hooriya067" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 hover:bg-white/5">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/hooriya-masood/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 hover:bg-white/5">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
