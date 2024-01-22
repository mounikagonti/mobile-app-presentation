import React from 'react'
import {FaCheck} from 'react-icons/fa'

const Pricing = () => {
  const pricingCardArray = [
    {
      id: 1,
      headingText: 'Starter',
      price: '$199',
      icon: <FaCheck />,
      textOne: 'Complete documentation',
      textTwo: 'Working materials in Sketch',
      textThree: '500MB cloud storage',
      textFour: 'Lite support',
      btn: 'BUY NOW',
    },
    {
      id: 2,
      headingText: 'Pro',
      price: '$299',
      icon: <FaCheck />,
      textOne: 'Complete documentation',
      textTwo: 'Working materials in Sketch',
      textThree: '500MB cloud storage',
      textFour: 'Lite support',
      btn: 'TRY NOW',
    },
    {
      id: 3,
      headingText: 'Premium',
      price: '$399',
      icon: <FaCheck />,
      textOne: 'Complete documentation',
      textTwo: 'Working materials in Sketch',
      textThree: '500MB cloud storage',
      textFour: 'Lite support',
      btn: 'BUY NOW',
    },
  ]

  return (
    <div className='pricing_wrapper'>
      <div className='pricing_container'>
        <div className='pricing_btn'>Pricing</div>
        <div className='our_price_title'>See our pricing</div>
        <div className='text'>
          You have Free unlimited updates and Premium Support on each package
        </div>
      </div>
      <div className='pricing_card_wrapper'>
        {pricingCardArray.map((item: any) => (
          <div key={item?.id} className='pricing_card'>
            <div className='pricing_card_name'>{item?.headingText}</div>
            <div className='price'>{item?.price}</div>
            <div className='benefits_wrapper'>
              <div className='benefits'>
                <div className='icon'>{item?.icon}</div>
                <div className='benefit'>{item?.textOne}</div>
              </div>
              <div className='benefits'>
                <div className='icon'>{item?.icon}</div>
                <div className='benefit'>{item?.textTwo}</div>
              </div>
              <div className='benefits'>
                <div className='icon'>{item?.icon}</div>
                <div className='benefit'>{item?.textThree}</div>
              </div>
              <div className='benefits'>
                <div className='icon'>{item?.icon}</div>
                <div className='benefit'>{item?.textFour}</div>
              </div>
            </div>
            <div className='buy_btn'>{item?.btn}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
