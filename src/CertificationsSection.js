import React from 'react';
import CircularGallery from './CircularGallery';

import Mern_Intro from './certifications/Mern_Intro.png';
import Azura_CV from './certifications/azura_CV.png';
import Java_Fundamental from './certifications/java_fundemendal.png';
import Python_Foundations from './certifications/Python Foundations.png';
import Basics_of_Python from './certifications/Basics of python.png';
import Python_Basic from './certifications/Python_basic.png';
import Software_Engineer from './certifications/Software_Engineer.png';
import Problem_Solving from './certifications/Problem_Solving.png';
import Java_Basic from './certifications/Java_basic.png';

const certificates = [
  { image: Mern_Intro, text: 'MERN Stack Introduction' },
  { image: Azura_CV, text: 'Azura CV' },
  { image: Java_Fundamental, text: 'Java Fundamental' },
  { image: Python_Foundations, text: 'Python Foundations' },
  { image: Basics_of_Python, text: 'Basics of Python' },
  { image: Python_Basic, text: 'Python Basic' },
  { image: Software_Engineer, text: 'Software Engineer' },
  { image: Problem_Solving, text: 'Problem Solving' },
  { image: Java_Basic, text: 'Java Basic' },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" style={{ width: '100%', minHeight: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 0' }}>
      <h2 style={{ marginBottom: 32, fontWeight: 700, fontSize: 32 }}>Certifications</h2>
      <div style={{
        width: '100%',
        maxWidth: 1600,
        height: 600,
        background: 'rgba(30,30,40,0.85)',
        border: '3px solid var(--mui-palette-divider, rgba(160,160,160,0.25))',
        borderRadius: 18,
        boxShadow: '0 6px 32px 0 rgba(0,0,0,0.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backdropFilter: 'blur(6px)',
      }}>
        <CircularGallery items={certificates} bend={2.5} cardWidth={1200} cardHeight={860} />
      </div>
    </section>
  );
} 