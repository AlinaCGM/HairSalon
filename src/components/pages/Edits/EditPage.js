import React from 'react'
import HeroSectionEdit from './HeroEdit'
import Navbar from '../../Navbar'
import WelcomeSectionEdit from './WelcomeEdit'
import ServicesSectionEdit from './ServicesEdit'


function MainEdit() {
  return (
    <>
      <Navbar />
      <HeroSectionEdit />
      <WelcomeSectionEdit />
      <ServicesSectionEdit />
    </>
  )
}

export default MainEdit
