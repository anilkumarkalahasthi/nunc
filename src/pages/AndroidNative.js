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

      <div className="row bg-light-gray">
      <div className="col-md-6 offset-md-3 mb-5">
        <div className="middle-text text-center middle-text_padding-bottom-5">Android App Development at its best</div>
        <div className="text-center">We develop advanced and innovative android applications with great user
          experience to accomplish all your business needs.</div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div className="row bg-light-gray">
          <div className="col-md-4 offset-md-2 col-sm-4">
            <img src="./img/android-native/approach.png" alt="" />
          </div>
          <div className="col-md-4 col-sm-8">
            <div className="custom-header  h-space-3">
              <div className="custom-header--bold">Approach</div>
            </div>
            <p className="text-container_body-text pb-5">
              We plan an early model or design to check the feasibility of the project and also to include the
              additional valued viewpoint of the client. Once deciding the essential layout, we start adding and
              implementing the animations and interactions by using apps such as Framer, Origami, etc. We try to
              add life to the jumbled design within the most inventive manner potential to boost user interaction.
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
              <div className="custom-header--bold">User Interface Designs</div>
            </div>
            <p className="text-container_body-text mb-5">
              We plan an early model or design to check the feasibility of the project and also to include
              the additional valued viewpoint of the client. Once deciding the essential layout, we start
              adding and implementing the animations and interactions by using apps such as Framer, Origami,
              etc. We try to add life to the jumbled design within the most inventive manner potential to boost 
              user interaction.
            </p>
          </div>
          <div className="col-md-4 col-sm-4"><img src="./img/android-native/user_interface.png" alt="" /></div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div className="row bg-light-gray">
          <div className="col-md-4 offset-md-2 col-sm-4 mt-5">
            <img src="./img/android-native/development.png" alt="" />
          </div>
          <div className="col-md-4 col-sm-8 mt-5">
            <div className="custom-header h-space-3">
              <div className="custom-header--bold">Development</div>
            </div>
            <p className="text-container_body-text mb-5">
              Our Developers are passionate who just know well, when where and how to give a twist to the
              design in order to reach the client’s prospects. Our developers get themselves trained in
              various languages to increase the efficiency of your project and aids you meet your customers’
              expectations.
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
              <div className="custom-header--bold">TESTING</div>
            </div>
            <p className="text-container_body-text mb-5">
              Our Developers are passionate who just know well, when where and how to give a twist to the
              design in order to reach the client’s prospects. Our developers get themselves trained in
              various languages to increase the efficiency of your project and aids you meet your customers’
              expectations.
            </p>
          </div>
          <div className="col-md-4 col-sm-4"><img src="./img/android-native/testing.png" alt="" /></div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div className="row bg-light-gray">
          <div className="col-md-4 offset-md-2 col-sm-4 mt-5"><img src="./img/android-native/delivery.png" alt="" /></div>
          <div className="col-md-4 col-sm-8 mt-5">
            <div className="custom-header h-space-3">
              <div className="custom-header--bold">DELIVERY</div>
            </div>
            <p className="text-container_body-text mb-5">
            We value the time, hence never fail to deliver our quality product to our client on time. We include our client at every
            stage of development to have straightforwardness and least mistake. Therefore, we save our time as we lessen risk at the
            early stages of development.
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="custom-header text-center h-space-4 mt-5">
          <span className="custom-header--bold text-uppercase mb-2">Tools & technologies</span>
          <div className="custom-header--sub-text h-space-2">Our Developers are passionate
            who just know well, when where and how to give a twist to the design in
            order to reach the client’s prospects. Our developers get themselves trained in
            various languages to increase the efficiency of your project and aids you meet your customers’
            expectations.</div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 pb-5">

        <div className="row">
          <div className="flex-container-2 padding_5">
            <div className="flex-container-2_item-wrapper">
              <div className="flex-container-2_icon pb-3"><img src="./img/ios_native/frame_works.png" alt="" /></div>
              <h5 className="flex-container-2_heading h-space-1 font-weight-bold text-uppercase">Frameworks</h5>
              <div className="flex-container-2_text">
                Use cases, Technology & Strategy</div>
            </div>
          </div>
          <div className="flex-container-2 padding_5">
            <div className="flex-container-2_item-wrapper">
              <div className="flex-container-2_icon pb-3"><img src="img/ios_native/platforms.png" alt="" /></div>
              <h5 className="flex-container-2_heading h-space-1 font-weight-bold text-uppercase">Platforms</h5>
              <div className="flex-container-2_text">UI/Wireframing POC/Prototyping</div>
            </div>
          </div>
          <div className="flex-container-2 padding_5">
            <div className="flex-container-2_item-wrapper">
              <div className="flex-container-2_icon pb-3"><img src="img/ios_native/versions.png" alt="" /></div>
              <h5 className="flex-container-2_heading h-space-1 font-weight-bold text-uppercase">versions</h5>
              <div className="flex-container-2_text">Performance & Usability, Security & Network Response. Platforms,
                Device</div>
            </div>
          </div>
          <div className="flex-container-2 padding_5">
            <div className="flex-container-2_item-wrapper">
              <div className="flex-container-2_icon pb-3"><img src="img/ios_native/language.png" alt="" /></div>
              <h5 className="flex-container-2_heading h-space-1 font-weight-bold text-uppercase">Language</h5>
              <div className="flex-container-2_text">Executing test cases, Verifing the result as pass or fail</div>
            </div>
          </div>
          <div className="flex-container-2 padding_5">
            <div className="flex-container-2_item-wrapper">
              <div className="flex-container-2_icon pb-3"><img src="img/ios_native/development_tools.png" alt="" /></div>
              <h5 className="flex-container-2_heading h-space-1 font-weight-bold text-uppercase">development tools</h5>
              <div className="flex-container-2_text">Deploy & Maintain</div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="row case-study bg-light-gray pb-5">
      <div className="col-md-10 offset-md-1">
        <div className="custom-header text-uppercase mt-5 text-center text-md-left">
          <span className="custom-header--bold custom-header--font-24 pl-md-4">Our Portfolio</span>
        </div>
      </div>
      <div className="col-md-12">
        <section className="responsive case-study-slider">
          <div className="image-container">
            <img src="./img/common/case_studies_img1.png" />
            <h2 className="text-center image-title">smart toolkit</h2>
          </div>
          <div className="image-container">
            <img src="./img/common/case_studies_img2.png" />
            <h2 className="text-center image-title">Scout Pro</h2>
          </div>
          <div className="image-container">
            <img src="./img/common/case_studies_img3.png" />
            <h2 className="text-center image-title">shoptmize</h2>
          </div>
          <div className="image-container">
            <img src="./img/common/case_studies_img4.png" />
            <h2 className="text-center image-title">smart toolkit</h2>
          </div>
          <div className="image-container">
            <img src="./img/common/case_studies_img1.png" />
            <h2 className="text-center image-title">smart toolkit</h2>
          </div>
          <div className="image-container">
            <img src="./img/common/case_studies_img2.png" />
            <h2 className="text-center image-title">smart toolkit</h2>
          </div>
        </section>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div className="row android-native-application-bg">
          <div className="col-lg-4 offset-lg-1 col-md-6 offset-md-1">
            <div className="custom-header custom-header--padding-top h-space-3">
              <div className="custom-header--bold text-uppercase">Top-Notch Applications for entire Android Platforms</div>
            </div>
            <p className="text-container_body-text h-space-2">
              With the embracing of the current technologies, we ensure that our iOS application
              becomes a business-ready solution that meets quality standards. Being a mobile
              application development company, we have an experienced team of iPhone developers
              who can set your application for success hence you can outstrip your competitors.
            </p>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>



    <div className="row bg-light-gray advertisement-box">
      <div className="col-md-6 offset-md-3 mb-4">
        <div className="custom-header--padding-top custom-header--font-24 font-weight-bold text-center">Don’t take our word
          for it.
          Take theirs....</div>
      </div>
      <div className="col-lg-8 offset-lg-2 mb-4">
        <div className="row bg-gray shadow">
          <div className="col-sm-4 col-md-3 advertisement-box_inner-div">
            <img className="advertisement-box_image" src="img/amazon-logo.png" alt="" />
          </div>
          <div className="col-sm-8 col-md-9 advertisement-box_inner-div curved-bg bg-white">
            <div className="row">
              <div className="col-md-8 offset-md-3">

                <div className="advertisement-box_heading h-space-1">
                  Top-Notch Applications
                  for entire iOS Platforms
                </div>
                <div className="advertisement-box_text">
                  With the embracing of the current technologies, we ensure that our iOS application
                  becomes a business-ready solution that meets quality standards. Being a mobile
                  application development company,
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="col-lg-8 offset-lg-2">
        <div className="row h-space-5">
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 h-space-1">
            <div className="iocns-box">
              <img className="iocns-box_image" src="img/amazon-logo.png" alt="" />
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 h-space-1">
            <div className="iocns-box">
              <img className="iocns-box_image" src="img/amazon-logo.png" alt="" />
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 h-space-1">
            <div className="iocns-box">
              <img className="iocns-box_image" src="img/amazon-logo.png" alt="" />
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 h-space-1">
            <div className="iocns-box">
              <img className="iocns-box_image" src="img/amazon-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>


    <div className="row">
      <div className="col-lg-8 offset-lg-2 text-center h-space-5">
        <div className="custom-header mt-5 text-center h-space-1">
          <span className="custom-header--bold text-uppercase">got an Idea ?</span>
        </div>
        <div className="career-div_body h-space-2">NUNC Systems is an established Software development company that works
          with Enterprise systems and companies. As a privately-owned company</div>
        <button className="btn btn-default custom-btn custom-btn--with-bg">Get Estimation</button>
      </div>
    </div>

    
      <Footer />
    </div>}  
  /> 
 
)

export default Product