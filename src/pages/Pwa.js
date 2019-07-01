import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import scotpro from "../components/img/agriculture/tab.png"
import containerStyles from "../components/css/container.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Img from "gatsby-image"



const Product = ({ pageContext }) => (
 <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "iot_bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    
        placeholderImage1: file(relativePath: { eq: "tab-1.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        prods:iotJson(slug: { eq:"iot" }) {         
              imgs       
        }  
        imgs:iotJson(slug: { eq:"image" }) {         
         image1
         image2
         image3
         image4
        
       }  
       tabgrid:pardeepJson(slug: { eq:"tabsgrid" }) {             
        title
        subtitle
        param1
        param2   
        tab1     
      }  

      }
    `} 
   
    render={data=> <div>    
      <Header />
      <BackgroundImage fluid={data.placeholderImage.childImageSharp.fluid} style={{
        height:550,
      }} />
      <div className={containerStyles.heading}>
      <h1></h1>
      <h1></h1>
      <div><img src={data.prods.imgs}/></div>
      </div>     

      <div className="row">
      <div className="col-md-12">
        <div className="top-slider top-slider-progressiveweb-app-page d-flex">
          <div className="col-sm-12 col-md-4 offset-md-1 text-center text-sm-left text-white">
            <div className="banner-middle-container">
              <div className="banner-middle-container_text pt-5 font-weight-bold">Progressive</div>
              <div className="banner-middle-container_text-bold">Web Apps</div>
              <div className="banner-middle-container_text-small">
                <p>Nunc Systems creates web apps which are secure and fast loading web pages. Progressive web applications built by us
                ensure seamless performance, identical to that of native mobile application. With a goal to increase user engagement,
                Nunc Systems creates web apps that run faster across all platforms. We integrate unique features such as offline
                browsing, push notification, data analysis and easy distribution channels into web apps.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12  col-md-7 image_top">
            <img className="img-fluid" src="./img/progressive_web/header_img_1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 offset-md-2 mb-5">
        <h6 className="progresive-middle-text text-center font-weight-bold">Progressive Web Apps are now supported on the desktop!</h6>
        <div className="text-center"><p>Progrssive Web Apps are user experience that have the reach of web, and are:</p>

         <p>Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.</p>

         <p>Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.</p>

          Engaging - Feel like a natural app on the device, with an immersive user experience.

          <h5 className="mt-5 font-weight-bold progressive_line_height">This new level of quality allows Progressive Web Apps to earn a place on the user's  home screen</h5> 
        </div>

      </div>
    </div>

   
    <div className="row">
      <div className="col-md-12">
        <div className="row bg-light-gray">
          <div className="col-md-4 offset-md-2 col-sm-4 mt-5">
            <img src="./img/progressive_web/img_1.png" alt="" />
          </div>
          <div className="col-md-4 col-sm-8 mt-5">
            <div className="custom-header  h-space-3">
              <div className="custom-header--bold">Reliable</div>
            </div>
            <p className="text-container_body-text pb-5">
              Load fast and never show a website as being down, work even in offline mode on all browsers and all devices. The level
              of offline functionality will rely upon the application – a few of applications will certainly be able to work offline,
              while others will show meaningful placeholder data informing the user that they are offline. Target all your possible
              users with one platform and deliver a high-quality experience to every one of them.
            </p>

          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div className="row bg-white mt-5">
          <div className="col-md-4 offset-md-2 col-sm-8">
            <div className="custom-header h-space-3">
              <div className="custom-header--bold">Fast</div>
            </div>
            <p className="text-container_body-text mb-5">
            PWA adapts to different screen sizes and orientations, ensuring that the user experience is great for all users. Respond
            fast to user interactions and focus on lower bounce rates and rises the active users to your website. Give your clients
            the most ideal experience in the current web, less expensive than a native mobile app. A good responsive design helps to
            ensure that your application loads faster will continue to work with new devices in the future.
            </p>
          </div>
          <div className="col-md-4 col-sm-4"><img src="./img/progressive_web/img_2.png" alt="" /></div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div className="row bg-light-gray ">
          <div className="col-md-4 offset-md-2 col-sm-4 mt-5">
            <img src="./img/progressive_web/img_3.png" alt="" />
          </div>
          <div className="col-md-4 col-sm-8 mt-5">
            <div className="custom-header h-space-3">
              <div className="custom-header--bold">Engaging</div>
            </div>
            <p className="text-container_body-text mb-5">
Increase conversion by concentrating on native features of current web that you might not even be aware of.
Traditionally, native apps have been much more engaging than web apps. Feel like a natural app on the device, having an
icon on the home screen makes it easy to get into the app with great user experience. Benefit of push notifications and
offline storage can help alert the user of important information that requires their attention.
            </p>
          </div>
        </div>
      </div>
    </div>

   

    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="custom-header text-center h-space-4 mt-5">
          <span className="custom-header--bold">Benifts of Progressive Web Apps</span>
          <div className="custom-header--sub-text h-space-2 mt-3">
            <p>Progressive Web Apps have higer engagement and also focus on speed lowers bounce rates and increase the number of monthly active users. Give the best experience in the mordern web and also cost effective</p>
            <p>The best part about having Progressive Web Applications is it works fine even during the poor connection, on all devices
            and all browsers.
          </p>
          <p>Progressive Web Apps do not need specific installation and Increase conversion by focusing on native features of modern
          web.</p>
          </div>
        </div>
      </div>

       <hr />
      <div className="col-md-10 offset-md-2">

        <div className="row">
          <div className="flex-container-2 padding_5">
            <div className="flex-container-2_item-wrapper">
              <div className="flex-container-2_icon pb-3"><img src="./img/progressive_web/icon_1.png" alt="" /></div>
              <h5 className="flex-container-2_heading h-space-1 font-weight-bold">Home Screen Accessibility</h5>
             
            </div>
          </div>
          <div className="flex-container-2 padding_5">
            <div className="flex-container-2_item-wrapper">
              <div className="flex-container-2_icon pb-3"><img src="./img/progressive_web/icon_2.png" alt="" /></div>
              <h5 className="flex-container-2_heading h-space-1 font-weight-bold">Higher Conversion Rate</h5>
             
            </div>
          </div>
          <div className="flex-container-2 padding_5">
            <div className="flex-container-2_item-wrapper">
              <div className="flex-container-2_icon pb-3"><img src="./img/progressive_web/icon_3.png" alt="" /></div>
              <h5 className="flex-container-2_heading h-space-1 font-weight-bold">Overcome Network Issues</h5>
            
            </div>
          </div>
          <div className="flex-container-2 padding_5">
            <div className="flex-container-2_item-wrapper">
              <div className="flex-container-2_icon pb-3"><img src="./img/progressive_web/icon_4.png" alt="" /></div>
              <h5 className="flex-container-2_heading h-space-1 font-weight-bold">No App Store Hassels</h5>
             
            </div>
          </div>
          
        </div>
      </div>
    </div>



    <div className="row mb-5">
      <div className="col-lg-8 offset-lg-2 text-center h-space-5">
        <div className="custom-header mt-5 text-center h-space-1">
          <span className="custom-header--bold text-uppercase font-weight-bold">got an Idea ?</span>
        </div>
        <h5 className="h-space-2">Let us help you transform your thought into a real-time application</h5>
        <button className="btn btn-default custom-btn custom-btn--with-bg mt-5 text-uppercase">Get a Quote</button>
      </div>
    </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product