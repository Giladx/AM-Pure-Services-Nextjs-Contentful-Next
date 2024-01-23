import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import BlogCard from './blog-card'

const Blog = (props) => {
  return (
    <>
      <div className={`blog-blog section-container ${props.rootClassName} `}>
        <div className="blog-max-width max-content-container">
          <span className="blog-text">{props.text}</span>
          <h2 className="blog-text1 Heading2">
            <span>Our Services</span>
            <br></br>
          </h2>
          <div className="blog-blog-cards-container">
            <Link href="/air-duct-cleaning">
              <a className="blog-link">
                <BlogCard
                  text="Read More"
                  button="Duct Clean"
                  imageAlt="clean air duct"
                  imageSrc="/air_duct-1500w.webp"
                  rootClassName="blog-card-root-class-name6"
                  className="blog-component"
                ></BlogCard>
              </a>
            </Link>
            <Link href="/dryer-vent">
              <a className="blog-link1">
                <BlogCard
                  text="Read More"
                  text1="Aug 14, 2022"
                  text2="DRYER VENT CLEANING"
                  button="DRYER VENT"
                  imageSrc="/duct_cleaner-1500w.webp"
                  rootClassName="blog-card-root-class-name7"
                  className="blog-component1"
                ></BlogCard>
              </a>
            </Link>
            <Link href="/uv-light">
              <a className="blog-link2">
                <BlogCard
                  text="Read More"
                  text1="Jul 12, 2022"
                  text2="UV Light"
                  button="UV"
                  imageSrc="/photo-1618853606840-d2138cef5431-1500w.webp"
                  rootClassName="blog-card-root-class-name8"
                  className="blog-component2"
                ></BlogCard>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-blog {
            position: relative;
            border-color: var(--dl-color-scheme-lightgreen);
            border-width: 1px;
            border-top-width: 10px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 10px;
          }
          .blog-max-width {
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-text {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .blog-text1 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-blog-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-link {
            display: contents;
          }
          .blog-component {
            text-decoration: none;
          }
          .blog-link1 {
            display: contents;
          }
          .blog-component1 {
            text-decoration: none;
          }
          .blog-link2 {
            display: contents;
          }
          .blog-component2 {
            text-decoration: none;
          }

          @media (max-width: 1200px) {
            .blog-blog {
              border-width: 0px;
            }
          }
          @media (max-width: 991px) {
            .blog-blog-cards-container {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Blog.defaultProps = {
  rootClassName: '',
  text: 'from blog',
}

Blog.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Blog
