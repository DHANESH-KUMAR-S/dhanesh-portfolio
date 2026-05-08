import React, { useEffect } from 'react';
import { Box, IconButton, Typography, Paper, Tooltip } from '@mui/material';
import { Close } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
import TechLogos from './TechLogos';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        animation: 'fadeIn 0.3s ease-out',
        '@keyframes fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Paper
          onClick={(e) => e.stopPropagation()}
          sx={{
            position: 'relative',
            maxWidth: '98vw',
            maxHeight: '98vh',
            width: 800,
            borderRadius: 3,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(0, 230, 251, 0.05) 100%)',
            border: '2px solid rgba(25, 118, 210, 0.2)',
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <Close />
          </IconButton>

          {/* Content */}
          <Box sx={{ p: 4, pt: 6 }}>
            {/* Project Name */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #1976d2, #00e6fb)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Project Details
              </Typography>
              <BlurText
                text={`Project Name: ${project.name}`}
                delay={40}
                className="text-xl font-bold mb-4"
                color="#1976d2"
                stepDuration={0.15}
              />
            </Box>

            {/* Description */}
            <Box sx={{ mb: 4 }}>
              <BlurText
                text="Description:"
                delay={60}
                className="text-lg font-semibold mb-2"
                color="#1976d2"
                stepDuration={0.15}
              />
              <BlurText
                text={project.description}
                delay={80}
                className="text-base leading-relaxed"
                color="#1976d2"
                animateBy="words"
                stepDuration={0.15}
              />
            </Box>

            {/* Tech Stack */}
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: '#1976d2',
                  fontSize: '1.1rem',
                  minWidth: '110px',
                }}
              >
                Tech Stack:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                {project.tech.map((tech, index) => (
                  <Tooltip title={tech} key={index} arrow disablePortal={false}>
                    <span>
                      <TechLogos techStack={[tech]} />
                    </span>
                  </Tooltip>
                ))}
              </Box>
            </Box>

            {/* View Project Button */}
            <Box sx={{ textAlign: 'center', mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  backgroundColor: '#1976d2',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                }}
              >
                View Project
              </motion.a>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  backgroundColor: '#FFD600',
                  color: '#222',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(255, 214, 0, 0.2)',
                  marginLeft: 8,
                }}
              >
                <GitHubIcon sx={{ mr: 1, fontSize: 24 }} /> Github link
              </motion.a>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ProjectModal; 