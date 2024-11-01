import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <section className='hero'>
      <article className='hero__text-bg'>
      {/* <h1 className='hero__header'>
        BLUE KEE DESIGN CO.
      </h1> */}
      <h1 className='hero__h2-text'>
      Custom Laser-Cut Designs for Weddings and Events in Toronto
      </h1>
      <h3 className='hero__h3-text'>
      Your personalized laser-cut designs for memorable events.
      </h3>
      <button className='hero__btn'>
        <h3 className='hero__btn-text'>Let Us Make Your Day Yours</h3>
      </button>
      </article>
    </section>
  )
}

export default Hero
