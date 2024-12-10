import React from 'react';

const Main = ({ currentPage }) => {
  return (
    <main style={styles.main}>
      {(() => {
        switch (currentPage) {
          case 'home':
            return <h2>Welcome to My Simple React App!</h2>;
          case 'about':
            return <h2>About Us: This is a demo React application.</h2>;
          case 'services':
            return <h2>Our Services: We offer web development and design services.</h2>;
          case 'contact':
            return <h2>Contact Us: Reach out at example@example.com.</h2>;
          case 'faq':
            return <h2>FAQ: Frequently Asked Questions about our app.</h2>;
          default:
            return <h2>404: Page Not Found</h2>;
        }
      })()}
    </main>
  );
};

const styles = {
  main: {
    padding: '2rem',
    flex: 1,
  },
};

export default Main;
