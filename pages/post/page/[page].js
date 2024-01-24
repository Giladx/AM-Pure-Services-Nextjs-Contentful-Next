import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Navigation from '../../../components/navigation'
import Banner from '../../../components/banner'
import Footer from '../../../components/footer'
import postPageInitialPaths2317bResource from '../../../resources/post-page-initial-paths-2317b'
import postPageInitialProps093c5Resource from '../../../resources/post-page-initial-props-093c5'

const Post11 = (props) => {
  return (
    <>
      <div className="post11-container">
        <Head>
          <title>
            Post1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Post1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <Navigation rootClassName="navigation-root-class-name8"></Navigation>
        <div className="post11-title">
          <span className="post11-text">
            <span>SERVICES</span>
            <br></br>
          </span>
        </div>
        <div className="post11-posts-componnets">
          <div className="post11-container1">
            <span className="post11-text03">from blog</span>
            <h2 className="post11-text04 Heading2">
              <span>Our Services</span>
              <br></br>
            </h2>
          </div>
          <div className="post11-container2">
            <DataProvider
              renderSuccess={(params) => (
                <>
                  <Repeater
                    items={params}
                    renderItem={(PostEntities) => (
                      <>
                        <Link href={`/post/${PostEntities?.slug}`}>
                          <a>
                            <div className="post11-blog-card">
                              <img
                                alt="clean air duct"
                                src={PostEntities?.coverImage?.url}
                                loading="lazy"
                                className="post11-image"
                              />
                              <div className="post11-container3">
                                <button className="post11-button button-secondary button">
                                  <span>
                                    <span>DUCT CLEAN</span>
                                    <br></br>
                                  </span>
                                </button>
                                <span className="post11-text10">
                                  {PostEntities?.date}
                                </span>
                              </div>
                              <span className="post11-text11">
                                {PostEntities?.title}
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
              initialData={props.postEntities}
              persistDataDuringLoading={true}
              key={props?.pagination?.page}
            />
          </div>
        </div>
        <Banner rootClassName="banner-root-class-name18"></Banner>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .post11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .post11-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .post11-text {
            width: 100%;
            font-size: 48px;
            align-self: center;
            text-align: center;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.3em;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .post11-posts-componnets {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .post11-container1 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .post11-text03 {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .post11-text04 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .post11-container2 {
            width: auto;
            height: auto;
            margin: 0 auto;
            display: grid;
            grid-gap: 1.5rem;
            flex-direction: column;
            grid-template-columns: repeat(3, 1fr);
          }
          .post11-blog-card {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .post11-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .post11-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .post11-button {
            font-size: 12px;
            text-transform: uppercase;
          }
          .post11-text10 {
            font-size: 12px;
            font-style: normal;
            text-align: right;
            font-weight: 700;
          }
          @media (max-width: 1200px) {
            .post11-image {
              height: 180px;
            }
            .post11-text11 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
          }
          @media (max-width: 991px) {
            .post11-posts-componnets {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .post11-container2 {
              width: var(--dl-size-size-maxwidth);
              max-width: 550px;
              align-self: center;
              margin-bottom: 0px;
              grid-template-columns: repeat(1, 1fr);
            }
            .post11-blog-card {
              max-width: 550px;
            }
          }
          @media (max-width: 767px) {
            .post11-text {
              font-size: 30px;
            }
            .post11-posts-componnets {
              width: auto;
              max-width: auto;
            }
            .post11-blog-card {
              max-width: auto;
            }
            .post11-image {
              height: 200px;
            }
          }
          @media (max-width: 479px) {
            .post11-text {
              font-size: 25px;
            }
            .post11-container2 {
              width: 100%;
              padding: 15px;
            }
            .post11-blog-card {
              max-width: auto;
            }
            .post11-image {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Post11.defaultProps = {
  postEntities: [],
}

Post11.propTypes = {
  postEntities: PropTypes.array,
}

export default Post11

export async function getStaticPaths() {
  try {
    const response = await postPageInitialPaths2317bResource({
      content_type: 'post',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps(context) {
  try {
    const response = await postPageInitialProps093c5Resource({
      ...context?.params,
      skip: (context.params.page - 1) * 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
