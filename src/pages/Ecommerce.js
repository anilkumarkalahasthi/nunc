import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import containerStyles from "../components/css/container.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Img from "gatsby-image"



const Product = ({ pageContext }) => (
 <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "header_bg1.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    
        placeholderImage1: file(relativePath: { eq: "bg_1.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        prods:pardeepJson(slug: { eq:"agriculture" }) {         
              maintitle
              param1
              param2  
              backgroundimage       
        }  
        sideimg:ecommerceJson(slug: { eq:"sideimages" }) {         
         image1
         image2 
         image3
         image4
         image5
         bicon  
         icon1 
         icon2
         icon3
         icon4 
         icon5
         icon6
         icon7
         icon8
         icon9
         icon10
         icon11
         img1
         img2
         img3
       }  
      }
    `} 
   
    render={data=> <div>    
      <Header />
      <BackgroundImage fluid={data.placeholderImage.childImageSharp.fluid} style={{
        height:470,
      }} />
      <div className={containerStyles.heading}>
      <h1>Meet Your Customers on the go</h1>
    
      {/* <div><img src={scotpro}/></div> */}
      </div>
      <div className="row  bg-light-gray mt-5">
            <div className="col-md-10 offset-md-1 mb-5">
                <div className="middle-text text-center middle-text_padding-bottom-5">Launch Mobile Application for E-Commerce and Start Selling More
                </div>
                <div className="text-center mt-3">
                     <p>Shifting of focus from more conventional trade paradigms to internet-based business dealings has prompted the approach
                    of online business. Electronic Commerce or more commonly eCommerce is the process of conducting business over the
                    internet. It’s not just restricted to providing a platform for buying and selling rather it covers the entire range of
                    activities involved in a business transaction, starting from the online process of developing, marketing, selling,
                    delivering, servicing and paying for products and services. At Nunc Systems we have been working on eCommerce
                    applications for the last 9 years and have built systems which are secure, reliable and easy to use.</p>

                    <p>The smartphones has become one of the newest revolutions in the IT industry. Like every domain, the e-Commerce industry
                    too leverage this emerging revolution. And, that's where m-commerce steps-in. Today m-commerce is a popular term for
                    “online shopping with Smartphones”. M-Commerce is gaining popularity because customers are more likely to shop through
                    their mobile devices.</p>
                </div>
            </div>
        </div>

            <div className="row">
                <div className="col-md-6 offset-md-3 mb-5">
                    <div className="middle-text text-center middle-text_padding-bottom-5">E-Commerce APP Bulider
                        
                    </div>
                    <div className="text-center">With great experience in mobile and web technologies, Nunc has been assisting retailers wishing to sell their products
                    and services online. NUNC offers a full-fledged range of m-Commerce and e-Commerce development services. Our expertise
                    allows us to deliver web platforms, mobile applications and mobile websites that work across a variety of platforms. </div>
                </div>
            </div>

        <div className="row">
            <div className="col-md-12 mt-5">  
                <div className="row bg-white">
                    <div className="col-md-10 offset-md-1">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="flex-container_item-wrapper bg-white border-radius_6">
                                    <div className="flex-container_text text-right font-weight-bold">
                                        <h6 className="font-weight-bold">Store Page</h6>
                                        <p>We develop advanced and innovative android applications with great user
                                    experience to accomplish all your business needs</p></div>
                                    <div className="flex-container_icon_ecommerce ml-3"><img src={data.sideimg.bicon} alt="" className="mt-3" /></div>
                                </div>

                             

                                <div className="flex-container_item-wrapper bg-white border-radius_6">
                                    <div className="flex-container_text text-right font-weight-bold">
                                        <h6 className="font-weight-bold">Push Notifictons</h6>
                                        We develop advanced and innovative android applications
                                        with great user
                                        experience to accomplish all your business needs</div>
                                    <div className="flex-container_icon_ecommerce ml-3"><img src={data.sideimg.bicon} alt="" className="mt-3" /></div>
                                </div>

                                <div className="flex-container_item-wrapper bg-white border-radius_6">
                                    <div className="flex-container_text text-right font-weight-bold">
                                        <h6 className="font-weight-bold">Loyalty Card</h6>
                                        We develop advanced and innovative android applications
                                        with great user
                                        experience to accomplish all your business needs</div>
                                    <div className="flex-container_icon_ecommerce ml-3"><img src={data.sideimg.bicon} alt="" class="mt-3" /></div>
                                </div>
                                
                            </div>
                            <div className="col-md-4">
                                <img src={data.sideimg.image1} alt="" />
                            </div>
                            <div className="col-md-4">
                                <div className="flex-container_item-wrapper bg-white border-radius_6">
                                    <div className="flex-container_icon_ecommerce mr-3"><img src={data.sideimg.bicon} alt="" className="mt-3" /></div>
                                    <div className="flex-container_text text-right font-weight-bold">
                                        <h6 className="font-weight-bold text-lg-left">Social Intergation</h6>
                                    <p className="text-lg-left"> We develop advanced and innovative android applications
                                        with great user
                                        experience to accomplish all your business needs</p></div>
                                </div>
                              

                                <div className="flex-container_item-wrapper bg-white border-radius_6">
                                    <div className="flex-container_icon_ecommerce mr-3"><img src={data.sideimg.bicon} alt="" className="mt-3" /></div>
                                    <div className="flex-container_text text-right font-weight-bold">
                                        <h6 className="font-weight-bold text-lg-left">Bulk Product Listing</h6>
                                    <p className="text-lg-left"> We develop advanced and innovative android applications
                                        with great user
                                        experience to accomplish all your business needs</p></div>
                                </div>

                                <div className="flex-container_item-wrapper bg-white border-radius_6">
                                    <div className="flex-container_icon_ecommerce mr-3"><img src={data.sideimg.bicon} alt="" className="mt-3" /></div>
                                    <div className="flex-container_text text-right font-weight-bold">
                                        <h6 className="font-weight-bold text-lg-left">Multi-platform</h6>
                                       <p className="text-lg-left"> We develop advanced and innovative android applications
                                        with great user
                                        experience to accomplish all your business needs</p></div>
                                </div>
                            </div>
                        </div>
                       
                   </div>
              
                </div>
            </div>
        </div>
        

      
<div className="row bg-light-gray">
    <div className="col-md-6 offset-md-3 mt-5 mb-5">
        <div className="middle-text text-center middle-text_padding-bottom-5">
            Benifits
        </div>
        
    </div>
</div>
        
      <div className="row bg-light-gray">
        <div className="col-md-11 offset-md-1 mb-5">
          
            <div className="row">
                <div className="col-md-2">
                    <div className="d-flex justify-content-center">
                        <div className="flex-container_icon_ecommerce"><img src={data.sideimg.img1} alt="" /></div>
                    </div>
                    <p className="text-center  mt-3">Capturing interest of customers  who likes to shop</p>
                </div>
            
                <div className="col-md-2">
                    <div className="d-flex justify-content-center">
                        <div className="flex-container_icon_ecommerce"><img src={data.sideimg.img2} alt="" /></div>
                    </div>
                    <p className="text-center  mt-3">Secure Transaction for the complete payment</p>
                </div>
            
                <div className="col-md-2">
                    <div className="d-flex justify-content-center">
                        <div className="flex-container_icon_ecommerce"><img src={data.sideimg.img3} alt="" /></div>
                    </div>
                    <p className="text-center  mt-3">Enhanced  customer experience  due to  consistance brand</p>
                </div>
                <div className="col-md-2">
                    <div className="d-flex justify-content-center">
                        <div className="flex-container_icon_ecommerce"><img src={data.sideimg.img2} alt="" /></div>
                    </div>
                    <p className="text-center  mt-3">Secure Transaction for the complete payment</p>
                </div>
                <div className="col-md-2">
                    <div className="d-flex justify-content-center">
                        <div className="flex-container_icon_ecommerce"><img src={data.sideimg.img2} alt="" /></div>
                    </div>
                    <p className="text-center  mt-3">Secure Transaction for the complete payment</p>
                </div>
            </div>
        </div>   
      </div>

    
        <div className="row top-slider-ecommerce-img2 bg-danger">
        <BackgroundImage fluid={data.placeholderImage1.childImageSharp.fluid} style={{
        height:600,
      }} />
            <div className="col-md-8 offset-md-2 mb-5  mt-5">
                <div className="middle-text text-center middle-text_padding-bottom-5 text-white">Our E-commerce Solution
    
                </div>
                <div className="text-center text-white">With great experience in mobile and web technologies, Nunc has been assisting
                    retailers
                    wishing to sell their produts and services online. NUNC offers a full-fledged range of m-commerce and
                    e-commerce development services</div>

            <div className="row">
                <div className="col-md-12 mt-5">
            
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-center">
                                        <div className="flex-container_icon_ecommerce"><img src={data.sideimg.icon1} alt=""
                                            /></div>
                                    </div>
                                    <p className="text-center text-white mt-3">One click installation</p>
                                </div>
            
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-center">
                                        <div className="flex-container_icon_ecommerce"><img src={data.sideimg.icon2} alt=""
                                               / ></div>
                                    </div>
                                    <p className="text-center text-white mt-3">Latest Techonolgy</p>
                                </div>
            
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-center">
                                        <div className="flex-container_icon_ecommerce"><img src={data.sideimg.icon3} alt=""
                                                /></div>
                                    </div>
                                    <p className="text-center text-white mt-3">Easy Navigation</p>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-center">
                                        <div className="flex-container_icon_ecommerce"><img src={data.sideimg.icon4} alt="" /></div>
                                    </div>
                                    <p className="text-center text-white mt-3">Plugin Development</p>
                                </div>
                            
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-center">
                                        <div className="flex-container_icon_ecommerce"><img src={data.sideimg.icon5} alt="" /></div>
                                    </div>
                                    <p className="text-center text-white mt-3">Maintance & Support</p>
                                </div>
                            
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-center">
                                        <div className="flex-container_icon_ecommerce"><img src={data.sideimg.icon6} alt="" /></div>
                                    </div>
                                    <p className="text-center text-white mt-3">Mobile E-Commerce Development</p>
                                </div>
                            </div>
                </div>
            </div>
            </div>
        </div>
      
    

            <div className="row bg-white">
                <div className="col-md-8 offset-md-2 text-center ">
                   
                    <div className="custom-header text-center h-space-4 mt-5">
                        <h5 className="font-weight-bold text-uppercase">Process We Follow </h5>
                    
                    </div>
                </div>
            </div>

            <div className="row mb-5">
               <div className="col-md-10 offset-md-2">
                   <div className="row h-space-5">
                        <div className="col-md-1 d-flex justify-content-center">
                            <img src={data.sideimg.icon7} alt="" className="mt-3" />
                            <p className="img_down_text text-center text-uppercase">Requirments Gathering</p>
                        </div>
                        <div className="col-md-1 d-flex align-items-center justify-content-center dotted_color">.............</div>
                        <div className="col-md-1 d-flex justify-content-center">
                            <img src={data.sideimg.icon8} alt="" className="mt-3" />
                            <p className="img_down_text text-center text-uppercase">UI / UX Design</p>
                        </div>
                        <div className="col-md-1 d-flex align-items-center justify-content-center dotted_color">.............</div>
                        <div className="col-md-1 d-flex justify-content-center">
                            <img src={data.sideimg.icon9} alt="" className="mt-3" />
                            <p className="img_down_text text-center text-uppercase">development</p>
                        </div>
                        <div className="col-md-1 d-flex align-items-center justify-content-center dotted_color">.............</div>
                        <div className="col-md-1 d-flex justify-content-center">
                            <img src={data.sideimg.icon10} alt="" className="mt-3" />
                            <p className="img_down_text text-center text-uppercase">Quality Check</p>
                        </div>
                        <div className="col-md-1 d-flex align-items-center justify-content-center dotted_color">.............</div>
                        <div className="col-md-1 d-flex justify-content-center">
                            <img src={data.sideimg.icon11} alt="" class="mt-3" />
                            <p className="img_down_text text-center">Deploy and Maintance</p>
                        </div>
                   </div>
               </div>
            </div>
           
     
        <div className="row bg-light-gray">
            <div className="col-lg-8 offset-lg-2 text-center h-space-5">
                <div className="custom-header mt-5 text-center h-space-1">
                    <h5 className="font-weight-bold text-uppercase">Ready to make your project live</h5>
                </div>
                <div className="career-div_body h-space-2"></div>
                <button className="btn btn-default custom-btn btn-lg custom-btn-ecommerce">Get Estimation</button>
            </div>
        </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product