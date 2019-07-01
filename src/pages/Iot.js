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

        <div className="row bg-white">
            <div className="col-md-8 offset-md-2">
              <div className="row bg-white mb-5">
                <div className="col-md-6 col-sm-8">
                  <div className="custom-header h-space-3">
                    <div className="custom-header--bold mt-5">Why do <div>we need IoT?</div></div>

                  </div>
                  
                  <p className="text-container_body-text mb-5">
                    Our Developers are passionate who just know well, when where and how to give a twist to the
                    design in order to reach the client’s prospects. Our developers get themselves trained in
                    various languages to increase the efficiency of your project and aids you meet your customers’
                    expectations.
                  </p>
                 
                  </div>
                  <div className="col-md-6 col-sm-4"><img className="iot-secong-header image-fluid" src={data.imgs.image1} alt="" />
                  </div>
              </div>
            </div>        
          </div>

          <div className={containerStyles.bg_gray+' '+"row"}>
             <div className={containerStyles.iot_mr+' '+"col-md-8 col-sm-10 offset-sm-1 offset-md-2"}>
              <div className={containerStyles.iot+' '+"row bg-white mb-4"}>
                
                <div className="col-lg-6 mt-5">
                   <img src={data.imgs.image2} alt="" className="mb-5" />
                </div>
                <div className="col-lg-6 mt-5">
                   <div className="custom-header h-space-3">
                    <h1 className="custom_header_bold">Scope of IoT?</h1>

                  </div>

                   <div className="d-flex align-items-center">
                       <img src={data.imgs.image3} alt="" />
                        <h6 className="font-weight-bold ml-4">Adapt to change market conditions</h6>
                   </div>

                   <div className="d-flex align-items-center">
                       <img src={data.imgs.image3} alt="" />
                        <h6 className="font-weight-bold ml-4">Adapt to change market conditions</h6>
                   </div>

                   <div className="d-flex align-items-center">
                       <img src={data.imgs.image3} alt="" />
                        <h6 className="font-weight-bold ml-4">Adapt to change market conditions</h6>
                   </div>
                   <div className="d-flex align-items-center">
                       <img src={data.imgs.image3} alt="" />
                        <h6 className="font-weight-bold ml-4">Adapt to change market conditions</h6>
                   </div>

                </div>
               
              </div>
            </div>
          </div>
          
          <div className="row bg-gray">
            
             
              <div className="col-md-8 offset-md-2 h-space-8 mt-5">
                
                <div className="row  mb-5">
                <div className="col-md-6 col-sm-8">
                  <div className="custom-header h-space-3">
                    <h1 className={containerStyles.custom_header_bold}>How IoT can help?</h1>

                  </div>
                 
                  <p className="text-container_body-text mb-5">
                    Our Developers are passionate who just know well, when where and how to give a twist to the
                    design in order to reach the client’s prospects. Our developers get themselves trained in
                    various languages to increase the efficiency of your project and aids you meet your customers’
                    expectations.
                  </p>
                 
                  </div>
                  <div className="col-md-6 col-sm-4"><img src={data.imgs.image4} alt="" />
                  </div>
              </div>
              </div>
          </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product