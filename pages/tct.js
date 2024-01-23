import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import ListContainer from '../components/list-container'
import Blog from '../components/blog'
import Banner from '../components/banner'
import Footer from '../components/footer'

const TCT = (props) => {
  return (
    <>
      <div className="tct-container">
        <Head>
          <title>
            TCT - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="TCT - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <main className="tct-main">
          <div className="tct-title">
            <div className="tct-title-wrap">
              <span className="tct-text">UV Light</span>
            </div>
          </div>
          <ListContainer rootClassName="list-container-root-class-name"></ListContainer>
          <div className="tct-content">
            <div className="tct-content-wrap">
              <img alt="image" src="/ultra-violet.svg" className="tct-image" />
              <span className="tct-text1">UV light</span>
              <span className="tct-text2">
                Did you know that UV light is an important component in air and
                surface cleaning? Thanks to its special ability to eliminate
                pathogens or germs, UV light has extensive application in the
                aviation sector as well as the building construction sector.
                Even the International Ultraviolet Association (IUVA) confirms
                that UV light has over the last four decades been applied in
                drinking water, wastewater, pharmaceutical products, air, and
                surface disinfection with incredible results. After conducting
                several studies, the EPA also recommends UV disinfection devices
                for routine cleaning and disinfection practices. With UV air
                cleaners, we’ll effectively help you create not only a livable
                indoor environment but also a comfortable and healthy one.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="tct-text3">
                <span className="tct-text4">
                  {' '}
                  How it works
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
              <span className="tct-text6">
                If anyone in your home is wrestling with asthma, allergies, or
                any other respiratory issues, you could use UV rays to improve
                the indoor environment and make it safer for them. At AM Pure
                Services, our UV light system essentially emits UVC rays in your
                HVAC system. The rays released then disinfect the air by getting
                rid of dust, bacteria, fungi, mildew, and other irritating
                contaminants before the air circulates back into your vents and
                ends up in your home’s environment. That said, our Safeguard UV
                Cleanser does more than kill invasive organisms. It also works
                to neutralize volatile organic compounds (VOCs). This means that
                the presence of a Safeguard UV Cleanser in your HVAC system
                significantly reduces or eliminates solvents, chemical gases,
                glues, and odor-causing contaminants through direct exposure.
                And no, VOC invasion is not prevalent in industrial settings
                alone. It has become a common issue with residential spaces as
                well. In fact, the Center for Disease Control (CDC) reports that
                more than 30% of the pollutants inside your home constitute
                VOCs. These life-threatening pollutants may emanate from
                literally anything be it household cleaners or from the paint on
                your walls. Thanks to our Safeguard UV Cleanser, however, you
                can easily neutralize this threat and enhance your indoor air
                quality effortlessly!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <Blog rootClassName="blog-root-class-name8"></Blog>
          <Banner rootClassName="banner-root-class-name15"></Banner>
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .tct-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .tct-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .tct-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .tct-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .tct-text {
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
            text-transform: uppercase;
          }
          .tct-content {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .tct-content-wrap {
            flex: 0 0 auto;
            width: 800px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .tct-image {
            width: 100%;
            object-fit: cover;
          }
          .tct-text1 {
            width: 100%;
            font-size: 46px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 63px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .tct-text3 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 63px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .tct-text4 {
            align-self: flex-start;
          }
          @media (max-width: 1200px) {
            .tct-text {
              font-size: 48px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
              text-transform: uppercase;
            }
            .tct-content {
              align-self: center;
              align-items: center;
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
              justify-content: center;
            }
            .tct-content-wrap {
              width: 768px;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .tct-image {
              width: 100%;
              align-self: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .tct-text1 {
              width: 100%;
              font-size: 36px;
              align-self: flex-start;
              font-style: normal;
              font-family: Rubik;
              font-weight: 700;
              line-height: 63px;
              letter-spacing: 0.01em;
              text-transform: uppercase;
              text-decoration: none;
            }
            .tct-text2 {
              width: 100%;
              font-size: 16px;
              align-self: flex-start;
              text-align: left;
            }
            .tct-text3 {
              width: 100%;
              font-size: 26px;
              align-self: flex-start;
              font-style: normal;
              font-family: Rubik;
              font-weight: 700;
              line-height: 63px;
              letter-spacing: 0.01em;
              text-decoration: none;
            }
            .tct-text4 {
              width: 100%;
              align-self: flex-start;
            }
            .tct-text6 {
              width: 100%;
              font-size: 16px;
              align-self: flex-start;
              text-align: left;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .tct-text {
              font-size: 30px;
            }
            .tct-content-wrap {
              width: 100%;
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .tct-text {
              font-size: 25px;
            }
            .tct-content {
              padding-top: var(--dl-space-space-fiveunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .tct-content-wrap {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default TCT
