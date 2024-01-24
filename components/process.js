import React from 'react'

import PropTypes from 'prop-types'

const Process = (props) => {
  return (
    <>
      <div
        className={`process-process section-container ${props.rootClassName} `}
      >
        <div className="process-max-width max-content-container">
          <span className="process-text">{props.text}</span>
          <h2 className="process-text01 Heading2">
            <span>
              We use a simple three step process.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Take a look.</span>
          </h2>
          <div className="process-step">
            <span className="process-text05">{props.text1}</span>
            <div className="process-container">
              <span className="process-text06">{props.text4}</span>
              <span className="process-text07">{props.text5}</span>
            </div>
          </div>
          <div className="process-step1">
            <span className="process-text08">{props.text2}</span>
            <div className="process-container1">
              <span className="process-text09">{props.text6}</span>
              <span className="process-text10">{props.text7}</span>
            </div>
          </div>
          <div className="process-step2">
            <span className="process-text11">{props.text3}</span>
            <div className="process-container2">
              <span className="process-text12">{props.text8}</span>
              <span className="process-text13">{props.text9}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .process-process {
            position: relative;
            background-color: var(--dl-color-scheme-green);
          }
          .process-max-width {
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .process-text {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .process-text01 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .process-step {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-text05 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .process-container {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text06 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text07 {
            color: var(--dl-color-scheme-white80);
          }
          .process-step1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-text08 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .process-container1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text09 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text10 {
            color: var(--dl-color-scheme-white80);
          }
          .process-step2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .process-text11 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .process-container2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .process-text12 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .process-text13 {
            color: var(--dl-color-scheme-white80);
          }
          .process-root-class-name {
            display: none;
          }
          .process-root-class-name1 {
            display: none;
          }
          @media (max-width: 767px) {
            .process-text05 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .process-text08 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .process-text11 {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .process-text05 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-text08 {
              margin-right: var(--dl-space-space-twounits);
            }
            .process-text11 {
              margin-right: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Process.defaultProps = {
  text8: 'Inspection of the results',
  rootClassName: '',
  text9:
    'Upon completion of the cleaning, AM technicians will perform a quality inspection to show the results of the cleaning.',
  text7:
    'Upon inspection, AM technicians will determine the best effective cleaning plan. Considering both time and price.',
  text4: 'Finding the dirt',
  text2: '02',
  text1: '01',
  text5:
    "Our technicians will start with performing a starter cleaning and performing an inspection to clarify the air duct's condition.",
  text6: 'Cleaning plan',
  text: 'Our process',
  text3: '03',
}

Process.propTypes = {
  text8: PropTypes.string,
  rootClassName: PropTypes.string,
  text9: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
}

export default Process
