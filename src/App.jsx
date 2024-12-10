import React, { useState } from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>
        <Sidebar onNavigate={setCurrentPage} />
        <Main currentPage={currentPage} />
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  content: {
    display: 'flex',
    flex: 1,
  },
};

export default App;
