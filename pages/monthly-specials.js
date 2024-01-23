import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Packages from '../components/packages'
import Blog from '../components/blog'
import Banner from '../components/banner'
import Footer from '../components/footer'

const MonthlySpecials = (props) => {
  return (
    <>
      <div className="monthly-specials-container">
        <Head>
          <title>
            Monthly-Specials - AM Pure Services | Airduct Cleaning | Drayer Vent
            Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Monthly-Specials - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2ebd7c56-845b-432a-9ccd-239e62f0733d/9b2dfd80-db34-45ba-a7c4-c1045c6ffc8a?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navigation></Navigation>
        <main className="monthly-specials-main">
          <div className="monthly-specials-title">
            <div className="monthly-specials-title-wrap">
              <span className="monthly-specials-text">
                <span>OUR MONTHLY</span>
                <br></br>
              </span>
            </div>
            <span className="monthly-specials-text3">SPECIALS</span>
          </div>
          <Packages rootClassName="packages-root-class-name"></Packages>
          <Blog rootClassName="blog-root-class-name1"></Blog>
          <Banner rootClassName="banner-root-class-name3"></Banner>
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .monthly-specials-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .monthly-specials-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monthly-specials-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            border-color: var(--dl-color-scheme-lightgreen);
            border-width: 1px;
            justify-content: center;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .monthly-specials-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .monthly-specials-text {
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
          }
          .monthly-specials-text3 {
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: Sigmar One;
            font-weight: 500;
            padding-left: 5px;
            text-transform: none;
            text-decoration: none;
            background-image: -webkit-linear-gradient(
              328deg,
              violet,
              indigo,
              blue,
              green,
              yellow,
              orange,
              red
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          @media (max-width: 767px) {
            .monthly-specials-text {
              font-size: 30px;
            }
            .monthly-specials-text3 {
              font-size: 35px;
            }
          }
          @media (max-width: 479px) {
            .monthly-specials-text {
              font-size: 25px;
            }
            .monthly-specials-text3 {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default MonthlySpecials
