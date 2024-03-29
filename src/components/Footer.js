import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="columns">
          <div className="column is-3 is-offset-9">
            <div className="section">
              <p>Houtemstraat 400<br/>
              3300 Tienen</p>
              <p>Ondernemingsnummer:</p>
              <p>2.336.794.237</p>
              <p>BTW: BE0519814783</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
