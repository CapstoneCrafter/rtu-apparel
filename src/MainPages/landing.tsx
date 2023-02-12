import React from 'react'
import Footer from '../components/Footer'
import Faq from './faq'
import Items from './Items'
import Main from './Main'

export const Landing = () => {
  return (
    <div>
        <Main />
        <Items />
        <Faq />
        <Footer />
    </div>
  )
}

export default Landing