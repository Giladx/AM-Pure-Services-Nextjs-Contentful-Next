import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import BlogCMS from '../components/blog-cms'
import Banner from '../components/banner'
import Footer from '../components/footer'

const DryerVent = (props) => {
  return (
    <>
      <div className="dryer-vent-container">
        <Head>
          <title>
            Dryer-Vent - AM Pure Services | Airduct Cleaning | Drayer Vent
            Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Dryer-Vent - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2ebd7c56-845b-432a-9ccd-239e62f0733d/9b2dfd80-db34-45ba-a7c4-c1045c6ffc8a?org_if_sml=1&amp;force_format=original"
          />
          <meta name="robots" content="noindex" />
        </Head>
        <Navigation></Navigation>
        <main className="dryer-vent-main">
          <div className="dryer-vent-title">
            <div className="dryer-vent-title-wrap">
              <span className="dryer-vent-text">
                <span>DRYER VENT CLEANING</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="dryer-vent-content">
            <div className="dryer-vent-content-wrap">
              <img
                alt="image"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/duct_cleaner-1500w.webp"
                srcSet="/duct_cleaner-1500w.webp 1200w, /duct_cleaner-tablet.webp 800w, /duct_cleaner-mobile.webp 480w"
                className="dryer-vent-image"
              />
              <span className="dryer-vent-text03">DRYER VENT CLEANING</span>
              <span className="dryer-vent-text04">
                <span>
                  Dryer vents are among the most overlooked components in a
                  home-cleaning exercise. At AM Pure Services, however, we have
                  a special knack for attention to detail. When you order our
                  cleaning services, we cover every inch of the home that needs
                  special cleaning attention including dryer vents. Imagine what
                  would happen if a rainy or cold season caught you with a
                  broken dryer. Not only would you end up with limited options
                  to keep your body warm but also have to foot higher power
                  bills. You don’t want to be on the receiving end of this! To
                  avert such a crisis, AM Pure cleaning technicians have stepped
                  up to help you out. Our techs will guarantee the efficiency of
                  your dryer by professionally cleaning its vents. When working
                  on any dryer vent-cleaning project, our techs strive to:
                </span>
                <br></br>
                <span>
                  • Ensure your dryer machine is in good working order
                </span>
                <br></br>
                <span>• Enhance the machine’s efficiency</span>
                <br></br>
                <span>
                  • Give the dryer machine a prolonged lifespan
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="dryer-vent-text12">
                Why you should not overlook your dryer vent
              </span>
              <span className="dryer-vent-text13">
                If you didn’t know, nearly half of all the lint produced when
                drying your clothes bypasses the filter and ends up trapped
                inside the dryer exhaust vent. When left unchecked for a while,
                the lint ends up clogging the vent. A clogged vent essentially
                undermines the performance of your dryer machine. This means
                that your clothes will take longer than usual to dry. Apart from
                resulting in serious delays, this menace can also drive up your
                dryer’s energy costs significantly. Worse still, severe vent
                clogging might be a fire hazard. How is that? When the hot air
                produced by the dryer fails to find a clear escape passage, the
                machine becomes hot, which means that it might start a fire
                easily. This is because lint is highly flammable. So, what
                should you do? The hose and pipe of your dryer vent should
                undergo annual cleaning to sustain efficiency while mitigating
                the risk of fire.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="dryer-vent-text14">
                Contact us immediately if:
              </span>
              <span className="dryer-vent-text15">
                <span>• Laundry won’t dry in one load cycle</span>
                <br></br>
                <span>
                  • Drying results in clothes that are too hot to touch
                </span>
                <br></br>
                <span>• The laundry room or area gets too hot</span>
                <br></br>
                <span>• The vent stays closed when the dryer is running</span>
                <br></br>
                <span>• The lint screen fails to trap any lint</span>
                <br></br>
                <span>
                  • Your dryer goes off without warning
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="dryer-vent-text27">Why us?</span>
              <span className="dryer-vent-text28">
                When you order our dryer vent cleaning services at AM Pure, you
                get advanced dryer vent cleaning solutions. By applying
                ultramodern state-of-the-art cleaning tools, our technicians are
                able to clean your dryer vents effortlessly. After moving your
                dryer machine away from the walls, we then insert a drill brush
                into the vent pipe. As the brush runs through the vent, it
                loosens every lint, dirt, and debris in its way. Next, we
                connect the dryer duct to a powerful blower to drive out all the
                lint and dirt residue still lying inside. Besides vent cleaning,
                we also clean the areas inside the dryer where lint is also
                likely to collect.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <BlogCMS></BlogCMS>
          <Banner rootClassName="banner-root-class-name11"></Banner>
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .dryer-vent-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .dryer-vent-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dryer-vent-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .dryer-vent-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dryer-vent-text {
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
          }
          .dryer-vent-content {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .dryer-vent-content-wrap {
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
          .dryer-vent-image {
            width: 100%;
            object-fit: cover;
          }
          .dryer-vent-text03 {
            width: 100%;
            font-size: 46px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 63px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .dryer-vent-text12 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 63px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .dryer-vent-text14 {
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 63px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .dryer-vent-text15 {
            width: 100%;
          }
          .dryer-vent-text27 {
            width: 100%;
            font-size: 28px;
            align-self: flex-start;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 63px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .dryer-vent-text {
              font-size: 48px;
            }
            .dryer-vent-content {
              align-self: center;
              align-items: center;
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
              justify-content: center;
            }
            .dryer-vent-content-wrap {
              width: 768px;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .dryer-vent-image {
              width: 100%;
              align-self: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .dryer-vent-text03 {
              width: 100%;
              font-size: 36px;
              align-self: flex-start;
              font-style: normal;
              font-family: Rubik;
              font-weight: 700;
              line-height: 63px;
              letter-spacing: 0.01em;
              text-decoration: none;
            }
            .dryer-vent-text04 {
              width: 100%;
              font-size: 16px;
              align-self: flex-start;
              text-align: left;
            }
            .dryer-vent-text12 {
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
            .dryer-vent-text13 {
              width: 100%;
              font-size: 16px;
              align-self: flex-start;
              text-align: left;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .dryer-vent-text14 {
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
            .dryer-vent-text15 {
              width: 100%;
              font-size: 16px;
              align-self: flex-start;
              text-align: left;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .dryer-vent-text27 {
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
            .dryer-vent-text28 {
              width: 100%;
              font-size: 16px;
              align-self: flex-start;
              text-align: left;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .dryer-vent-text {
              font-size: 30px;
            }
            .dryer-vent-content-wrap {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .dryer-vent-text {
              font-size: 25px;
            }
            .dryer-vent-content-wrap {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default DryerVent
