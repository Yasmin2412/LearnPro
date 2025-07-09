import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1e293b',
      color: '#ffffff',
      padding: '1.5rem 2rem',
      marginTop: '4rem',
      textAlign: 'center',
    }}>
      <p style={{ marginBottom: '0.3rem' }}>© {new Date().getFullYear()} LearnHub. All rights reserved.</p>
      <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
        Made with 💙 by the Prodesk Intern Team
      </p>
    </footer>
  );
};

export default Footer;
