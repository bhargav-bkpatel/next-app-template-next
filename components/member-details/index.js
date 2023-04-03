import React from 'react'

import PropTypes from 'prop-types'

const MemberDetails = (props) => {
  return (
    <>
      <div className="member-details-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="member-details-image"
        />
        <h1 className="member-details-text textXL">{props.heading1}</h1>
        <h1 className="member-details-text1 textSM">{props.heading11}</h1>
      </div>
      <style jsx>
        {`
          .member-details-container {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .member-details-image {
            width: 100px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .member-details-text {
            color: var(--dl-color-secondary-100);
            text-align: center;
            padding-top: var(--dl-space-space-unitandhalf);
          }
          .member-details-text1 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            text-transform: uppercase;
          }
        `}
      </style>
    </>
  )
}

MemberDetails.defaultProps = {
  heading11: 'WEB DEVELOPER',
  heading1: 'Ryan Tompson',
  image_alt: 'image',
  image_src:
    'https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg',
}

MemberDetails.propTypes = {
  heading11: PropTypes.string,
  heading1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default MemberDetails
