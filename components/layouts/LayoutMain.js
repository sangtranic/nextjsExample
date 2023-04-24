import React, { useState } from 'react';
const Layout = ({ children }) => {
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
