import React from 'react'

import PropTypes from 'prop-types'

const UserDetails = (props) => {
  return (
    <>
      <div className="user-details-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="user-details-image"
        />
        <div className="user-details-container1">
          <span className="user-details-text textSM">{props.name}</span>
          <div className="user-details-container2">
            <span className="user-details-text1 textXS">
              Published
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="user-details-text2 textXS">{props.time}</span>
            <span className="user-details-text3 textXS">ago</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .user-details-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .user-details-image {
            width: 40px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
          }
          .user-details-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-details-text {
            color: var(--dl-color-secondary-500);
            font-weight: 700;
            text-transform: uppercase;
          }
          .user-details-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .user-details-text1 {
            color: var(--dl-color-secondary-500);
            font-weight: 400;
            margin-right: 0.25rem;
          }
          .user-details-text2 {
            color: var(--dl-color-secondary-500);
            font-weight: 400;
          }
          .user-details-text3 {
            color: var(--dl-color-secondary-500);
            font-weight: 400;
            margin-left: 0.25rem;
          }
        `}
      </style>
    </>
  )
}

UserDetails.defaultProps = {
  image_src: '/playground_assets/team4-200h.png',
  name: 'Laura Hanks',
  time: '3 days',
  image_alt: 'image',
}

UserDetails.propTypes = {
  image_src: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  image_alt: PropTypes.string,
}

export default UserDetails
