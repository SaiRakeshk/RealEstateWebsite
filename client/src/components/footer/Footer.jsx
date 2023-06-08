import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Our Company is started since 2010.
             we are the market leaders. 
            We are constantly providing best 
            experience to our customers.
            And we will continue to do so.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +91 9747848375</span>
          <span>YouTube: Real Estate</span>
          <span>Instagram: Real Estate</span>
          <span>Facebook: Real Estate</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: India</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer