import { motion } from 'framer-motion'
import {
  ArrowRight,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Linkedin,
  GraduationCap,
  Briefcase,
  Award,
  Code2
} from 'lucide-react'
import './index.css'

const skills = [
  'Python',
  'SQL',
  'DSA',
  'OOP',
  'NumPy',
  'Pandas',
  'Matplotlib',
  'Machine Learning',
  'HTML',
  'CSS',
  'JavaScript'
]

const projects = [
  {
    title: 'AI Resume Screening Project',
    desc: 'AI-based resume analysis project focused on screening, keyword matching, and improvement suggestions.',
    tags: ['Python', 'ML', 'NLP'],
    link: '#contact'
  },
  {
    title: 'Plant Disease Detection',
    desc: 'Image-based project that identifies plant diseases from leaf images.',
    tags: ['Python', 'ML', 'Computer Vision'],
    link: '#contact'
  },
  {
    title: 'Responsive Portfolio Website',
    desc: 'Built using HTML, CSS, and JavaScript to showcase projects and experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#contact'
  }
]

const experience = [
  'Community Intern GeeksforGeeks — promoted coding culture, organized contests and workshops, and improved student engagement.',
  'President, Unstop Igniters Club — led technical and leadership activities on campus.',
  'Campus Ambassador for IIT Bombay and GeeksforGeeks — supported outreach and student engagement initiatives.'
]

const certifications = [
  'GeeksforGeeks Community Internship Certificate',
  'AI Resume Screening Project Certificate',
  'Machine Learning Certification (Infosys Springboard)',
  'Python Programming Certification (Infosys Springboard)',
  'Web Development Certification (Infosys Springboard)',
  'NEC — IIT Bombay Participation Certificate'
]

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="section-title">
      <div className="section-kicker">
        <Icon size={16} /> {title}
      </div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

function Card({ children }) {
  return <div className="card">{children}</div>
}

function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">Bhavya.</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-grid"
        >
          <div>
            <p className="eyebrow">Computer Science (Data Science) Student</p>
            <h1>Ankam Bhavya Lakshmi</h1>
            <p className="lead">
              Building practical Python, web development, and machine learning projects that solve real problems.
            </p>

            <div className="hero-meta">
              <span>
                <MapPin size={16} /> Vijayawada, Andhra Pradesh
              </span>
              <span>
                <GraduationCap size={16} /> NRI Institute of Technology · CGPA 8.5
              </span>
            </div>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects <ArrowRight size={16} />
              </a>
              <a className="btn secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <Card>
            <h3>Profile</h3>
            <p>
              I am a B.Tech CSE (Data Science) student with skills in Python, DSA, SQL, Web Development, and Machine Learning.
            </p>
            <div className="profile-points">
              <span>Python & Data Science</span>
              <span>Leadership & Community</span>
              <span>Project-based Learning</span>
            </div>
          </Card>
        </motion.div>
      </header>

      <main>
        <section id="about" className="section">
          <SectionTitle
            icon={Code2}
            title="About"
            subtitle="A quick overview of my background and focus."
          />
          <Card>
            <p>
              I am a Computer Science (Data Science) student at NRI Institute of Technology with a strong interest in software development and emerging technologies.
              I have developed AI-based projects and actively participated in technical and leadership activities, which strengthened my problem-solving and communication skills.
            </p>
          </Card>
        </section>

        <section id="projects" className="section">
          <SectionTitle
            icon={Briefcase}
            title="Projects"
            subtitle="Selected work that shows my skills and interests."
          />
          <div className="grid three">
            {projects.map((project) => (
              <Card key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="text-link">
                  View details <ExternalLink size={14} />
                </a>
              </Card>
            ))}
          </div>
        </section>

        <section className="section two-col">
          <div id="experience">
            <SectionTitle
              icon={Briefcase}
              title="Experience"
              subtitle="Internship and leadership roles."
            />
            <Card>
              <ul className="list">
                {experience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>

          <div>
            <SectionTitle
              icon={Award}
              title="Certifications"
              subtitle="Courses and achievements."
            />
            <Card>
              <ul className="list">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="section two-col">
          <div>
            <SectionTitle
              icon={GraduationCap}
              title="Education"
              subtitle="Academic background."
            />
            <Card>
              <p>
                <strong>Bachelor of Technology</strong>
                <br />
                NRI Institute of Technology
                <br />
                Computer Science Engineering - Data Science
                <br />
                CGPA: 8.5
              </p>
              <hr />
              <p>
                <strong>SSC (10th)</strong>
                <br />
                Narayana School
                <br />
                Percentage: 100%
              </p>
              <hr />
              <p>
                <strong>Intermediate</strong>
                <br />
                Narayana Junior College
                <br />
                MPC
                <br />
                Percentage: 87%
              </p>
            </Card>
          </div>

          <div>
            <SectionTitle
              icon={Code2}
              title="Skills"
              subtitle="Tools and technologies I work with."
            />
            <Card>
              <div className="tags skills">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section id="contact" className="section">
          <SectionTitle
            icon={Mail}
            title="Contact"
            subtitle="Open to opportunities, collaborations, and internships."
          />
          <Card>
            <div className="contact-grid">
              <a href="mailto:bhavyalakshmiankam@gmail.com" className="contact-item">
                <Mail size={16} /> bhavyalakshmiankam@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/bhavyalakshmi-ankam-72a9aa2b9/"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <Linkedin size={16} /> LinkedIn Profile
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-item">
                <Github size={16} /> GitHub
              </a>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default App