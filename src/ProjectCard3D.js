import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Paper } from '@mui/material';
import TechLogos from './TechLogos';

const ProjectCard3D = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: -5,
        z: 50
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <Paper
        elevation={isHovered ? 12 : 6}
        sx={{
          width: 320,
          height: 400,
          borderRadius: 4,
          background: project.screenshot 
            ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${project.screenshot})`
            : 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(0, 230, 251, 0.1) 100%)',
          backgroundSize: 'contain',
          backgroundPosition: 'center 50px',
          backgroundRepeat: 'no-repeat',
          border: '2px solid rgba(25, 118, 210, 0.2)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden',
          transformStyle: 'preserve-3d',
          transition: 'all 0.3s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            transform: 'translateX(-100%)',
            transition: 'transform 0.6s ease',
          },
          '&:hover::before': {
            transform: 'translateX(100%)',
          },
        }}
      >
        {/* Hover Overlay with Project Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.9) 0%, rgba(0, 230, 251, 0.9) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              fontSize: '1.5rem',
              lineHeight: 1.2,
              padding: 2,
            }}
          >
            {project.name}
          </Typography>
        </motion.div>

        {/* Glow effect */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isHovered 
              ? 'radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.3) 0%, transparent 70%)'
              : 'transparent',
            transition: 'all 0.3s ease',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: 3,
            pb: 2,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Tech Stack - Bottom */}
          <TechLogos techStack={project.tech} />
        </Box>

        {/* Corner accent */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '0 40px 40px 0',
            borderColor: 'transparent rgba(25, 118, 210, 0.8) transparent transparent',
            transition: 'all 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            zIndex: 1,
          }}
        />
      </Paper>
    </motion.div>
  );
};

export default ProjectCard3D; 