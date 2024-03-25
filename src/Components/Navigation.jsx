import React, {useState, useEffect} from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
    
const Navigation = ({ setPage }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
    const newCount = count + 1;
    localStorage.setItem('visitorCount', newCount);
    setCount(newCount);
  }, []);

  return (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <div>
        <span>
          網路攻防實習
          <span style={{ marginRight: '20px' }}></span>
          <button onClick={() => setPage('home')}>Home</button>
          <span style={{ marginRight: '20px' }}></span>
          <button onClick={() => setPage('chatroom')}>Chatroom</button>
          <span style={{ marginRight: '20px' }}></span>
          參觀人數: {count}
        </span>
        <span style={{ marginRight: '500px' }}></span>
        <span>
          <button>login</button>
          <span style={{ marginRight: '10px' }}></span>
          <button>sign up</button>
        </span>
      </div>
      
      </Typography>
    </Toolbar>
  </AppBar>
  );
}

export default Navigation;