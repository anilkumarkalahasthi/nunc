import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
//import scotpro from "../components/img/agriculture/tab.png"
import containerStyles from "../components/css/container.module.css"

//import tab1 from "../images/tab-1.png"

import 'bootstrap/dist/css/bootstrap.min.css'
import Img from "gatsby-image"
//import containerStyles from "../components/css/container.module.css"


const Product = ({ pageContext }) => (
 <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "header_bg.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    
        placeholderImage1: file(relativePath: { eq: "car.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subimage:automotiveJson(slug: { eq:"automotive" }) {         
              img1
                 
        }  
        sideimg:automotiveJson(slug: { eq:"sideimages" }) {         
       icon1
       icon2
       icon3
       icon4
       icon5
       img1
       img2
       img3
       img4
       img5
       img6
       test 
       mail_us   
       mobi_screen 
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
        height:500,
      }} />
      <div className={containerStyles.heading}>
    
      <div><img src={data.subimage.img1} /></div>
      <div className="col-md-6 text-center">
      <h1>Mobile application for car dealers</h1>
      <p>With great experience in mobile and web technologies, Nunc has been assisting retailers wishing to sell their produts and services online. NUNC offers a full-fledged range of m-commerce and e-commerce development services</p>
      </div>
      </div>
      <div className="row  bg-light-gray custom-header--padding-top">
            <div className="col-md-6 offset-md-3 mb-5">
                <div className="text-center mt-3">
                </div>
                <div className="text-center mt-3">
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 offset-md-3 mb-5">
               
                <div className="middle-text text-center middle-text_padding-bottom-5">SMART TOOL KIT FOR SMART MANAGEMENT
        
                </div>
                <div className="text-center">With great experience in mobile and web technologies, Nunc has been assisting
                    retailers
                    wishing to sell their produts and services online. NUNC offers a full-fledged range of m-commerce and
                    e-commerce development services</div>
            </div>
        </div>

      


        <div className="row">
            <div className="col-md-8 offset-md-2">

                <div className="row">
                    <div className="flex-container-2 col-md-4">
                        <div className="flex-container-2_item-wrapper">
                            <div className="flex-container-2_icon pb-3"><img src={data.sideimg.img1} alt="" />
                            </div>
                            <h5 className="flex-container-2_heading h-space-1 font-weight-bold">Increase Efficency</h5>

                        </div>
                    </div>
                    <div className="flex-container-2 col-md-4">
                        <div className="flex-container-2_item-wrapper">
                            <div className="flex-container-2_icon pb-3"><img src={data.sideimg.img2} alt="" />
                            </div>
                            <h5 className="flex-container-2_heading h-space-1 font-weight-bold">Add value to your service</h5>

                        </div>
                    </div>
                    <div className="flex-container-2 col-md-4">
                        <div className="flex-container-2_item-wrapper">
                            <div className="flex-container-2_icon pb-3"><img src={data.sideimg.img3} alt="" /></div>
                            <h5 className="flex-container-2_heading h-space-1 font-weight-bold">Increase Sales</h5>

                        </div>
                    </div>
                   

                </div>
            </div>
        </div>

        <div className="row">
                    <div className="col-md-8 col-sm-10 offset-sm-1 offset-md-2 mt-5">
                        <div className="row big_data_border_radius bg-white mb-4">
        
                            <div className="col-lg-6 mt-5">
                                <img src={data.sideimg.test} alt="" />
                            </div>
                            <div className="col-lg-6 mt-5">
                                <div className="custom-header h-space-3">
                                    <h5 className="custom-header--bold">How it Helps?</h5>
        
                                </div>
                                <p>
                                    We develop advanced and innovative android applications with great user
                                    experience to accomplish all your business needs
                                    We develop advanced and innovative android applications with great user
                                    experience to accomplish all your business needs
                                </p>
        
                               
                                <div className="d-flex align-items-center">
                                    <img src={data.sideimg.mail_us} alt="" />
                                    <h6 className="font-weight-bold ml-4">Know More</h6>
                                </div>
        
                            </div>
        
                        </div>
                    </div>
                </div>


    <div className="row bg-light-gray automotive_margintop">
        <div className="col-md-10 offset-md-1 custom-header--padding-top">
            <div className="text-center mt-5 mb-5">
                <h5 className="custom-header--bold">Features We Have</h5>
            </div>
            <div className="row">
               
                <div className="col-md-4">
                    <div className="flex-container_item-wrapper">
                        <div className="flex-container_text text-right font-weight-bold">
                            <h6 className="font-weight-bold">Store Page</h6>
                            <p>We develop advanced and innovative android applications with great user
                                experience to accomplish all your business needs</p>
                        </div>
                        <div className=" ml-3"><img src={data.sideimg.icon1} alt=""
                                className="mt-3" /></div>
                    </div>
    
                    <div className="flex-container_item-wrapper">
                        <div className="flex-container_text text-right font-weight-bold">
                            <h6 className="font-weight-bold">Push Notifictons</h6>
                            We develop advanced and innovative android applications
                            with great user
                            experience to accomplish all your business needs
                        </div>
                        <div className="ml-3"><img src={data.sideimg.icon3} alt=""
                                className="mt-3" /></div>
                    </div>
    
                    <div className="flex-container_item-wrapper">
                        <div className="flex-container_text text-right font-weight-bold">
                            <h6 className="font-weight-bold">Loyalty Card</h6>
                            We develop advanced and innovative android applications
                            with great user
                            experience to accomplish all your business needs
                        </div>
                        <div className=" ml-3"><img src={data.sideimg.icon4} alt=""
                                className="mt-3" /></div>
                    </div>
    
                </div>
                <div className="col-md-4">
                    <img src={data.sideimg.mobi_screen} alt="" />
                </div>
                <div className="col-md-4">
                    <div className="flex-container_item-wrapper">
                        <div className=" mr-3"><img src={data.sideimg.icon2} alt=""
                                className="mt-3" /></div>
                        <div className="flex-container_text text-right font-weight-bold">
                            <h6 className="font-weight-bold text-lg-left">Social Intergation</h6>
                            <p className="text-lg-left"> We develop advanced and innovative android applications
                                with great user
                                experience to accomplish all your business needs</p>
                        </div>
                    </div>
    
                    <div className="flex-container_item-wrapper">
                        <div className="mr-3"><img src={data.sideimg.icon2} alt=""
                                className="mt-3" /></div>
                        <div className="flex-container_text text-right font-weight-bold">
                            <h6 className="font-weight-bold text-lg-left">Bulk Product Listing</h6>
                            <p className="text-lg-left"> We develop advanced and innovative android applications
                                with great user
                                experience to accomplish all your business needs</p>
                        </div>
                    </div>
    
                </div>
            </div>
    
        </div>
    
    
    </div>

        <div className="row bg-white  pt-5 ">
            <div className="col-md-8 offset-md-2  ">
                <div className="row bg-white">
                    <div className="col-md-6"><img src={data.sideimg.img5} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="custom-header h-space-3">
                            <h5 className="custom-header--bold">Book Your car service Fast and  Easily</h5>
                        
                        </div>
                        <p>we develop advanced and innovative android applications
                        with great user
                        experience to accomplish all your business needs
                    we develop advanced and innovative android applications
                    with great user
                    experience to accomplish all your business needs</p>
                       
                            <div className="d-flex align-items-center">
                                <img src="img/automotive/down_arrow.png" alt="" />
                                <h6 className="font-weight-bold ml-4">Know More</h6>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
      
        <div className="row bg-white  pt-5 ">
            <div className="col-md-8 offset-md-2  ">
                <div className="row bg-white">
                   
                    <div className="col-md-6">
                        <div className="custom-header h-space-3">
                            <h5 className="custom-header--bold">Virtual Showroom</h5>
                        </div>
                        <p>
                            we develop advanced and innovative android applications
                            with great user
                            experience to accomplish all your business needs
                            we develop advanced and innovative android applications
                            with great user
                            experience to accomplish all your business needs
                        </p>
        
                            
                            <div className="d-flex align-items-center">
                                <img src="img/automotive/down_arrow.png" alt="" />
                                <h6 className="font-weight-bold ml-4">Know More</h6>
                            </div>
        
        
                        </div>
                    
                    <div className="col-md-6"><img src={data.sideimg.img6} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center mb-5">
                <div className="custom-header mt-5 text-center h-space-1">
                    <h5 className="custom-header--bold">For Easy Assistance</h5>
                </div>
               
                <button className="btn btn-default custom-btn custom-btn--with-bg">Please Contact US</button>
            </div>
        </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product