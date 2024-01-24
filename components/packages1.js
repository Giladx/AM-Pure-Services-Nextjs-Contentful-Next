import React from 'react'

import PropTypes from 'prop-types'

import PackagesCard from './packages-card'

const Packages1 = (props) => {
  return (
    <>
      <div className="packages1-services section-container">
        <div className="packages1-max-width max-content-container">
          <div className="packages1-heading-container">
            <div className="packages1-text-container">
              <span className="packages1-text">{props.ourServices}</span>
              <h2>
                <span>Air Duct Cleaning Services</span>
                <br></br>
              </h2>
            </div>
            <div className="packages1-controls">
              <button className="control-btn">
                <svg viewBox="0 0 1024 1024" className="packages1-icon">
                  <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                </svg>
                {props.buttonLeft}
              </button>
              <button className="control-btn">
                <svg viewBox="0 0 1024 1024" className="packages1-icon2">
                  <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                </svg>
                {props.buttonRight}
              </button>
            </div>
          </div>
          <div className="items">
            <PackagesCard
              price="100$"
              title="Deep Cleaning"
              details="- Negative pressure connection to the main supply line and main return line. "
              details1="- Deep cleaning vents and returns "
              className="packages1-component"
            ></PackagesCard>
            <PackagesCard
              price="149$"
              start="Air Duct Cleaning"
              title="Premium"
              details="- Vacuum up to 12 supply vents "
              details1="- Camera inspection"
              imageSrc="/file-document-200h.png"
              rootClassName="packages-card-root-class-name"
              className="packages1-component1"
            ></PackagesCard>
            <PackagesCard
              price="249$"
              start="Air Duct Cleaning"
              title="Duct Cleaning"
              details="- Negative pressure connection to the main supply line and main return line. "
              details1="- Dryer vent cleaning from outside (1st-floor exit only) "
              details11="- Basic furnace cleaning -Camera inspection"
              imageSrc="/dice-5-200h.png"
              rootClassName="packages-card-root-class-name1"
              className="packages1-component2"
            ></PackagesCard>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .packages1-services {
            display: flex;
            position: relative;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .packages1-max-width {
            flex-direction: column;
          }
          .packages1-heading-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .packages1-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .packages1-text {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .packages1-controls {
            display: grid;
            grid-gap: 12px;
            grid-template-columns: 1fr 1fr;
          }
          .packages1-icon {
            width: 16px;
            height: 16px;
          }
          .packages1-icon2 {
            width: 16px;
            height: 16px;
          }
          .packages1-component {
            text-decoration: none;
          }
          .packages1-component1 {
            text-decoration: none;
          }
          .packages1-component2 {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

Packages1.defaultProps = {
  buttonRight: '',
  buttonLeft: '',
  rootClassName: '',
  ourServices: 'our services',
}

Packages1.propTypes = {
  buttonRight: PropTypes.string,
  buttonLeft: PropTypes.string,
  rootClassName: PropTypes.string,
  ourServices: PropTypes.string,
}

export default Packages1
