import React, { useState } from 'react';
const Layout = ({ children }) => {
  //const [currentSrc, setCurrentSrc] = useState('/mp3/file1.mp3');
  return (
    <div>
      <header>
        {/* Định nghĩa giao diện header */}
      </header>
      <main>
        {children}
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
