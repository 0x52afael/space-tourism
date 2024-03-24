import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePageComponent from './components/HomePageComponent';

function App() {
  return (
    <div className="App ff-sans-normal">
      <head>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body className='bg-dark text-white'>

        <div style={{ outline: "whitesmoke 1px solid" }}>Start of App here
          <HomePageComponent />
        </div>

        <script src="index.pack.js"></script>
      </body>
    </div>
  );
}

export default App;
