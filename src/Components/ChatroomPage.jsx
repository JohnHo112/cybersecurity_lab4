import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ChatroomPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div style={{margin: 30}}>
      <br></br>
      <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="MESSAGE" variant="standard" value={message} onChange={handleMessageChange}/>
        <Button variant="contained" type="submit">Send</Button>
      </form>
      <div>
        {messages.map((msg, index) => (
            <Card key={index} style={{backgroundColor: "LightYellow"}} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Index: {index} <br/> Message: {msg}
                </Typography>
              </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}

export default ChatroomPage;
