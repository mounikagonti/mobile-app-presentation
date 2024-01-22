import Image from 'next/image'
import React from 'react'

const ProcessApps = () => {
  const appsArray = [
    {
      id: 1,
      url: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-atlassian.svg',
      appName: 'Payment vendor',
      text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
    },
    {
      id: 2,
      url: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-asana.svg',
      appName: 'Organize your team',
      text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
    },
    {
      id: 3,
      url: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-shopify.svg',
      appName: 'E-commerce',
      text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
    },
    {
      id: 4,
      url: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-invision.svg',
      appName: 'Digital Product Design',
      text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
    },
    {
      id: 5,
      url: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-slack.svg',
      appName: 'Better Communication',
      text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
    },
    {
      id: 6,
      url: 'https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-webdev.svg',
      appName: 'Logo design',
      text: 'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
    },
  ]
  return (
    <div className='process_apps_wrapper'>
      <div className='process_apps_container'>
        <h1>Get your own app</h1>
        <div className='process_apps_top'>
          <div className='process_apps_top_left'>
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever.
          </div>
          <div className='process_apps_top_right'>Contact us</div>
        </div>
        <div className='process_apps_bottom'>
          {appsArray.map((item: any) => (
            <div className='process_apps_bottom_wrapper' key={item?.id}>
              <div className='app_icon'>
                <Image src={item?.url} alt='logoImg' width={60} height={60} />
              </div>
              <h2>{item?.appName}</h2>
              <p>{item?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProcessApps
