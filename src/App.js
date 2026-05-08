import React, { useMemo, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Container,
  CssBaseline,
  useTheme,
  ThemeProvider,
  createTheme,
  Stack,
  Paper,
  Tooltip
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import Particles from './Particles';
import './Particles.css';
import profile from './profile.png';
import ClickSpark from './ClickSpark';
import ProfileCard from './ProfileCard';
import bgavatar from './bgavatar.png';
import grain from './grain.webp';
import { Typewriter } from 'react-simple-typewriter';
import CertificationsSection from './CertificationsSection';
import ScrollProgressBar from './ScrollProgressBar';
import ProjectCard3D from './ProjectCard3D';
import ProjectModal from './ProjectModal';
import StarBorder from './StarBorder';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';

const NAV_ITEMS = [
  { label: 'Home', id: 'hero' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
];

const TECHNICAL_SKILL_GROUPS = [
  {
    title: 'Programming Languages',
    accent: '#00e6fb',
    skills: [
      { label: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { label: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { label: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { label: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { label: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { label: 'SQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    title: 'Frameworks/Libraries',
    accent: '#4fc3f7',
    skills: [
      { label: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { label: 'FastAPI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { label: 'Flask', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { label: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
  },
  {
    title: 'Cloud/DevOps',
    accent: '#64b5f6',
    skills: [
      { label: 'GCP (Cloud Run, Cloud Storage)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { label: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
  },
  {
    title: 'Databases',
    accent: '#81d4fa',
    skills: [
      { label: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { label: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { label: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    title: 'CS Concepts',
    accent: '#90caf9',
    skills: [
      { label: 'DBMS Fundamentals' },
      { label: 'Computer Networks' },
      { label: 'OOPs' },
      { label: 'RAG Architecture' },
    ],
  },
];

const PROJECTS = [
  {
    name: 'Code Arena',
    description: 'A real-time coding challenge platform with secure Docker-based code execution. Users can create and join challenges, write code in multiple languages, test against cases, and compete live.',
    tech: ['React', 'Node.js', 'MongoDB', 'Docker'],
    link: 'https://github.com/DHANESH-KUMAR-S/Codearena',
    screenshot: '/screenshots/code-arena.png', // Add your screenshot path here
  },
  {
    name: 'Testforge AI',
    description: 'A Flask-based web app that generates manual test cases and automation scripts from project requirements. Supports multiple input types, frameworks, and includes responsive dark-mode UI.',
    tech: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://aitestcasegenerato.onrender.com/',
    screenshot: '/screenshots/testforge-ai.png', // Add your screenshot path here
  },
  {
    name: 'ThinkFirst AI',
    description: 'An AI learning assistant designed to promote independent problem-solving. Offers guidance and hints while avoiding spoon-feeding answers, with final answers revealed only on request.',
    tech: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://thinkfirstai.onrender.com/',
    screenshot: '/screenshots/thinkfirst-ai.png', // Add your screenshot path here
  },
  {
    name: 'BatGPT',
    description: 'A virtual assistant chatbot inspired by Batman, offering engaging and interactive conversation through a sleek web interface built with Flask and basic front-end stack.',
    tech: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://batgptai.onrender.com/',
    screenshot: '/screenshots/batgpt.png', // Add your screenshot path here
  },
  {
    name: 'Scanalyze AI',
    description: 'An AI-powered medical report analyzer designed to simplify medical reports for elderly users. Features file upload, OCR, chatbot integration, and responsive, elderly-friendly UI.',
    tech: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/DHANESH-KUMAR-S/Scanalyze-AI',
    screenshot: '/screenshots/scanalyze-ai.png', // Add your screenshot path here
  },
];

const shimmerKeyframes = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

const SOFT_SKILLS = [
  {
    name: 'Leadership Ability',
    description: 'Demonstrated leadership through project management, team coordination, and mentoring teammates. Led multiple successful team projects with lucid communication and strategic planning.',
    icon: '👥'
  },
  {
    name: 'Communication',
    description: 'Excellent verbal and written communication skills. Experienced in presenting technical concepts to diverse audiences, writing documentation, and collaborating with cross-functional teams.',
    icon: '💬'
  },
  {
    name: 'Critical Thinking',
    description: 'Strong analytical and problem-solving abilities. Skilled at breaking down complex problems, evaluating multiple solutions, and implementing optimal strategies for technical challenges.',
    icon: '🧠'
  },
  {
    name: 'Problem Solving',
    description: 'Proven track record of identifying, analyzing, and resolving complex technical issues. Experience with debugging, optimization, and creating innovative solutions for real-world problems.',
    icon: '🔧'
  }
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function MyAppBar({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  return (
    <AppBar position="fixed" color="default" elevation={2} sx={{ bgcolor: theme.palette.background.paper }}>
      <Toolbar sx={{ minHeight: '56px', py: 1 }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
          Dhanesh Kumar S
        </Typography>
        <Stack direction="row" spacing={2}>
          {NAV_ITEMS.map(item => (
            <Button key={item.id} color="inherit" onClick={() => scrollToSection(item.id)}>
              {item.label}
            </Button>
          ))}
        </Stack>
        <IconButton sx={{ ml: 2 }} onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

function HeroSection() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', pt: 10 }}>
      <Container maxWidth="md">
        <Paper elevation={4} sx={{
          p: 6,
          borderRadius: 4,
          textAlign: 'center',
          bgcolor: 'background.paper',
          backdropFilter: 'blur(8px)',
          borderTop: '4px solid #00e6fb',
          borderBottom: '4px solid #00e6fb',
          borderLeft: '4px solid #00e6fb',
          borderRight: '4px solid #00e6fb',
        }}>
          <Typography variant="h2" color="primary" fontWeight={800} gutterBottom>
            Dhanesh Kumar
          </Typography>
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              fontWeight: 700,
              mb: 2,
              minHeight: '2.5em',
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' },
              width: '100%',
              maxWidth: '100%',
            }}
          >
            <span style={{ color: 'inherit', fontWeight: 600, marginRight: 8, whiteSpace: 'nowrap' }}>
              Hi there !, I&apos;m a
            </span>
            <span style={{ color: '#00e6fb', textShadow: '0 0 12px #00e6fb, 0 0 24px #1976d2', fontFamily: 'monospace', fontWeight: 800, whiteSpace: 'nowrap' }}>
              <Typewriter
                words={[
                  'Aspiring Developer',
                  'Cloud Enthusiast',
                  'Motivated Individual',
                  'Problem Solver',
                  'Web Developer',
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{
                  backgroundColor: '#00e6fb',
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(0, 230, 251, 0.3)',
                  '&:hover': {
                    backgroundColor: '#00d4e8',
                    boxShadow: '0 6px 16px rgba(0, 230, 251, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                onClick={() => {
                  // Add your resume download link here
                  const link = document.createElement('a');
                  link.href = 'www.tinyurl.com/sdkresumee'; // Update this path to your actual resume file
                  link.open = true;
                  link.click();
                }}
              >
                Download Resume
              </Button>
              <Button
                variant="outlined"
                startIcon={<ConnectWithoutContactIcon />}
                sx={{
                  borderColor: '#00e6fb',
                  color: '#00e6fb',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  borderWidth: '2px',
                  '&:hover': {
                    borderColor: '#00d4e8',
                    backgroundColor: 'rgba(0, 230, 251, 0.1)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0, 230, 251, 0.2)',
                  },
                  transition: 'all 0.3s ease',
                }}
                onClick={() => {
                  // Open Calendly for project discussion scheduling
                  window.open('https://calendly.com/sdhaneshkumark/project-discussion-with-dhanesh', '_blank');
                }}
              >
                Connect for Projects
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

function SkillsSection() {
  return (
    <Box id="skills" sx={{ py: 10, bgcolor: 'background.default', scrollMarginTop: '80px' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" color="primary" fontWeight={700} align="center" gutterBottom sx={{ mb: 6 }}>
          My Skills
        </Typography>
        
        {/* Skills Container - Side by Side Layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 4,
            alignItems: 'flex-start',
          }}
        >
          {/* Technical Skills Section - Left Side */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Typography variant="h5" color="primary" fontWeight={600} align="center" gutterBottom sx={{ mb: 4 }}>
              Technical Skills
            </Typography>
            <Box
              sx={{
                border: '1px solid rgba(111, 206, 255, 0.45)',
                borderRadius: '24px',
                p: 4,
                background: 'linear-gradient(135deg, rgba(9, 20, 38, 0.8) 0%, rgba(10, 37, 58, 0.55) 45%, rgba(0, 230, 251, 0.08) 100%)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: 260,
                  height: 260,
                  top: -110,
                  right: -80,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 230, 251, 0.3) 0%, rgba(0, 230, 251, 0) 72%)',
                  pointerEvents: 'none',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(0, 230, 251, 0.1), transparent)',
                  animation: `${shimmerKeyframes} 3s infinite`,
                }
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 2.5,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {TECHNICAL_SKILL_GROUPS.map((group, groupIndex) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: groupIndex * 0.1, duration: 0.45 }}
                  >
                    <Box
                      sx={{
                        border: `1px solid ${group.accent}70`,
                        borderRadius: '20px',
                        p: 2,
                        height: '100%',
                        background: `linear-gradient(145deg, rgba(255,255,255,0.07) 0%, ${group.accent}20 100%)`,
                        backdropFilter: 'blur(12px)',
                        transition: 'all 0.28s ease',
                        '&:hover': {
                          transform: 'translateY(-4px) scale(1.01)',
                          boxShadow: `0 14px 32px ${group.accent}44`,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          mb: 1.5,
                          color: group.accent,
                          letterSpacing: 0.2,
                        }}
                      >
                        {group.title}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.1 }}>
                        {group.skills.map((skill) => (
                          <Tooltip key={skill.label} title={skill.label} arrow>
                            <Box
                              sx={{
                                px: 1.4,
                                py: 0.8,
                                borderRadius: '14px',
                                border: `1px solid ${group.accent}88`,
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)',
                                color: 'text.primary',
                                fontSize: '0.82rem',
                                fontWeight: 600,
                                lineHeight: 1.2,
                                letterSpacing: 0.2,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0.8,
                                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
                                transition: 'all 0.22s ease',
                                cursor: 'default',
                                '&:hover': {
                                  background: `${group.accent}2b`,
                                  borderColor: group.accent,
                                  transform: 'translateY(-1px)',
                                },
                              }}
                            >
                              {skill.iconUrl ? (
                                <Box
                                  component="span"
                                  aria-label={skill.label}
                                  sx={{
                                    minWidth: 28,
                                    height: 28,
                                    borderRadius: '9px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(14, 22, 32, 0.88)',
                                    border: `1px solid ${group.accent}66`,
                                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                                    p: 0.5,
                                  }}
                                >
                                  <Box
                                    component="img"
                                    src={skill.iconUrl}
                                    alt={skill.label}
                                    sx={{
                                      width: 18,
                                      height: 18,
                                      display: 'block',
                                    }}
                                  />
                                </Box>
                              ) : (
                                <span>{skill.label}</span>
                              )}
                            </Box>
                          </Tooltip>
                        ))}
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Soft Skills Section - Right Side */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Typography variant="h5" color="primary" fontWeight={600} align="center" gutterBottom sx={{ mb: 4 }}>
              Soft Skills
            </Typography>
            <Box
              sx={{
                border: '1px solid rgba(111, 206, 255, 0.45)',
                borderRadius: '24px',
                p: 4,
                background: 'linear-gradient(135deg, rgba(9, 20, 38, 0.8) 0%, rgba(10, 37, 58, 0.55) 45%, rgba(0, 230, 251, 0.08) 100%)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: 240,
                  height: 240,
                  top: -95,
                  right: -70,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 230, 251, 0.25) 0%, rgba(0, 230, 251, 0) 72%)',
                  pointerEvents: 'none',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(0, 230, 251, 0.1), transparent)',
                  animation: `${shimmerKeyframes} 3.2s infinite`,
                },
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 2.5,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {SOFT_SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.45 }}
                  >
                    <Box
                      sx={{
                        border: '1px solid rgba(0, 230, 251, 0.45)',
                        borderRadius: '20px',
                        p: 2.2,
                        height: '100%',
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(0, 230, 251, 0.12) 100%)',
                        backdropFilter: 'blur(12px)',
                        transition: 'all 0.28s ease',
                        '&:hover': {
                          transform: 'translateY(-4px) scale(1.01)',
                          boxShadow: '0 14px 32px rgba(0, 230, 251, 0.24)',
                          borderColor: 'rgba(0, 230, 251, 0.78)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.2 }}>
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '10px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            background: 'rgba(14, 22, 32, 0.88)',
                            border: '1px solid rgba(0, 230, 251, 0.5)',
                          }}
                        >
                          {skill.icon}
                        </Box>
                        <Typography variant="h6" fontWeight={700} sx={{ fontSize: '1rem', lineHeight: 1.25 }}>
                          {skill.name}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          fontSize: '0.9rem',
                        }}
                      >
                        {skill.description}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Box id="projects" sx={{ py: 10, bgcolor: 'background.default', scrollMarginTop: '80px', display: 'flex' }}>
      <Container maxWidth="lg">
          <Typography variant="h4" color="primary" fontWeight={700} align="center" gutterBottom sx={{ mb: 6 }}>
          Projects
        </Typography>
          <StarBorder 
            color="#00e6fb" 
            speed="8s" 
            thickness={3}
            style={{ 
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
        >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                gap: 4,
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
              }}
            >
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <ProjectCard3D
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              ))}
            </Box>
          </StarBorder>
      </Container>
    </Box>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#fff',
      },
    },
    typography: {
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
    },
  }), [darkMode]);

  return (
    <>
      <ScrollProgressBar />
    <ClickSpark sparkColor="#1976d2" sparkSize={16} sparkRadius={32} sparkCount={12} duration={600}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyAppBar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Particles />
        {/* Overlapping ProfileCard and HeroSection, centered and visually connected */}
        <div id="hero" style={{ position: 'relative', width: 800, maxWidth: '95vw', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, paddingTop: 0, overflow: 'visible' }}>
          <div style={{ position: 'absolute', left: 0, right: 0, top: '60px', display: 'flex', justifyContent: 'center', zIndex: 3 }}>
            <ProfileCard
              avatarUrl={profile}
              miniAvatarUrl={profile}
              iconUrl={bgavatar}
              grainUrl={grain}
              name="DHANESH KUMAR S"
              title="Aspiring Software Engineer"
              handle="dhaneshkumars"
              status="Online"
              contactText="Contact"
              showBehindGradient={false}
            />
          </div>
          <div style={{ width: 800, maxWidth: '95vw', margin: '0 auto', marginTop: 270 }}>
            <HeroSection />
          </div>
    </div>
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
      </ThemeProvider>
    </ClickSpark>
    </>
  );
}
