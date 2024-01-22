import Image from 'next/image'
import React from 'react'
import {CiGlobe} from 'react-icons/ci'
import {FaTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa6'
import {TiSocialFacebook} from 'react-icons/ti'
import {IoLogoGithub} from 'react-icons/io'

const Footer = () => {
  const logoArray = [
    {
      id: 1,
      logo: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-apple.svg',
    },
    {
      id: 2,
      logo: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-facebook.svg',
    },
    {
      id: 3,
      logo: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg',
    },
    {
      id: 4,
      logo: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-spotify.svg',
    },
    {
      id: 5,
      logo: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-behance.svg',
    },
    {
      id: 6,
      logo: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg',
    },
  ]
  const badgeArray = [
    {
      id: 1,
      badge: 'Company',
    },
    {
      id: 2,
      badge: 'About Us',
    },
    {
      id: 3,
      badge: 'Team',
    },
    {
      id: 4,
      badge: 'Products',
    },
    {
      id: 5,
      badge: 'Blog',
    },
    {
      id: 6,
      badge: 'Pricing',
    },
  ]
  const socialArray = [
    {
      id: 1,
      icon: <CiGlobe />,
    },
    {
      id: 2,
      icon: <FaTwitter />,
    },
    {
      id: 3,
      icon: <FaInstagram />,
    },
    {
      id: 4,
      icon: <TiSocialFacebook />,
    },
    {
      id: 5,
      icon: <IoLogoGithub />,
    },
  ]

  return (
    <div className='footer'>
      <div className='footer_wrapper'>
        <hr />
        <div className='logos_wrapper'>
          {logoArray.map((item: any) => (
            <div key={item?.id} className='logo'>
              <Image src={item?.logo} width={200} height={50} alt='logo' />
            </div>
          ))}
        </div>
        <div className='footer_badge_wrapper'>
          {badgeArray.map((item: any) => (
            <div key={item?.id} className='footer_badge'>
              {item?.badge}
            </div>
          ))}
        </div>
        <div className='social_link_wrapper'>
          {socialArray.map((item: any) => (
            <div key={item?.id} className='social_link'>
              {item?.icon}
            </div>
          ))}
        </div>
        <div className='copyRight_text'>
          Copyright © 2023 Soft by Mounika Gonti.
        </div>
      </div>
    </div>
  )
}

export default Footer
