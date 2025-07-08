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
  LinearProgress,
  Paper,
  Grid,
  useMediaQuery
} from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import SwiperCore from 'swiper';
import Particles from './Particles';
import './Particles.css';
import Lanyard from './Lanyard';

const NAV_ITEMS = [
  { label: 'Hero', id: 'hero' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
];

const SKILLS = [
  'Python',
  'JavaScript',
  'React',
  'Node.js',
  'HTML/CSS',
  'Flask',
  'Java',
  'C++',
  'C',
  'GitHub',
];

const PROJECTS = [
  {
    name: 'Code Arena',
    description: 'A real-time coding challenge platform with secure Docker-based code execution. Users can create and join challenges, write code in multiple languages, test against cases, and compete live.',
    tech: ['MERN', 'Docker'],
    link: 'https://github.com/DHANESH-KUMAR-S/Codearena',
  },
  {
    name: 'Testforge AI',
    description: 'A Flask-based web app that generates manual test cases and automation scripts from project requirements. Supports multiple input types, frameworks, and includes responsive dark-mode UI.',
    tech: ['Flask', 'JavaScript'],
    link: 'https://github.com/DHANESH-KUMAR-S/aitestcasegenerator',
  },
  {
    name: 'ThinkFirst AI',
    description: 'An AI learning assistant designed to promote independent problem-solving. Offers guidance and hints while avoiding spoon-feeding answers, with final answers revealed only on request.',
    tech: ['Flask', 'JavaScript'],
    link: 'https://github.com/DHANESH-KUMAR-S/Thinkfirstai',
  },
  {
    name: 'BatGPT',
    description: 'A virtual assistant chatbot inspired by Batman, offering engaging and interactive conversation through a sleek web interface built with Flask and basic front-end stack.',
    tech: ['Flask', 'JavaScript'],
    link: 'https://github.com/DHANESH-KUMAR-S/Batgptai',
  },
  {
    name: 'Scanalyze AI',
    description: 'An AI-powered medical report analyzer designed to simplify medical reports for elderly users. Features file upload, OCR, chatbot integration, and responsive, elderly-friendly UI.',
    tech: ['Flask', 'JavaScript'],
    link: 'https://github.com/DHANESH-KUMAR-S/Scanalyze-AI',
  },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function MyAppBar({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  return (
    <AppBar position="fixed" color="default" elevation={2} sx={{ bgcolor: theme.palette.background.paper }}>
      <Toolbar>
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
    <Box id="hero" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', pt: 10 }}>
      <Container maxWidth="md">
        <Paper elevation={4} sx={{ p: 6, borderRadius: 4, textAlign: 'center', bgcolor: 'background.paper', backdropFilter: 'blur(8px)' }}>
          <Typography variant="h2" color="primary" fontWeight={800} gutterBottom>
            Dhanesh Kumar S
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Aspiring Software Developer
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome to my portfolio! Scroll down to see my skills and projects.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

function SkillsSection() {
  return (
    <Box id="skills" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" color="primary" fontWeight={700} align="center" gutterBottom>
          My Skills
        </Typography>
        <Stack spacing={4} mt={4}>
          {SKILLS.map(skill => {
            const value = Math.floor(Math.random() * 41) + 60; // 60-100%
            return (
              <Box key={skill}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight={600}>{skill}</Typography>
                  <Typography color="text.secondary">{value}%</Typography>
                </Stack>
                <LinearProgress variant="determinate" value={value} sx={{ height: 10, borderRadius: 5, mt: 1, bgcolor: 'grey.300' }} color="primary" />
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}

function ProjectsSection() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box id="projects" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" color="primary" fontWeight={700} align="center" gutterBottom>
          Projects
        </Typography>
        <Swiper
          spaceBetween={24}
          slidesPerView={isMobile ? 1.1 : 2.5}
          style={{ padding: '2rem 0' }}
        >
          {PROJECTS.map((project, idx) => (
            <SwiperSlide key={idx}>
              <Paper elevation={6} sx={{ p: 3, borderRadius: 4, minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', bgcolor: 'background.paper' }}>
                <Typography variant="h6" color="primary" fontWeight={700} gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                  {project.tech.map((tech, i) => (
                    <Button key={i} size="small" variant="outlined" color="primary" sx={{ fontSize: 12, borderRadius: 2, textTransform: 'none' }}>{tech}</Button>
                  ))}
                </Stack>
                <Button href={project.link} target="_blank" rel="noopener" variant="contained" color="primary" sx={{ mt: 2, alignSelf: 'flex-start' }}>
                  View Project
                </Button>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Lanyard />
      <Particles particleCount={200} particleSpread={10} />
      <MyAppBar darkMode={darkMode} toggleDarkMode={() => setDarkMode(m => !m)} />
      <Box sx={{ pt: 8 }}>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </Box>
    </ThemeProvider>
  );
}
