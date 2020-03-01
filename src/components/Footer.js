import React from 'react'
import logo from '../img/logo.svg'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <Link to="/contact"><h1>Reserveer</h1></Link>
        </div>
      </footer>
    )
  }
}

export default Footer
