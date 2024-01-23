import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const App = (props) => {
  return (
    <>
      <div className="app-container">
        <Head>
          <title>
            App - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="App - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <div className="app-container1">
          <div className="app-container2">
            <Script
              html={`<iframe id="JotFormIFrame-221005831703443" title="AM Pure Services APP" src="https://www.jotform.com/app/221005831703443?appEmbedded=1" style="width:100%;height:100%;border: 0;"></iframe>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .app-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .app-container1 {
            width: 100%;
            height: 100vh;
            align-self: center;
          }
          .app-container2 {
            display: contents;
          }
          @media (max-width: 479px) {
            .app-container {
              align-items: center;
            }
            .app-container1 {
              width: 100%;
              height: 100vh;
            }
          }
        `}
      </style>
    </>
  )
}

export default App
