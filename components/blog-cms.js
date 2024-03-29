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
          <h2 className="blog-cms-text01">
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
                  renderItem={(context_sp2aum) => (
                    <>
                      <Link href={`/post/${context_sp2aum?.slug}`}>
                        <a>
                          <div className="blog-cms-blog-card">
                            <img
                              alt="clean air duct"
                              src={
                                context_sp2aum?.coverImage?.url ||
                                'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2ebd7c56-845b-432a-9ccd-239e62f0733d/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                              }
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
                                {[0]?.date}
                                {context_sp2aum?.date}
                              </span>
                            </div>
                            <span className="blog-cms-text08">
                              {[0]?.title}
                              {context_sp2aum?.title}
                            </span>
                            <span>Read More</span>
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
            font-size: 46px;
            font-style: normal;
            text-align: center;
            font-family: Rubik;
            font-weight: 900;
            line-height: px;
            margin-bottom: var(--dl-space-space-unit);
            letter-spacing: 0.01em;
            text-decoration: none;
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
  rootClassName: '',
  imagealt: 'clean air duct',
  text3: 'Next',
  text5: 'Next',
  text1: 'Read More',
  text4: 'Previous',
  text2: 'Previous',
}

BlogCMS.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  imagealt: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
}

export default BlogCMS
