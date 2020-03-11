import React from 'react'
import logo from '../img/logo.svg'
import { Link } from 'gatsby'
import { reservationLink } from '../constants'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <a href={reservationLink}><h1></h1></a>
        </div>
      </footer>
    )
  }
}

export default Footer
