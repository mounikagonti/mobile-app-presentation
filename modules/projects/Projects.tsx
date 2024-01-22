import React from 'react'
import {IoCalendarClear} from 'react-icons/io5'
import {IoRocketSharp} from 'react-icons/io5'
import {FaShoppingBasket} from 'react-icons/fa'

const Projects = () => {
  const featuresArray = [
    {
      id: 1,
      icon: <IoCalendarClear />,
      feature: 'Fast',
      text: 'Creativity starts with an empty calendar and ends with a full one.',
    },
    {
      id: 2,
      icon: <IoRocketSharp />,
      feature: 'Responsive',
      text: 'We get insulted by others, lose trust for those We get back.',
    },
    {
      id: 3,
      icon: <FaShoppingBasket />,
      feature: 'Unified',
      text: 'When playing, surround yourself with people happier than you.',
    },
  ]

  return (
    <div className='projects_wrapper'>
      <div className='projects_container'>
        <div className='projects_top'>
          <h1>See our projects</h1>
          <p>
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color. Contact us at
            <span> contact@loopple.com.</span>
          </p>
        </div>
        <div className='projects_features'>
          {featuresArray.map((item: any) => (
            <div className='features' key={item?.id}>
              <div className='calender_icon'>{item?.icon}</div>
              <h2>{item?.feature}</h2>
              <p>{item?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
