import React from 'react'

import PropTypes from 'prop-types'

const Content2 = (props) => {
  return (
    <>
      <div className="content2-content">
        <div className="content2-container">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="content2-image"
          />
        </div>
        <div className="content2-content-wrap">
          <span className="content2-text">
            <span>AIR DUCT CLEANING</span>
            <br></br>
          </span>
          <span className="content2-text03">
            <span>
              Is essential process to take full advantage of the cooling &amp;
              heating system.
            </span>
            <br></br>
          </span>
          <span className="content2-text06">
            <span>
              The air ducts and filters must be kept clean. Air ducts and
              filters accumulate dust, odors and even dust mites which can
              trigger allergies.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              How can you enjoy a cool interior if it’s causing you to sneeze?
              When the air ducts or filters are dirty the system works
              inefficiently and uses extra electricity. After our service, you
              can breathe easy and enjoy the cool air.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .content2-content {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .content2-container {
            flex: 0 0 auto;
            width: 50%;
            height: 566px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .content2-image {
            width: 532px;
            height: 472px;
            align-self: center;
            object-fit: cover;
          }
          .content2-content-wrap {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .content2-text {
            width: 100%;
            font-size: 46px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .content2-text03 {
            width: 100%;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: var(--dl-space-space-unit);
          }
          .content2-text06 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 1200px) {
            .content2-container {
              height: 568px;
            }
            .content2-image {
              width: 100%;
              height: 100%;
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .content2-container {
              display: none;
            }
            .content2-text03 {
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .content2-content-wrap {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Content2.defaultProps = {
  imageSrc: '/undraw_absorbed_in_re_ymd6-800w.webp',
  imageAlt: 'image',
}

Content2.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Content2
