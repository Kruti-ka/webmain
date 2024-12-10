import React from 'react';

const Sidebar = ({ onNavigate }) => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.navList}>
        <li onClick={() => onNavigate('home')}>Home</li>
        <li onClick={() => onNavigate('about')}>About Us</li>
        <li onClick={() => onNavigate('contact')}>Contact Us</li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '1rem',
    height: '100vh',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    margin: '10px 0',
    cursor: 'pointer',
    color: '#333',
  },
};

export default Sidebar;
