import React from 'react';
import Header from './Header'
import Main from './main';
import data from './data.js'
import './App.css'
import backgroundImage from './assets/laguna.jpg'

export default function App() {
  const activity = data.map(element => {
    return (
      <Main 
        img={element.img}
        titel={element.titel}
        reserve={element.reserve}
        location={element.location}
        text={element.text}
        />

    )
  })
  return (
    <>
    <Header />
    <div className='content-with-background'>
      <div className="background-image">
        <img src={backgroundImage} alt="Laguna" />
      </div>
      
      <div className='activity'>
        {activity}
      </div>
      </div>
    </>
  );
}

