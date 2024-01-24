import React from 'react'
import Link from 'next/link'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

const BlogCMS = (props) => {
  return (
    <>
      <div className={`blog-cms-container ${props.rootClassName} `}>
        <div className="blog-cms-container1">
          <span className="blog-cms-text">{props.text}</span>
          <h2 className="blog-cms-text01 Heading2">
            <span>Our Services</span>
            <br></br>
          </h2>
        </div>
        <div className="blog-cms-container2">
          <DataProvider
            fetchData={(params) =>
              fetch(
                `/api/blog-cms-resource-blog-cms?${new URLSearchParams(
                  params
                )}`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              )
                .then((res) => res.json())
                .then((data) => data)
            }
            renderSuccess={(params) => (
              <>
                <Repeater
                  items={params}
                  renderItem={(context_crvlg) => (
                    <>
                      <Link href={`/post/${context_crvlg?.slug}`}>
                        <a>
                          <div className="blog-cms-blog-card">
                            <img
                              alt={props.imagealt}
                              src={context_crvlg?.coverImage?.url}
                              loading="lazy"
                              className="blog-cms-image"
                            />
                            <div className="blog-cms-container3">
                              <button className="blog-cms-button button-secondary button">
                                <span>
                                  <span>DUCT CLEAN</span>
                                  <br></br>
                                </span>
                              </button>
                              <span className="blog-cms-text07">
                                {context_crvlg?.date}
                              </span>
                            </div>
                            <span className="blog-cms-text08">
                              {context_crvlg?.title}
                            </span>
                            <span>{props.text1}</span>
                          </div>
                        </a>
                      </Link>
                    </>
                  )}
                />
              </>
            )}
          />
        </div>
      </div>
      <style jsx>
        {`
          .blog-cms-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .blog-cms-container1 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-cms-text {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .blog-cms-text01 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-cms-container2 {
            width: auto;
            height: auto;
            margin: auto 0;
            display: grid;
            grid-gap: 1.5rem;
            align-self: center;
            grid-template-columns: repeat(3, 1fr);
          }
          .blog-cms-blog-card {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .blog-cms-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .blog-cms-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-cms-button {
            font-size: 12px;
            text-transform: uppercase;
          }
          .blog-cms-text07 {
            font-size: 12px;
            font-style: normal;
            text-align: right;
            font-weight: 700;
          }

          @media (max-width: 1200px) {
            .blog-cms-image {
              height: 180px;
            }
            .blog-cms-text08 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
          }
          @media (max-width: 991px) {
            .blog-cms-container2 {
              width: var(--dl-size-size-maxwidth);
              max-width: 480px;
              grid-template-columns: repeat(1, 1fr);
            }
            .blog-cms-blog-card {
              max-width: 550px;
            }
          }
          @media (max-width: 767px) {
            .blog-cms-blog-card {
              max-width: auto;
            }
            .blog-cms-image {
              height: 200px;
            }
          }
          @media (max-width: 479px) {
            .blog-cms-container2 {
              width: 100%;
              padding: 15px;
              padding-top: 15px;
            }
            .blog-cms-blog-card {
              max-width: auto;
            }
            .blog-cms-image {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

BlogCMS.defaultProps = {
  text: 'from blog',
  imagealt: 'clean air duct',
  text1: 'Read More',
  rootClassName: '',
  text2: 'Previous',
  text3: 'Next',
}

BlogCMS.propTypes = {
  text: PropTypes.string,
  imagealt: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default BlogCMS
