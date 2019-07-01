import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import scotpro from "../components/img/agriculture/tab.png"
import containerStyles from "../components/css/container.module.css"

//import tab1 from "../images/tab-1.png"

import 'bootstrap/dist/css/bootstrap.min.css'
import Img from "gatsby-image"
//import containerStyles from "../components/css/container.module.css"


const Product = ({ pageContext }) => (
 <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg.jpg" }) {
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
        staff:staffaugmentationJson(slug: { eq:"sa" }) {         
          image1
          image2  
          image3
          icon1
          icon2
          icon3
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
        height:600,
      }} />
      <div className={containerStyles.heading}>
      <h1>Staff Agumentation</h1>
      <p>Our It Staffing team specializes in providing on-site, high caliber motivated IT professionals for temporary.</p>
      {/* <div><img src={scotpro}/></div> */}
      </div>
      <div className="row top-slider_staff-agumentation-page">
              <div className="col-md-6 offset-md-3 mb-5">
               <div className="staff_agumentation_text_middle">
                  <div className="middle-text text-white text-center font-weight-bold">Staff Agumentation</div>
                  <div className="text-center text-white">Our It Staffing team specializes in providing on-site, high caliber motivated IT professionals for temporary.</div>
               </div>  
             </div>
          </div>

          <div className="row bg-white  pt-5">
            <div className="col-md-8 offset-md-2">
              <div className="row bg-white mb-5">
                <div className="col-md-6  col-sm-8">
                  <div className="custom-header h-space-3">
                    <div className="custom-header--bold">Our Services</div>

                  </div>
                   <p className="font-weight-bold">Ensure that you focus on your core bussiness while we do rest</p>
                  <p className="text-container_body-text mb-5">
                    Our Developers are passionate who just know well, when where and how to give a twist to the
                    design in order to reach the client’s prospects. Our developers get themselves trained in
                    various languages to increase the efficiency of your project and aids you meet your customers’
                    expectations.
                  </p>
                  <div className="d-flex justify-content-around">
                    <img src={data.staff.image1} alt="24*7" />
                   
                  </div>
                  </div>
                  <div className="col-md-5 col-sm-4">
                    <div className="d-flex align-items-center">
                      <img src={data.staff.image3} alt="" />
                      <h6 className="font-weight-bold ml-4">Adapt to change market conditions</h6>
                    </div>
                    <div className="d-flex align-items-center ">
                      <img src={data.staff.image3} alt="" />
                      <h6 className="font-weight-bold ml-4">Innovate Continuously</h6>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={data.staff.image3} alt="" />
                      <h6 className="font-weight-bold ml-4">Align It with business goals</h6>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={data.staff.image3} alt="" />
                      <h6 className="font-weight-bold ml-4">Optimize cost, while maintaning high customer satisfaction</h6>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={data.staff.image3} alt="" />
                      <h6 className="font-weight-bold ml-4">Accelerate time-to-market for new products and services</h6>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={data.staff.image3} alt="" />
                      <h6 className="font-weight-bold ml-4">Meet industry standards and complanices requirements</h6>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={data.staff.image3} alt="" />
                      <h6 className="font-weight-bold ml-4">Leverage emerging technologies effectively</h6>
                    </div>
                  </div>
              </div>
            </div>        
          </div>
          
          <div className="row bg-gray">
              <div className="col-md-6 offset-md-3">                 
                <div className={containerStyles.custom_header+' '+"text-center h-space-4 mt-5"}>
                    <span className="custom-header--bold">Our Services</span>                    
                </div>            
              </div>
              <div className="col-md-8 offset-md-2 h-space-8">
                
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon h-space-3">
                          <img src={data.staff.icon1} alt="" /></div>
                          <h5 className="h-space-1 font-weight-bold">CONTRACTING</h5>
                          <div className="flex-container-2_text mt-4">NUNC supports your internal staff with short or long term resources specializinz in the technology. Business area, or role needed.</div>
                           
                        </div>
                        <div className="d-flex justify-content-around align-items-center flex-container-2_item-wrapper">
                            <img src="img/staff-augmentation/down_arrow.png" alt="" />
                            <h5 className="font-weight-bold">Know More</h5>
                          </div>
                         
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 flex-container-2 h-space-1">
                      <div className="flex-container-2_item-wrapper">
                        <div className="flex-container-2_icon h-space-3"><img src={data.staff.icon2} alt="" /></div>
                        <h5 className="h-space-1 font-weight-bold">DIRECT HIRE</h5>
                        <div className="flex-container-2_text mt-4">With the intent of hiring an individual as your employee after a pre-determined peroid, NUNC will source,recruit and
                        on-board the desired.</div>
                    
                      </div>
                      <div className="d-flex justify-content-around align-items-center flex-container-2_item-wrapper">
                        <img src="img/staff-augmentation/down_arrow.png" alt="" />
                        <h5 className="font-weight-bold">Know More</h5>
                      </div>
                    
                    </div>
                  
                    <div className="col-sm-12 col-md-4 col-lg-4 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon h-space-3"><img src={data.staff.icon3} alt="" /></div>
                          <h5 className="h-space-1 font-weight-bold">CONTACT-TO-HIRE</h5>
                          <div className="flex-container-2_text mt-4">NUNC supports the hiring needs of companies that prefer to hire individuals to be part of their team from the begining .</div>
                         
                        </div>
                        <div className="d-flex justify-content-around align-items-center flex-container-2_item-wrapper">
                            <img src="img/staff-augmentation/down_arrow.png" alt="" />
                            <h5 className="font-weight-bold">Know More</h5>
                          </div>
                       
                    </div>
                </div>
              </div>
          </div>
    
      <Footer />
    </div>}  
  /> 
 
)                            

export default Product