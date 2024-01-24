import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navigation from '../components/navigation'
import Process from '../components/process'
import Banner from '../components/banner'
import Footer from '../components/footer'

const OrderRquest = (props) => {
  return (
    <>
      <div className="order-rquest-container">
        <Head>
          <title>
            Order-Rquest - AM Pure Services | Airduct Cleaning | Drayer Vent
            Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Order-Rquest - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation rootClassName="navigation-root-class-name2"></Navigation>
        <div className="order-rquest-title">
          <div className="order-rquest-title-wrap">
            <span className="order-rquest-text">
              <span>ORDER REQUEST</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="order-rquest-code">
          <div className="order-rquest-container1">
            <div className="order-rquest-container2">
              <Script
                html={`<iframe id="JotFormIFrame-93106174470453" title="Order Service Package" onload="window.parent.scrollTo(0,0)"
    allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera"
    src="https://form.jotform.me/93106174470453" frameborder="0" style="
      min-width: 100%;
      height:539px;
      border:none;" scrolling="no">
</iframe>
<script type="text/javascript">
    var ifr = document.getElementById("JotFormIFrame-93106174470453");
      if (ifr) {
        var src = ifr.src;
        var iframeParams = [];
        if (window.location.href && window.location.href.indexOf("?") > -1) {
          iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
        }
        if (src && src.indexOf("?") > -1) {
          iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
          src = src.substr(0, src.indexOf("?"))
        }
        iframeParams.push("isIframeEmbed=1");
        ifr.src = src + "?" + iframeParams.join('&');
      }
      window.handleIFrameMessage = function(e) {
        if (typeof e.data === 'object') { return; }
        var args = e.data.split(":");
        if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
        if (!iframe) { return; }
        switch (args[0]) {
          case "scrollIntoView":
            iframe.scrollIntoView();
            break;
          case "setHeight":
            iframe.style.height = args[1] + "px";
            break;
          case "collapseErrorPage":
            if (iframe.clientHeight > window.innerHeight) {
              iframe.style.height = window.innerHeight + "px";
            }
            break;
          case "reloadPage":
            window.location.reload();
            break;
          case "loadScript":
            if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
            var src = args[1];
            if (args.length > 3) {
                src = args[1] + ':' + args[2];
            }
            var script = document.createElement('script');
            script.src = src;
            script.type = 'text/javascript';
            document.body.appendChild(script);
            break;
          case "exitFullscreen":
            if      (window.document.exitFullscreen)        window.document.exitFullscreen();
            else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
            else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
            else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
            else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
            break;
        }
        var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
        if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
          var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
          iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
        }
      };
      window.isPermitted = function(originUrl, whitelisted_domains) {
        var url = document.createElement('a');
        url.href = originUrl;
        var hostname = url.hostname;
        var result = false;
        if( typeof hostname !== 'undefined' ) {
          whitelisted_domains.forEach(function(element) {
              if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
                  result = true;
              }
          });
          return result;
        }
      };
      if (window.addEventListener) {
        window.addEventListener("message", handleIFrameMessage, false);
      } else if (window.attachEvent) {
        window.attachEvent("onmessage", handleIFrameMessage);
      }
</script>`}
              ></Script>
            </div>
          </div>
        </div>
        <Process rootClassName="process-root-class-name1"></Process>
        <Banner rootClassName="banner-root-class-name8"></Banner>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .order-rquest-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .order-rquest-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: none;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .order-rquest-title-wrap {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .order-rquest-text {
            width: 100%;
            font-size: 48px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
          }
          .order-rquest-code {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
          }
          .order-rquest-container1 {
            width: 100%;
            height: 100vh;
          }
          .order-rquest-container2 {
            display: contents;
          }
          @media (max-width: 1200px) {
            .order-rquest-text {
              font-size: 48px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
            }
            .order-rquest-container1 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .order-rquest-container1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .order-rquest-text {
              font-size: 30px;
            }
            .order-rquest-container1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .order-rquest-text {
              font-size: 25px;
            }
            .order-rquest-code {
              height: auto;
            }
            .order-rquest-container1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default OrderRquest
