import React from 'react';
import HeroImage from './images/todolistt.jpg';

function Header() {
  return (
    
    <div id='home' style={{ 
      position: 'relative', 
      backgroundColor: '#160F29', 
      overflow: 'hidden' }}>
      <img src={HeroImage} alt="Hero Image" style={{ 
          width: '100%', 
          height: '60%', 
          objectFit: 'cover' 
        }} 
      /> 
    <div  style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor:'#160F29',opacity:'80%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 style={{ color: '#FBAF00', fontSize: '4rem', marginBottom: '2rem' }}>TASKMASTER</h1>
        <p style={{ color: '#FBAF00', fontSize: '2rem', marginBottom: '3rem' }}>Your ultimate task manager</p>
        <a href="#services" style={{ textDecoration: 'underline' }}>
          <button id='note' style={{ padding: '1rem 2rem', borderRadius: '50px', background:'#42762D'/* 'linear-gradient(to right, #FFC371, #FF5F6D)'*/, color: '#fff', fontSize: '15px', border: 'none' }}>Services</button>
        </a>
      </div>
      <div  class="notification is-link is-light" style={{backgroundColor:'#c97fbc',color:''}}>
      <button class="delete" ></button>
       <strong>To ensure you have the most up-to-date information, please use the "Refresh" button bellow. Simply click on the button to update the content on your screen. Thank you for using our app!"</strong>
      <strong> Please note that you can only modify task you created but can view shared users task
      Please make sure you are connected to the <strong style={{color:'red'}}>SEPOLIA testnet</strong></strong>
     </div>
    </div>
  );
}

export default Header;