import React from 'react'
import './CallToAct.scss'

function CallToAct({scrollToSection, contactUsRef}) {
  return (
    <div className='cta'>
      <h2 className='cta__header'>
        Let's talk your big day.
      </h2>
      <button  onClick={() => scrollToSection(contactUsRef)} className='cta__btn'>
        Get in touch
      </button>
    </div>
  )
}

export default CallToAct
