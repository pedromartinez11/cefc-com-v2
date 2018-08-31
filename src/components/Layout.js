import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import ball from '../img/ball.png'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Helmet
      title="cefc"
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${ball}` }]}
    />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
