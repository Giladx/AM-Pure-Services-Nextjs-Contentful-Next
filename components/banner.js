import React from 'react'

import PropTypes from 'prop-types'

const Banner = (props) => {
  return (
    <>
      <div
        className={`banner-banner section-container ${props.rootClassName} `}
      >
        <a href="tel:8885031722">
          <div className="banner-max-width max-content-container">
            <span className="banner-text">{props.text}</span>
            <h2 className="banner-text1">
              <span className="banner-text2">CALL US NOW</span>
              <br className="Heading2"></br>
              <span className="Heading2">(888) 503 1722</span>
            </h2>
            <button className="banner-primary button-lg button-secondary-white button">
              {props.primary}
            </button>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .banner-banner {
            position: relative;
            background-color: var(--dl-color-scheme-green);
          }
          .banner-max-width {
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .banner-max-width:hover {
            cursor: pointer;
          }
          .banner-text {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .banner-text1 {
            color: var(--dl-color-scheme-white);
            width: 100%;
            font-size: 46px;
            text-align: center;
            font-family: Rubik;
            line-height: 63px;
            margin-bottom: var(--dl-space-space-unit);
            letter-spacing: 0.01em;
          }
          .banner-text2 {
            font-weight: 900;
          }
          .banner-primary {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .banner-root-class-name {
            width: 100%;
            align-self: center;
          }

          .banner-root-class-name2 {
            width: 100%;
          }
          .banner-root-class-name3 {
            width: 100%;
          }
          .banner-root-class-name4 {
            width: 100%;
          }

          .banner-root-class-name6 {
            width: 100%;
          }
          .banner-root-class-name7 {
            display: none;
          }
          .banner-root-class-name8 {
            display: none;
          }
          .banner-root-class-name9 {
            width: 100%;
          }
          .banner-root-class-name10 {
            width: 100%;
          }
          .banner-root-class-name11 {
            width: 100%;
          }
          .banner-root-class-name12 {
            width: 100%;
          }
          .banner-root-class-name13 {
            width: 100%;
          }
          .banner-root-class-name14 {
            width: 100%;
          }
          .banner-root-class-name15 {
            width: 100%;
          }
          .banner-root-class-name16 {
            width: 100%;
          }
          .banner-root-class-name17 {
            width: 100%;
          }
          @media (max-width: 1200px) {
            .banner-banner {
              width: 100%;
            }
            .banner-text1 {
              color: var(--dl-color-scheme-white);
              font-size: 46px;
              font-family: Rubik;
              line-height: 63px;
              letter-spacing: 0.01em;
              text-decoration: none;
            }
            .banner-text2 {
              font-weight: 900;
            }
            .banner-root-class-name {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Banner.defaultProps = {
  rootClassName: '',
  text: 'what are you waiting for?',
  primary: 'Contact us',
}

Banner.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  primary: PropTypes.string,
}

export default Banner
