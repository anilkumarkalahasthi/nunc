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
        placeholderImage: file(relativePath: { eq: "stheader_bg.png" }) {
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
        prods:pardeepJson(slug: { eq:"agriculture" }) {         
              maintitle
              param1
              param2  
              backgroundimage       
        }  
        grids:pardeepJson(slug: { eq:"imagesgrid" }) {         
         image1
         title1
         image2
         title2 
         image3
         title3 
         image4
         title4 
         image5
         title5     
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
      <h1>Software Testing</h1>
      <p>Our mission is to ensure that your interactive products are bug-free and ready for publication</p>
      <div></div>
      </div>
      <div className="row bg-white  pt-5">
            <div className="col-md-8 offset-md-2">
              <div className="middle-text text-center">Our mission is to ensure that your interactive products 
                are bug-free and ready for publication</div>
              <div className="text-center h-space-4">
                <p>Over recent years Software Testing has experienced a seismic move in system and core interest. Gone is the time software testing and testers living in their own silo, making and executing reams of tests, performed by a group of people 
                crosswise over different cycles before the application was ready for release. This old method for testing has an immense negative effect on the cost and timescales of a software development.</p>

                <p>In this connected world, where competitive advantage holds tight the end-user experience instead of on singular
                applications, traditional testing models lack relevance. The present Testing services need to guarantee a consistent
                end-user experience and business process continuity over an extended network of business applications, media channels,
                mobile and smart devices.</p>
              </div>
            </div>        
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1 h-space-8">              
              <div className="row">
                <div className="col-md-12 custom-header text-center">
                    <div className="custom-header--bold custom-header--font-24 h-space-2">Benefits of our QA Testing Services:</div>
                </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 p-0">
                      <div className="flex-container_item-wrapper  d-flex justify-content-around align-items-center bg-light-gray h-space-1">                    
                        <div className="#"><img src="img/software-testing/benefits-img-1.png" alt="" /></div>
                        <div className="#">Cost Reduction</div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 p-0">
                      <div className="flex-container_item-wrapper  d-flex justify-content-around align-items-center bg-gray h-space-1">                    
                        <div className="#"><img src="img/software-testing/benefits-img-2.png" alt="" /></div>
                        <div className="#">High security
                            functions</div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4  p-0">
                      <div className="flex-container_item-wrapper  d-flex justify-content-around align-items-center bg-light-gray h-space-1">                    
                        <div className="#"><img src="img/software-testing/benefits-img-3.png" alt="" /></div>
                        <div className="#">Improved Quality Levels</div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4  p-0">
                      <div className="flex-container_item-wrapper  d-flex justify-content-around align-items-center bg-light-gray h-space-1">                    
                        <div className="#"><img src="img/software-testing/benefits-img-4.png" alt="" /></div>
                        <div className="#">On-Time Delivery</div>
                      </div>
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-8  p-0">
                      <div className="flex-container_item-wrapper  d-flex justify-content-around align-items-center bg-gray h-space-1">                    
                        <div className="#"><img src="img/software-testing/benefits-img-5.png" alt="" /></div>
                        <div className="#">Enhanced end user experience with the assurance of a quality-driven product</div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row bg-light-gray">
              <div className="col-md-6 offset-md-3">                 
                <div className="custom-header text-center h-space-4 mt-5">
                    <span className="custom-header--bold custom-header--font-24">Collaboration Traceability
                        Workflow </span>
                  </div>            
              </div>
              <div className="col-md-10 offset-md-1 h-space-8 text-center">
                <img src="img/software-testing/col-workflow.png" alt="" />
              </div>
          </div>
          

      <div className="row">
        <div className="col-md-8 offset-md-2 text-center h-space-8"> 
              <div className="custom-header mt-5 text-center h-space-1">
                  <span className="custom-header--bold">Why Nunc</span>
                  <div className="custom-header--sub-text">Nunc offers driving Quality Assurance Testing services and solutions that adhere to the highest level of testing
                  standards for a broad range of software and hardware, leveraging advanced testing products and help clients eliminate
                  quality issues and extract the expected value out of their IT systems, this results in significant quality improvements
                  and a faster time to market. </div>
              </div>                       
          </div>
          <div className="col-md-10 offset-md-1 text-center h-space-8">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">                    
                      <div><img src="img/software-testing/end-end-testing.png" alt="" /></div>
                      <div className="font-weight-bold">End to End Testing</div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">                    
                      <div ><img src="img/software-testing/speed-to-market.png" alt="" /></div>
                      <div className="font-weight-bold">Speed to Market</div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">                    
                      <div ><img src="img/software-testing/Scalable.png" alt="" /></div>
                      <div className="font-weight-bold">Scalable process</div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">                    
                      <div ><img src="img/software-testing/Transparency.png" alt="" /></div>
                      <div className="font-weight-bold">Transparency & Controls</div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-6 flex-container padding_5">
                    <div className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">                    
                      <div ><img src="img/software-testing/engineers.png" alt="" /></div>
                      <div className="font-weight-bold">Possinate & Experienced QA Engineers</div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">                    
                      <div ><img src="img/software-testing/experts_support.png" alt="" /></div>
                      <div className="font-weight-bold">Expert Support</div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">                    
                      <div><img src="img/software-testing/focus_on_quality.png" alt="" /></div>
                      <div className="font-weight-bold">Focus on Quality</div>
                    </div>
                </div>
            </div>
          </div>
      </div>
      
          <div className="row bg-light-gray">
              <div className="col-md-6 offset-md-3">                 
                <div className="custom-header text-center h-space-4 mt-5">
                    <span className="custom-header--bold">Our Approach</span>
                    <div className="custom-header--sub-text h-space-2">Software testing process with ScienceSoft includes </div>
                </div>            
              </div>
              <div className="col-md-10 offset-md-1 h-space-4">
                
                <div className="row">
                    <div className="flex-container-2 padding_5">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon pb-3"><img src="img/software-testing/Analyzing-Project.png" alt="" /></div>
                          <div className="font-weight-bold">Analyzing Project Requirements</div>
                        </div>
                    </div>
                    <div className="flex-container-2 padding_5">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon pb-3"><img src="img/software-testing/Defining-Key.png" alt="" /></div>
                          <div className="font-weight-bold ">Defining Key Points Of The Project</div>
                        </div>
                    </div>
                    <div className="flex-container-2 padding_5">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon pb-3"><img src="img/software-testing/Test-analysis.png" alt="" /></div>
                          <div className="font-weight-bold">Test Analysis & Design</div>
                        </div>
                    </div>
                    <div className="flex-container-2 padding_5">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon pb-3"><img src="img/software-testing/Test-implementation.png" alt="" /></div>
                          <div className="font-weight-bold">Test Implementation</div>
                        </div>
                    </div>
                    <div className="flex-container-2 padding_5">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon pb-3"><img src="img/software-testing/Result Analysis.png" alt="" /></div>
                          <div className="font-weight-bold">Result Analysis & Accountability</div>
                        </div>
                    </div>
                </div>
              </div>
          </div>




            <div className="row">
             
              <div className="col-md-10 offset-md-1 text-center mt-5 mb-3">
                <div className="row">
                  <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div
                      className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">
                      <div><img src="img/software_testing/bl_454_baseline_testing_non-functional_testing1.png" alt="" /></div>
                      <div className="font-weight-bold">Functional and Non-Functional testing</div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div
                      className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">
                      <div><img src="img/software_testing/integration.png" alt="" /></div>
                      <div className="font-weight-bold">Integration testing</div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div
                      className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">
                      <div><img src="img/software_testing/" alt="" /></div>
                      <div className="font-weight-bold">Performance testing</div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div
                      className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">
                      <div><img src="img/software-testing/Transparency.png" alt="" /></div>
                      <div className="font-weight-bold">Interoperability testing</div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-6 flex-container padding_5">
                    <div
                      className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">
                      <div><img src="img/software_testing/display.png" alt="" /></div>
                      <div className="font-weight-bold">User acceptance testing (UAT)</div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div
                      className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">
                      <div><img src="img/software_testing/Background1.png" alt="" /></div>
                      <div className="font-weight-bold">User interface and usability testing</div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 flex-container padding_5">
                    <div
                      className="flex-container_item-wrapper d-flex justify-content-around align-items-center bg-light-gray border_radius">
                      <div><img src="img/software_testing/protection-security1.png" alt="" /></div>
                      <div className="font-weight-bold">Security testing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


        
      
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center h-space-8"> 
                  <div className="custom-header mt-5 text-center h-space-1">
                      <span className="custom-header--bold">Got a testing requirement</span>
                  </div>
                  <div className="career-div_body h-space-2">Start your amazing testing experience here</div>
                  <button className="btn btn-default custom-btn custom-btn--with-bg">Get a Quote</button>             
              </div>
        </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product