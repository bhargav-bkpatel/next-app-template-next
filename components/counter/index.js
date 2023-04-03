import React from 'react'

import PropTypes from 'prop-types'

const Counter = (props) => {
  return (
    <>
      <div className="counter-container">
        <h1 className="counter-text textXL">{props.number}</h1>
        <span className="counter-text1 textSM">{props.type}</span>
      </div>
      <style jsx>
        {`
          .counter-container {
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .counter-text {
            color: var(--dl-color-secondary-400);
            font-weight: 600;
          }
          .counter-text1 {
            color: var(--dl-color-secondary-500);
          }
        `}
      </style>
    </>
  )
}

Counter.defaultProps = {
  type: 'Friends',
  number: '22',
}

Counter.propTypes = {
  type: PropTypes.string,
  number: PropTypes.string,
}

export default Counter
