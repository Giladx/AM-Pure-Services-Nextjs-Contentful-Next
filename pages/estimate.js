import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Estimate = (props) => {
  return (
    <>
      <div className="estimate-container">
        <Head>
          <title>
            Estimate - AM Pure Services | Airduct Cleaning | Drayer Vent
            Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Estimate - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <div className="estimate-container1">
          <div className="estimate-container2">
            <Script
              html={`  <iframe
id="JotFormIFrame-212754518132048"
title="Clone of AM Pure Services Job Contract part 1"
onload="window.parent.scrollTo(0,0)"
allowtransparency="true"
allowfullscreen="true"
allow="geolocation; microphone; camera"
src="https://form.jotform.com/212754518132048"
frameborder="0"
style="
min-width: 100%;
height:539px;
border:none;"
scrolling="no"
>
</iframe>
<script type="text/javascript">
var ifr = document.getElementById("JotFormIFrame-212754518132048");
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
</script>
`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="estimate-container4">
            <Script
              html={`<script language="JavaScript">
var passwordpg; 
var pass1="650ta"; 
passwordpg=prompt('Please enter your password to view this page!','!Hit Backspace Before You start writing the Password!'); 
if (passwordpg==pass1) 
alert('Correct Password! Click OK to Enter!'); 
else { window.location="/info";} 
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .estimate-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .estimate-container1 {
            width: 100%;
          }
          .estimate-container2 {
            display: contents;
          }
          .estimate-container4 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Estimate
