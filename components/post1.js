import React from 'react'

import PropTypes from 'prop-types'

import Navigation from './navigation'

const Post1 = (props) => {
  return (
    <>
      <div className={`post1-container ${props.rootClassName} `}>
        <Navigation></Navigation>
        <div className="post1-title">
          <div className="post1-title-wrap">
            <h1 className="post1-text">{props.heading}</h1>
          </div>
        </div>
        <div className="post1-container1">
          <img
            alt={props.imagealt}
            src={props.imagesrc}
            className="post1-image"
          />
          <div className="post1-container2">
            <cms-richtext className="post1-cms-richtext"></cms-richtext>
          </div>
          <img
            alt={props.imagealt1}
            src={props.imagesrc1}
            className="post1-image1"
          />
          <div className="post1-container3">
            <cms-richtext className="post1-cms-richtext1"></cms-richtext>
          </div>
          <img
            alt={props.imagealt2}
            src={props.imagesrc2}
            className="post1-image2"
          />
        </div>
      </div>
      <style jsx>
        {`
          .post1-container {
            gap: 12px;
            width: 100%;
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .post1-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .post1-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .post1-text {
            font-size: 48px;
            font-style: normal;
            font-weight: 900;
          }
          .post1-container1 {
            flex: 0 0 auto;
            width: 800px;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .post1-image {
            width: 100%;
            object-fit: cover;
          }
          .post1-container2 {
            width: 100%;
            align-self: stretch;
          }
          .post1-cms-richtext {
            width: 100%;
            align-self: stretch;
          }
          .post1-image1 {
            width: 100%;
            object-fit: cover;
          }
          .post1-container3 {
            width: 100%;
            align-self: stretch;
          }
          .post1-cms-richtext1 {
            width: 100%;
            align-self: stretch;
          }
          .post1-image2 {
            width: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

Post1.defaultProps = {
  imagealt1: 'image',
  imagesrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'text',
  imagealt: 'image',
  imagesrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imagesrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imagealt2: 'image',
  rootClassName: '',
}

Post1.propTypes = {
  imagealt1: PropTypes.string,
  imagesrc1: PropTypes.string,
  heading: PropTypes.string,
  imagealt: PropTypes.string,
  imagesrc: PropTypes.string,
  imagesrc2: PropTypes.string,
  imagealt2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Post1
