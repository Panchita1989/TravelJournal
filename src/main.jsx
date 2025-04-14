import React from 'react'



export default function Main(props){
    return(
        <section>
        <article className='journal-entry'>
            <div className='main-image-container'>
                <img className='main-image' src= {props.img.src} alt={props.img.alt} />
            </div>
            <div className='info-container'>
                <h2 className='titel'>{props.titel}</h2>
                <a href={props.reserve} target="_blank">Reserve</a>
                <p className='text'>{props.text}</p>

            </div>
        </article>
        </section>
    )
}