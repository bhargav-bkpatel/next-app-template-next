import React from 'react'

import PropTypes from 'prop-types'

const ServiceCard = (props) => {
  return (
    <>
      <div className="service-card-container">
        <div className="service-card-container1">
          <svg viewBox="0 0 1024 1024" className="service-card-icon">
            <path d="M512 86q124 0 211 87t87 211q0 150-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
          </svg>
        </div>
        <h1 className="service-card-text textXL">{props.heading}</h1>
        <span className="service-card-text1">{props.text}</span>
      </div>
      <style jsx>
        {`
          .service-card-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .service-card-container1 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #f2f5f9ff;
          }
          .service-card-icon {
            fill: var(--dl-color-secondary-100);
            width: 24px;
            height: 24px;
          }
          .service-card-text {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unitandhalf);
            font-weight: 600;
          }
          .service-card-text1 {
            color: var(--dl-color-secondary-500);
            font-size: 1.25rem;
            text-align: center;
          }
          @media (max-width: 991px) {
            .service-card-container {
              width: 100%;
              padding-bottom: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

ServiceCard.defaultProps = {
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  heading: 'Excelent services',
}

ServiceCard.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default ServiceCard
