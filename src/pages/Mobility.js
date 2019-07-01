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
        placeholderImage: file(relativePath: { eq: "headerbg.png" }) {
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
        height:1010,
      }} />
      <div className={containerStyles.heading}>
      <h1>{data.prods.maintitle}</h1>
      <h1>Farming</h1>
      <div><img src={scotpro}/></div>
      </div>
      <div className="row">
                  <div className="col-lg-7 col-md-12">
                      <div className="text-white">
                          <div className="custom-header custom-header--padding-top h-space-1">
                              Mobile Application <span className="custom-header--bold">Development</span> 
                          </div>
                          <div className="text-container_body">                  
                            <p className="text-container_body-text h-space-2">
                                It is perfectly clear that the interest for mobile  applications has raised in all 
                                organizations. To adapt to that, we turn into your quickening accelerator to outline 
                                and create splendid mobile applications. Nunc Systems is an emerging Indian Mobile 
                                App Development Company, delivering diversified Mobile App experiences. Situated in 
                                Hyderabad, Nunc Systems emerged as one of the Top Mobile Application Development 
                                Company in a shorter span.  
                            </p>    
                            <p className="text-container_body-text h-space-2">Ideal from Mobile Strategy to Mobile 
                              Applications Design and Development to Mobile Testing and Deployment, we cling to 
                              demonstrated worldwide guidelines and system to convey top positioning mobile 
                              applications.
                            </p>
                          </div>
                        </div>
                  </div>
                  <div className="col-lg-5 d-none d-lg-block">
                    <img className="d-none d-md-block mobility-banner-mobile custom-header--padding-top" src="./img/mobility/main_img_mobilephone.png" alt="" />
                  </div>
              </div>

              <div className="row bg-light-gray">
            <div className="col-md-10 offset-md-1">
              <div className="row h-space-5">

                  <div className="col-xl-6 col-md-8 offset-md-2 offset-xl-3 col-12">
                    
                    <div className="custom-header custom-header--padding-top text-center h-space-4">
                        What we <span className="custom-header--bold">work on</span>
                    </div>
                  </div>    
                  <div className="col-md-8 offset-md-2">
                    <div className="row">                      
                      <div className="col-md-4">
                        <img className="img-fluid" src="./img/mobility/mobility_sample_image.png" alt="" />
                       
                      </div>
                      <div className="col-md-4 text-center"><img className="img-fluid" src="./img/mobility/mobility_sample_image.png" alt="" /></div>
                      <div className="col-md-4 text-center"><img className="img-fluid" src="./img/mobility/mobility_sample_image.png" alt="" /></div> 
                    </div>
                  </div>  
              </div>
            </div> 
          </div>

          <div className="row bg-gray mobility_second_bg">
            <div className="col-md-10 offset-md-1">
              <div className="row">   
                  <div className="col-lg-8 col-md-12 custom-header--padding-top">                      
                      <div className="custom-header text-center h-space-3">
                        <span className="custom-header--bold">Architecture</span> to choose
                      </div>
                      <div className="row h-space-5">
                        <div className="col-md-12">
                          <div className="row">                            
                            <div className="col-md-6 text-center">                              
                                <div className="icon-text-box">                      
                                  <img className="h-space-3" src="./img/mobility/native.png" alt="" />
                                  <span className="icon-text-box_header h-space-3">Native</span>
                                </div>
                              </div>
                              <div className="col-md-6 text-center">                       
                                  <div className="icon-text-box">                      
                                    <img className="h-space-3" src="./img/mobility/hybrid_mix.png" alt="" />
                                    <span className="icon-text-box_header h-space-3">Hybrid Mixed & Hybrid web</span>
                                  </div>
                              </div>
                              <div className="col-md-6 text-center">                 
                                  <div className="icon-text-box">                      
                                    <img className="h-space-3" src="./img/mobility/hybrid_package.png" alt="" />
                                    <span className="icon-text-box_header h-space-3">Hybrid Package</span>
                                  </div>
                              </div>
                              <div className="col-md-6 text-center">  
                                  <div className="icon-text-box">                      
                                    <img className="h-space-3" src="./img/mobility/mobile_web.png" alt="" />
                                    <span className="icon-text-box_header h-space-3">Mobile Web</span>
                                  </div>
                              </div>
                              <div className="col-md-12 text-center">
                                <p>NUNC Systems is an established Software development 
                                    company that works with Enterprise systems and companies. As a privately-owned company</p>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-12 text-center">
                    <img src="./img//mobility/mobile-architecture.jpg" alt="" />
                  </div> 
              </div>
            </div> 
          </div>

      
          <div className="row">
              <div className="col-md-6 offset-md-3">                 
                <div className="custom-header text-center h-space-4 custom-header--padding-top">
                    <span className="custom-header--bold">DEVELOPMENT</span> PROCESS
                </div>            
              </div>
              <div className="col-md-10 offset-md-1">
                <div className="row h-space-5">
                  <div className="col-12 col-lg-4 col-xl-2 col-md-4 offset-xl-1 text-center">
                    <div className="icon-text-box">                      
                      <img className="icon-text-box_image" src="./img/mobility/analyze.png" alt="" />
                      <span className="icon-text-box_header h-space-1">Analyze</span>
                      <span className="icon-text-box_text h-space-2">
                        Use cases, Technology & Strategy
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 col-xl-2 col-md-4 text-center">
                    <div className="icon-text-box">                      
                      <img className="icon-text-box_image" src="./img/mobility/design.png" alt="" />
                      <span className="icon-text-box_header h-space-1">Design</span>
                      <span className="icon-text-box_text h-space-2">
                        UI/Wireframing POC/Prototyping
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 col-xl-2 col-md-4 text-center">
                    <div className="icon-text-box">                      
                      <img className="icon-text-box_image" src="./img/mobility/develop.png" alt="" />
                      <span className="icon-text-box_header h-space-1">Develop</span>
                      <span className="icon-text-box_text h-space-2">
                          Performance & Usability, Security & Network Response. Platforms, Device
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 col-xl-2 col-md-4 text-center">
                    <div className="icon-text-box">                        
                      <img className="icon-text-box_image" src="./img/mobility/testing.png" alt="" />
                      <span className="icon-text-box_header h-space-1">Testing</span>
                      <span className="icon-text-box_text h-space-2">
                          Executing test cases, Verifing the result as pass or fail
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 col-xl-2 col-md-4 text-center">
                    <div className="icon-text-box">
                        <img className="icon-text-box_image" src="./img/mobility/deploy_maintain.png" alt="" />
                        <span className="icon-text-box_header h-space-1">Deploy & Maintain</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      <div className="row bg-light-gray custom-header--padding-top">
          <div className="col-md-8 offset-md-2">
                <div className="custom-header text-center mb-4">
                    <span className="custom-header--bold">Design</span> Thinking
                </div>
                <div className="career-div_body mb-5">NUNC Systems is an established Software development company that works with 
                    Enterprise systems and companies. As a privately-owned company</div>
            </div>
            <div className="col-md-10 offset-md-1 h-space-5">
              <img src="./img/mobility/design_thinking_img.png" alt="" />
            </div>
      </div>
      <div className="row">        
          <div className="col-md-11 offset-md-1 custom-header--padding-top">
            <div className="row text-container">
              <div className="col-md-6">                
                  <div className="custom-header h-space-2">
                      WHY <span className="custom-header--bold">NUNC</span>
                  </div>          
                  <p className="text-container_body-text h-space-2">
                      orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  
                      Why do we use it?
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                       layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
                  </p>     
              </div>              
              <div className="col-md-6"><img src="./img/./mobility/why_nunc.png" alt="" /></div>
            </div>
          </div>
        </div>

        <div className="row pb-5">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">                      
                <div className="custom-header custom-header--padding-top text-center mb-5">
                    <span className="custom-header--bold">User-Driven Mobile Application</span> Development Solutions
                </div>             
              </div>
              <div className="col-md-8 offset-md-2 col-12 h-space-3">
                  <div className="development-box">
                    <div className="development-box_icon">
                        <img src="./img/mobility/user-driven_tech_logo_1.png" />
                    </div>
                    <div className="development-box_icon">
                        <img src="./img/mobility/user-driven_tech_logo_2.png" />
                    </div>
                    <div className="development-box_icon">
                        <img src="./img/mobility/user-driven_tech_logo_3.png" />
                    </div>
                    <div className="development-box_icon">
                        <img src="./img/mobility/user-driven_tech_logo_4.png" />
                    </div>
                    <div className="development-box_icon">
                        <img src="./img/mobility/user-driven_tech_logo_5.png" />
                    </div>
                    <div className="development-box_icon">
                        <img src="./img/mobility/user-driven_tech_logo_6.png" />
                    </div>
                    <div className="development-box_icon">
                        <img src="./img/mobility/user-driven_tech_logo_7.png" />
                    </div>
                    <div className="development-box_icon">
                        <img src="./img/mobility/user-driven_tech_logo_8.png" />
                    </div>
                    <div className="development-box_icon">
                        <img src="./img/mobility/user-driven_tech_logo_9.png" />
                    </div>
                  </div>
              </div>
        </div>  
      
        <div className="row bg-light-gray">
            <div className="col-lg-6 offset-lg-3 text-center h-space-5"> 
                  <div className="custom-header custom-header--padding-top text-center h-space-1">
                      <span className="custom-header--bold">WANT TO HIRE</span> OUR DEVELOPER
                  </div>
                  <div className="career-div_body h-space-2">NUNC Systems is an established Software development company that works with Enterprise systems and companies. As a privately-owned company</div>
                  <button className="btn btn-default custom-btn custom-btn--with-bg">Send a Query</button>             
              </div>
        </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product