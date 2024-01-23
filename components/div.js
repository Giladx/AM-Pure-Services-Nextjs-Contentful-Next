import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Div = (props) => {
  return (
    <>
      <div className={`hwrap ${props.rootClassName} `}>
        <div className="div-div1 hmove">
          <div className="div-div2 hslide">
            <h1 className="div-text">{props.slide12}</h1>
          </div>
          <div className="div-div3 hslide">
            <h1 className="div-text1">{props.slide121}</h1>
          </div>
          <div className="div-div4 hslide">
            <h1 className="div-text2">{props.slide1211}</h1>
          </div>
          <div className="div-div5 hslide">
            <h1 className="div-text3">{props.slide12111}</h1>
          </div>
        </div>
        <div>
          <div className="div-container1">
            <Script
              html={`<style>
/* (D) SLIDE ANIMATION */
@keyframes slideh {
  /* (D0) THE IDEA - USE KEYFRAMES TO SHIFT SLIDES *
  0% { right: 0; }
  33% { right: 100%; }
  66% { right: 200%; }
  100% { right: 0; }
 
  /* (D1) BUT THE ABOVE WILL SHIFT NON-STOP */
  /* SO WE ADD PAUSES BETWEEN EACH SLIDE */
  0% { right: 0; }
  10% { right: 0; }
  25% { right: 100%; }
  40% { right: 100%;}
  50% { right: 200%; }
  65% { right: 200%; }
  80% { right: 300%; }
  95% { right: 300%; }
  100% { right: 0; }
}
.hmove { animation: slideh linear 8s infinite; }
.hmove:hover { animation-play-state: paused; }
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .div-div1 {
            height: auto;
          }
          .div-div2 {
            height: auto;
          }
          .div-text {
            color: var(--dl-color-scheme-green);
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 3em;
          }
          .div-div3 {
            height: auto;
            align-self: center;
            justify-content: center;
          }
          .div-text1 {
            color: var(--dl-color-scheme-green);
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 3em;
          }
          .div-div4 {
            height: auto;
            align-self: center;
            justify-content: center;
          }
          .div-text2 {
            color: var(--dl-color-scheme-green);
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 3em;
          }
          .div-div5 {
            height: auto;
            align-self: center;
            justify-content: center;
          }
          .div-text3 {
            color: var(--dl-color-scheme-green);
            width: 100%;
            padding: var(--dl-space-space-twounits);
            font-size: 3em;
          }
          .div-container1 {
            display: contents;
          }
          @media (max-width: 1600px) {
            .div-text {
              font-size: 3em;
            }
            .div-text1 {
              font-size: 3em;
            }
            .div-text2 {
              font-size: 3em;
            }
            .div-text3 {
              font-size: 3em;
            }
          }
        `}
      </style>
    </>
  )
}

Div.defaultProps = {
  slide121: 'WE BELIEVE IN ONE WAY: INTEGRITY',
  slide12111: 'WE BELIEVE IN ONE WAY: INTEGRITY',
  slide12: 'PURE CLEAN AIR DUCT FOR HEALTHY LIFE',
  rootClassName: '',
  slide1211: 'WE BELIEVE IN ONE WAY: INTEGRITY',
}

Div.propTypes = {
  slide121: PropTypes.string,
  slide12111: PropTypes.string,
  slide12: PropTypes.string,
  rootClassName: PropTypes.string,
  slide1211: PropTypes.string,
}

export default Div
