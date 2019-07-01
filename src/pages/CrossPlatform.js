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

      <div className="row top-slider-crossplatform-page">
            <div className="col-md-6 offset-md-3 mt-top-cp">
                <h4 className="custom-header custom-header--bold text-white h-space-1 text-center">Cross Platform</h4>
                <div className="d-flex justify-content-center"><span className="custom-h-bar  "></span></div>

                <h5 className="text-center font-weight-bold text-white mt-3">Allows Users to Enjoy App on Any Device</h5>
                <div className="text-center text-white">With the increase use of the smartphone in the industry, businesses need technologies that offer “one-code-fits-all”
                facility. Cross-platform application development is often a good way to achieve this requirement. We at Nunc Systems
                develop mobile applications which run on all major platforms such as iOS, Android, Windows and save your time & cost.</div>                         
            </div>
        </div>

        <div className="row bg-light-gray">
            <div className="col-md-8 offset-md-2 mb-5 mt-5">
                <div className="text-center">
                    Cross-platform application development is often  a good way to achieve this requirment.<br />
                    We at Nunc Systems develop mobile applications which run on all major platforms such as iOS,Android,Windows and save your time and cost.
                </div>
            </div>
        </div>


        <div className="row bg-light-gray">
            <div className="col-md-8 offset-md-2">

                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper cp p-4">
                            <div className="flex-container-2_icon">
                                <img className="mb-3" src="./img/cross_plotform/img_1.png" alt="" />
                                <h5 className="flex-container-2_heading h-space-1 font-weight-bold">Consulting
                                </h5>
                            </div>  
                        </div>
                        <div className="flex-container-2_text mt-5">We offer top-class consultancy to educate, entertain and market a brand</div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper cp p-4">
                            <div className="flex-container-2_icon">
                                <img className="mb-3" src="./img/cross_plotform/img_2.png" alt="" />
                                <h5 className="flex-container-2_heading h-space-1 font-weight-bold">Strategy
                                </h5>
                            </div>
                        </div>
                        <div className="flex-container-2_text mt-5">Our  strategy ecperts helps in making an effective strategy for the growth of your mobile business </div>
                    </div>
                <div className="col-sm-12 col-md-4 col-lg-4 flex-container-2 h-space-1">
                    <div className="flex-container-2_item-wrapper cp p-4">
                        <div className="flex-container-2_icon">
                            <img className="mb-3" src="./img/cross_plotform/img_3.png" alt="" />
                            <h5 className="flex-container-2_heading h-space-1 font-weight-bold">App Development
                            </h5>
                        </div>
                    </div>
                    <div className="flex-container-2_text mt-5">Your expert team will make a  striking design and user experience within proposed time</div>
                </div>

                </div>
            </div>
        </div>

    <div className="row bg-light-gray">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-10 offset-xl-1 mt-5">
            <div className="custom-header text-center h-space-2">
                <span className="custom-header--font-24 font-weight-bold">Technologies We Use</span>
            </div>
        </div>
    
        <div className="col-md-8 offset-md-2 col-12 pb-5">
            <div className="development-box bg-white">
                <div className="development-box_icon">
                    <img src="./img/cross_plotform/1.png" />
                </div>
                <div className="development-box_icon">
                    <img src="./img/cross_plotform/2.png" />
                </div>
                <div className="development-box_icon">
                    <img src="./img/cross_plotform/3.png" />
                </div>
                <div className="development-box_icon">
                    <img src="./img/cross_plotform/4.png" />
                </div>
                <div className="development-box_icon">
                    <img src="./img/cross_plotform/5.png" />
                </div>
             
            </div>
        </div>
    </div>

      
       
      

        <div className="row bg-light-gray">
            <div className="col-lg-8 offset-lg-2 text-center h-space-5">
                <div className="custom-header mt-5 text-center h-space-5">
                    <h5 className="custom-header--bold text-uppercase"> have a cross paltform requriment?</h5>
                </div>

                <button className="btn btn-default custom-btn custom-btn--with-bg text-uppercase">GET A quote</button>
            </div>
        </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product