import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <section className='hero'>
      <article className='hero__text-bg'>
      <h1 className='hero__header'>
        BLUE KEE DESIGN CO.
      </h1>
      <h2 className='hero__h2-text'>
        Unforgettable Details for Your Perfect Day
      </h2>
      <h3 className='hero__h3-text'>
        Customized laser-cut and engraved décor that tells your story.
      </h3>
      <button className='hero__btn'>
        <h3 className='hero__btn-text'>Let Us Make Your Day Yours</h3>
      </button>
      </article>
    </section>
  )
}

export default Hero
