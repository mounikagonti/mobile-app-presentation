import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <div className='homepage_container'>
      <div className='homepage_wrapper'>
        <div className='homepage'>
          <div className='homepage_left'>
            <h1>Our beautiful App</h1>
            <div className='text'>
              An arrangement you make to have a hotel room, tickets, etc. at a
              particular time in the future:
            </div>
            <div className='logo_wrapper'>
              <div className='logo_app'>
                <Image
                  src={
                    'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/app-store-button.svg'
                  }
                  alt='mobile img'
                  width={100}
                  height={40}
                />
              </div>
              <div className='logo_play'>
                <Image
                  src={
                    'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/google-play-button.svg'
                  }
                  alt='mobile img'
                  width={100}
                  height={40}
                />
              </div>
            </div>
            <div className='badge_wrapper'>
              Free Trial: <span>30 DAYS</span>
            </div>
          </div>
          <div className='homepage_right'>
            <Image
              src={
                'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/phones.png'
              }
              alt='mobile img'
              width={200}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
