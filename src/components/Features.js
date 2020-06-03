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
          <a href={`${reservationLink}/${item.slug}`} >
            <button className="button">
              Reserveer 1 uur
            </button>
          </a>
          <a href={`${reservationLink}/${item.slug}-anderhalf`} >
            <button className="button">
              Reserveer anderhalf uur
            </button>
          </a>
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
    })
  ),
}

export default FeatureGrid
