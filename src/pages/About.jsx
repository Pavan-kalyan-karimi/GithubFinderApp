import React from 'react'

const About = () => {
  return (
    <>
    <h1 className='text-6xl mb-4'>Github Finder</h1>
    <p className='mb-4 text-2xl font-light'>
      A React app to search GitHub profiles and see profile details. This
      project is part of the
      <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
        {' '}
        PavanKalyan's React Courses
      </a>{' '}
      Udemy course by
      <strong>
        <a href='https://traversymedia.com'> PavanKalyanKarimi</a>
      </strong>
      .
    </p>
    <p className='text-lg text-gray-400'>
      Version <span className='text-white'>1.0.0</span>
    </p>
    <p className='text-lg text-gray-400'>
      Layout By:
      <a className='text-white' href='https://twitter.com/hassibmoddasser'>
        Pavan Kalyan Karimi
      </a>
    </p>
  </>
  )
}

export default About
