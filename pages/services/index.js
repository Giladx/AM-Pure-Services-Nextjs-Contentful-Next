import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import Navigation from '../../components/navigation'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import servicePageInitialPropsBc7f7Resource from '../../resources/service-page-initial-props-bc7f7'

const Service = (props) => {
  return (
    <>
      <div className="service-container">
        <Head>
          <title>
            Service - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Service - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <Navigation rootClassName="navigation-root-class-name8"></Navigation>
        <div className="service-title">
          <span className="service-text">
            <span>SERVICES</span>
            <br></br>
          </span>
        </div>
        <div className="service-posts-componnets">
          <div className="service-container1">
            <span className="service-text03">from blog</span>
            <h2 className="service-text04 Heading2">
              <span>Our Services</span>
              <br></br>
            </h2>
          </div>
          <div className="service-container2">
            <DataProvider
              renderSuccess={(params) => (
                <>
                  <Repeater
                    items={params}
                    renderItem={(PostEntities) => (
                      <>
                        <Link href={`/services/${PostEntities?.slug}`}>
                          <a>
                            <div className="service-blog-card">
                              <img
                                alt="clean air duct"
                                src={PostEntities?.coverImage?.url}
                                loading="lazy"
                                className="service-image"
                              />
                              <div className="service-container3">
                                <button className="service-button button-secondary button">
                                  <span>
                                    <span>DUCT CLEAN</span>
                                    <br></br>
                                  </span>
                                </button>
                                <span className="service-text10">
                                  {PostEntities?.date}
                                </span>
                              </div>
                              <span className="service-text11">
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
          .service-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .service-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .service-text {
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
          .service-posts-componnets {
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
          .service-container1 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .service-text03 {
            color: var(--dl-color-scheme-green);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .service-text04 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .service-container2 {
            width: auto;
            height: auto;
            margin: 0 auto;
            display: grid;
            grid-gap: 1.5rem;
            flex-direction: column;
            grid-template-columns: repeat(3, 1fr);
          }
          .service-blog-card {
            flex: 0 0 auto;
            width: 100%;
            cursor: pointer;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .service-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .service-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .service-button {
            font-size: 12px;
            text-transform: uppercase;
          }
          .service-text10 {
            font-size: 12px;
            font-style: normal;
            text-align: right;
            font-weight: 700;
          }
          @media (max-width: 1200px) {
            .service-image {
              height: 180px;
            }
            .service-text11 {
              font-style: normal;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
          }
          @media (max-width: 991px) {
            .service-posts-componnets {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .service-container2 {
              width: var(--dl-size-size-maxwidth);
              max-width: 550px;
              align-self: center;
              margin-bottom: 0px;
              grid-template-columns: repeat(1, 1fr);
            }
            .service-blog-card {
              max-width: 550px;
            }
          }
          @media (max-width: 767px) {
            .service-text {
              font-size: 30px;
            }
            .service-posts-componnets {
              width: auto;
              max-width: auto;
            }
            .service-blog-card {
              max-width: auto;
            }
            .service-image {
              height: 200px;
            }
          }
          @media (max-width: 479px) {
            .service-text {
              font-size: 25px;
            }
            .service-container2 {
              width: 100%;
              padding: 15px;
            }
            .service-blog-card {
              max-width: auto;
            }
            .service-image {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Service.defaultProps = {
  postEntities: [],
}

Service.propTypes = {
  postEntities: PropTypes.array,
}

export default Service

export async function getStaticProps(context) {
  try {
    const response = await servicePageInitialPropsBc7f7Resource({
      ...context?.params,
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
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
