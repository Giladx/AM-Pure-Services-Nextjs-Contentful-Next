import React from 'react'

import PropTypes from 'prop-types'

const Post2 = (props) => {
  return (
    <>
      <div className="post2-container">
        <div className="post2-container1">
          <div className="post2-title">
            <div className="post2-title-wrap">
              <h1 className="post2-text">{props.heading}</h1>
            </div>
          </div>
          <div className="post2-container2">
            <img
              alt={props.imagealt}
              src={props.imagesrc}
              className="post2-image"
            />
            <div className="post2-container3">
              <cms-richtext className="post2-cms-richtext"></cms-richtext>
            </div>
            <img
              src={props.imagesrc1}
              loading="eager"
              className="post2-image1"
            />
            <div className="post2-container4">
              <cms-richtext className="post2-cms-richtext1"></cms-richtext>
            </div>
            <img
              alt={props.imagealt1}
              src={props.imagesrc2}
              loading="eager"
              className="post2-image2"
            />
            <div className="post2-container5">
              <cms-richtext className="post2-cms-richtext2"></cms-richtext>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .post2-container {
            gap: 12px;
            width: 100%;
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .post2-container1 {
            gap: 12px;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .post2-title {
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .post2-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .post2-text {
            font-size: 48px;
            font-style: normal;
            font-weight: 900;
          }
          .post2-container2 {
            flex: 0 0 auto;
            width: 800px;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .post2-image {
            width: 100%;
            object-fit: cover;
          }
          .post2-container3 {
            width: 100%;
            align-self: stretch;
          }
          .post2-cms-richtext {
            width: 100%;
            align-self: stretch;
          }
          .post2-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .post2-container4 {
            width: 100%;
            align-self: stretch;
          }
          .post2-cms-richtext1 {
            width: 100%;
            align-self: stretch;
          }
          .post2-image2 {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .post2-container5 {
            width: 100%;
            align-self: stretch;
          }
          .post2-cms-richtext2 {
            width: 100%;
            align-self: stretch;
          }
          @media (max-width: 1600px) {
            .post2-text {
              text-transform: uppercase;
            }
          }
          @media (max-width: 1200px) {
            .post2-container2 {
              width: 768px;
            }
          }
          @media (max-width: 767px) {
            .post2-text {
              font-size: 30px;
            }
            .post2-container2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .post2-text {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

Post2.defaultProps = {
  heading: 'text',
  imagesrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imagealt: 'image',
  imagesrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imagealt1: 'image',
  imagesrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Post2.propTypes = {
  heading: PropTypes.string,
  imagesrc1: PropTypes.string,
  imagealt: PropTypes.string,
  imagesrc2: PropTypes.string,
  imagealt1: PropTypes.string,
  imagesrc: PropTypes.string,
}

export default Post2
