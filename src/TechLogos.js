import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

// Technology logo mappings
const techLogos = {
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'MERN': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', // Using MongoDB as representative
};

const TechLogos = ({ techStack }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1.5,
        justifyContent: 'flex-start',
        padding: 0,
        minHeight: '40px',
        alignItems: 'center',
      }}
    >
      {techStack.map((tech, index) => {
        const logoUrl = techLogos[tech];
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.2,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                },
              }}
            >
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={tech}
                  style={{
                    width: '24px',
                    height: '24px',
                    filter: 'brightness(1.1) contrast(1.1)',
                    display: 'block', // Ensure alt text is not shown
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: '24px',
                    height: '24px',
                    background: 'linear-gradient(45deg, #00e6fb, #1976d2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: 'white',
                    userSelect: 'none',
                  }}
                  aria-label={tech}
                >
                  {tech.charAt(0)}
                  <span style={{ display: 'none' }}>{tech}</span>
                </Box>
              )}
            </Box>
          </motion.div>
        );
      })}
    </Box>
  );
};

export default TechLogos; 