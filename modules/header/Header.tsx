import {useWindowSize} from '@/hooks/useWindowSize'
import React, {useState} from 'react'
import {IoMenuSharp} from 'react-icons/io5'
import {IoMdClose} from 'react-icons/io'

const Header = () => {
  const {windowSize} = useWindowSize()
  const isMobileDevice = windowSize?.width < 768
  const [sideBar, setSidebar] = useState<boolean>(false)
  console.log('first', sideBar)

  const handleOnMenuClick = () => {
    setSidebar((prev) => !prev)
  }

  return (
    <div className='header_container'>
      <div className='header_wrapper'>
        <div className='header_left'>Mounika Gonti</div>
        <div
          className={sideBar ? 'header_middle_mobile_device' : 'header_middle'}
        >
          <a href=''>Pages</a>
          <a href=''>Account</a>
          <a href=''>Blocks</a>
          <a href=''>Docs</a>
        </div>

        {isMobileDevice && (
          <div onClick={handleOnMenuClick} className='menu_btn'>
            {sideBar ? <IoMdClose /> : <IoMenuSharp />}
          </div>
        )}

        <div className='header_right'>Buy now</div>
      </div>
    </div>
  )
}

export default Header
