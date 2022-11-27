import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { reservationLink } from '../constants'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <h3>{item.title}</h3>
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
          <p>{item.price}</p>
          {console.log(item)}
          <div className="buttons">
            <a className="button" href={`${reservationLink}/massage-uur`}>
              Reserveer 1 uur
            </a>
            <a className="button" href={`${reservationLink}/massage-anderhalf-uur`}>
              Reserveer anderhalf uur
            </a>
          </div>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      price: PropTypes.string,
    })
  ),
}

export default FeatureGrid
