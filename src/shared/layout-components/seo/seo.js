import React from 'react'
import { Helmet } from 'react-helmet';
const favicon = "/assets/img/brand/favicon.ico"

const Seo = ({ title }) => {
  let i = `Spruha - ${title}`
  return (
    <Helmet>
      <title>{i}</title>
      <link rel="icon" href={favicon } />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
    </Helmet>
  )
}

export default Seo