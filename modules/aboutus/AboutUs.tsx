import Image from 'next/image'
import React from 'react'
import {FaStar} from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'

const AboutUs = () => {
  const cardArray = [
    {
      id: 1,
      url: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-3.jpg',
      text: 'If you have the opportunity to play this game of life you need to appreciate every moment.',
      one: <FaStar />,
      two: <FaStar />,
      three: <FaStar />,
      four: <FaStar />,
      five: <FaRegStar />,
    },
    {
      id: 2,
      url: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/marie.jpg',
      text: 'If you have the opportunity to play this game of life you need to appreciate every moment.',
      one: <FaStar />,
      two: <FaStar />,
      three: <FaStar />,
      four: <FaRegStar />,
      five: <FaRegStar />,
    },
    {
      id: 3,
      url: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg',
      text: 'If you have the opportunity to play this game of life you need to appreciate every moment.',
      one: <FaStar />,
      two: <FaStar />,
      three: <FaStar />,
      four: <FaStar />,
      five: <FaRegStar />,
    },
  ]

  return (
    <div className='about'>
      <div className='about_wrapper'>
        <h1>What random people</h1>
        <h2>Think about us</h2>
        <p>
          That's the main thing people are controlled by! Thoughts-their
          perception of themselves
        </p>
        <div className='card_wrapper'>
          {cardArray.map((item: any) => (
            <div key={item?.id} className='card_profile_wrapper'>
              <div className='profile_name_wrapper'>
                <div className='profile'>
                  <Image
                    src={item?.url}
                    width={50}
                    height={50}
                    alt='img'
                    style={{borderRadius: '10px'}}
                  />
                </div>
                <div className='profile_name'>
                  <h4>Mathew Glock</h4>
                  <div className='reading_time'>5 min read</div>
                </div>
              </div>
              <div className='text'>
                "If you have the opportunity to play this game of life you need
                to appreciate every moment."
              </div>
              <div className='stars'>
                <div className='star_one'>{item?.one}</div>
                <div className='star_two'>{item?.two}</div>
                <div className='star_three'>{item?.three}</div>
                <div className='star_four'>{item?.four}</div>
                <div className='star_five'>{item?.five}</div>
              </div>
            </div>
          ))}
          <hr />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
