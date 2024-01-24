import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Banner from '../components/banner'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>
            About - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="About - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation rootClassName="navigation-root-class-name3"></Navigation>
        <main className="about-main">
          <div className="about-title">
            <div className="about-title-wrap">
              <span className="about-text">
                <span>ABOUT AM PURE SERVICES</span>
                <br></br>
              </span>
            </div>
          </div>
          <span className="about-text03">
            <span className="about-text04">What we do?</span>
            <br></br>
            <br></br>
            <span>
              We clean air ducts with trained and certified technicians,
            </span>
            <br></br>
            <span>
              Use one of the most powerful and effective duct cleaning systems
            </span>
            <br></br>
            <span>on the market today.</span>
            <br></br>
            <span>
              We train the best and brightest duct cleaning technicians that
              Michigan has to offer.
            </span>
            <br></br>
            <span>
              All technicians are certified, allowing them to understand the
              needs of your air ducts.
            </span>
            <br></br>
            <br></br>
            <span className="about-text18">Our experience:</span>
            <br></br>
            <br></br>
            <span>
              AM Services takes pride in more than ten years of field experience
              in the
            </span>
            <br></br>
            <span>duct cleaning industry.</span>
            <br></br>
            <span>
              We aim to provide professional service and help you understand the
              meaning and importance of clean air ducts.
            </span>
            <br></br>
            <span>
              Along with our massive experience, we make one of the
              industry&apos;s most powerful duct cleaning teams.
            </span>
            <br></br>
            <br></br>
            <span className="about-text30">
              We hope to serve you well!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <Banner rootClassName="banner-root-class-name4"></Banner>
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .about-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .about-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-text {
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
          }
          .about-text03 {
            width: 768px;
            font-size: 26px;
            align-self: center;
            text-align: left;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .about-text04 {
            font-weight: 700;
          }
          .about-text18 {
            font-weight: 700;
          }
          .about-text30 {
            font-weight: 700;
          }
          @media (max-width: 1200px) {
            .about-text {
              font-size: 48px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
            }
          }
          @media (max-width: 767px) {
            .about-text {
              font-size: 30px;
            }
            .about-text03 {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .about-text {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
