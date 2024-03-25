import React from 'react';
import A from '../Img/photo.png'

const HomePage = () => {
  return (
    <div style={{margin: 30}}>
      <h1>Welcome!</h1>
      <img src={A} alt="Description of your image" />
      <p>
        我是何景盛，目前是台大電機系學生，這個網站是我的期中專案。
      </p>
    </div>
  );
}

export default HomePage;
