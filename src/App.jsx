import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/HomePage';
import ChatroomPage from './Components/ChatroomPage';
import Navigation from './Components/Navigation';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'chatroom':
        return <ChatroomPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Navigation setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;
