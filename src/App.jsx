import React from 'react';
import Header from './Header'
import Main from './main';
import data from './data.js'

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
    {activity}
    
    </>
  )
}


