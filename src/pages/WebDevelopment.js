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
      <div className="row bg-light-gray">
            <div className="col-md-8 offset-md-2">
              <div className="middle-text text-center">We help organizations like yours increase the effectiveness of their website while eliminating the stress and confusion of going it alone.</div>
              <div className="text-center h-space-4">Website page is the substance of your organizton, which empowers you to connect target audience. The website is the most vital part of your organization's marketing plan and a central hub of your marketing efforts. 
                All the other promoting material should support and direct audience to your site. 
                As the website design and technology has advanced throughtout the years, you presently have more digital marketibg tools than ever before. 
                Started as a web development company, Nunc Systems offers the best Web development serives by our master web developer to help improve the   your business obtectives.
               </div>
            </div>        
          </div>
          <div className="row mt-5">
            <div className="col-md-8 offset-md-2 h-space-8">              
              <div className="row">
                <div className="col-md-10 offset-md-1 custom-header text-center">
                    <div className="custom-header--bold custom-header--font-24 mt-5 mb-3">What Makes Us Different ?</div>
                    <div className="custom-header--sub-text text-center h-space-5"> We have expert professionals who 
                      show up expertise to develop advanced systems with complex business logic dealing with large 
                      amounts of data and transactions. We are here to support you with most desirable, 
                      innovative, responsible web application and give you the lucid solution.</div>

                </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 flex-container p-0 flex-container_border-right-dotted">
                      <div className="flex-container_item-wrapper">                    
                        <div className="flex-container_icon"><img src="img/web-app-devlopment/Different.png" alt="" /></div>
                        
                        <div className=" flex-container_web_text text-uppercase font-weight-bold text-right">Different</div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 flex-container p-0">
                      <div className="flex-container_item-wrapper">   
                          <div className="flex-container_web_text font-weight-bold text-uppercase ">Launch</div>                 
                        <div className="flex-container_icon"><img src="img/web-app-devlopment/launch.png" alt="" /></div>
                        
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 flex-container p-0 flex-container_border-right-dotted">
                      <div className="flex-container_item-wrapper bg-gray">                    
                        <div className="flex-container_icon"><img src="img/web-app-devlopment/engaging.png" alt="" /></div>
                        <div className="flex-container_webtext_content text-right">Engaging & Interacting</div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 flex-container p-0">
                      <div className="flex-container_item-wrapper bg-gray">     
                          <div className="flex-container_webtext_content">Up-gradation & Maintenance</div>               
                        <div className="flex-container_icon"><img src="img/web-app-devlopment/upgradation.png" alt="" /></div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 flex-container p-0 flex-container_border-right-dotted">
                      <div className="flex-container_item-wrapper bg-light-gray">                    
                        <div className="flex-container_icon"><img src="img/web-app-devlopment/UI-design.png" alt="" /></div>
                        <div className="flex-container_webtext_content text-right">UI Design & Development</div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 flex-container p-0">
                      <div className="flex-container_item-wrapper bg-light-gray">   
                        <div className="flex-container_webtext_content">Definite Marketing Strategies</div>                 
                        <div className="flex-container_icon"><img src="img/web-app-devlopment/marketing-strategies.png" alt="" /></div>
                        
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 flex-container p-0 flex-container_border-right-dotted">
                      <div className="flex-container_item-wrapper bg-gray">                    
                        <div className="flex-container_icon"><img src="img/web-app-devlopment/support.png" alt="" /></div>
                        <div className="flex-container_webtext_content text-right">Support</div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 flex-container p-0">
                      <div className="flex-container_item-wrapper bg-gray">        
                          <div className="flex-container_webtext_content">Standard Testing</div>            
                        <div className="flex-container_icon"><img src="img/web-app-devlopment/standard-testing.png" alt="" /></div>
                      </div>
                  </div>
              </div>
            </div>
          </div>

        
          <div className="row bg-light-gray">
              <div className="col-md-6 offset-md-3">                 
                <div className="custom-header text-center h-space-4 mt-5">
                    <div className="custom-header--bold custom-header--font-24">Responsive, Fast, Scalable & Secure Web Applications</div>
                </div>            
              </div>
              <div className="col-md-10 offset-md-1 h-space-8">
                
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-white p-5">                    
                          <div className="flex-container-2_icon h-space-3"><img src="img/web-app-devlopment/responsive.png" alt="" /></div>
                          <h5 className="h-space-1 font-weight-bold">Responsive & Fast</h5>
                          <div className="flex-container-2_text">We develop web apps that are fast and responsive, deliver the best user experience & leads to higher engagement.</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-white p-5">                    
                          <div className="flex-container-2_icon h-space-3"><img src="img/web-app-devlopment/scalable.png" alt="" /></div>
                          <h5 className="h-space-1 font-weight-bold">Scalable</h5>
                          <div className="flex-container-2_text">We develop web app which is highly scalable and high traffic throughput, our web apps process huge amounts of data with zero downtime.</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-white p-5">                    
                          <div className="flex-container-2_icon h-space-3"><img src="img/web-app-devlopment/secure.png" alt="" /></div>
                          <h5 className="h-space-1 font-weight-bold">Secure</h5>
                          <div className="flex-container-2_text">We use the latest encryption technology and best coding practices, we ensure your application is secure against threats.</div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      
          <div className="row bg-light-gray">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-10 offset-xl-1">                      
                  <div className="custom-header text-center h-space-2">
                      <span className="custom-header--font-24 font-weight-bold"> We can mention all Technologies We Use</span>
                  </div>             
                </div>
               
              <div className="col-md-8 offset-md-2 col-12 pb-5">
                <div className="development-box bg-white">
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
                </div>
            </div>
          </div> 

      

          <div className="row bg-light-white">
              <div className="col-md-6 offset-md-3">                 
                <div className="custom-header text-center h-space-4 mt-5">
                    <div className="custom-header--bold custom-header--font-24">Services We Offer</div>
                </div>            
              </div>
              <div className="col-md-10 offset-md-1 h-space-8">                
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-light-gray p-4">                    
                          <div className="flex-container-2_icon h-space-3"><img src="img/web-app-devlopment/database-design.png" alt="" /></div>
                          <div className="flex-container-2_text">Database Design and Programming</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-light-gray p-4">                    
                          <div className="flex-container-2_icon h-space-3"><img src="img/web-app-devlopment/database-integration.png" alt="" /></div>
                          <div className="flex-container-2_text">Database 
                              Integration</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-light-gray p-4">                    
                          <div className="flex-container-2_icon h-space-3"><img src="img/web-app-devlopment/data-importing.png" alt="" /></div>
                          <div className="flex-container-2_text">Data 
                              Importing</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-light-gray p-4">                    
                          <div className="flex-container-2_icon h-space-3"><img src="img/web-app-devlopment/dynamic-page.png" alt="" /></div>
                          <div className="flex-container-2_text">Dynamic 
                              Page Creation</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-light-gray p-4">                    
                          <div className="flex-container-2_icon h-space-3"><img src="img/web-app-devlopment/developing-web.png" alt="" /></div>
                          <div className="flex-container-2_text">Developing Web 
                              Interface for Data Entry</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-light-gray p-4">                    
                          <div className="flex-container-2_icon h-space-3"><img src="img/web-app-devlopment/custom-page.png" alt="" /></div>
                          <div className="flex-container-2_text">Create 
                              Custom Site Engine</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-light-gray p-4">                    
                          <div className="flex-container-2_icon h-space-3"><img src="img/web-app-devlopment/add-features.png" alt="" /></div>
                          <div className="flex-container-2_text">Add Features to or Modify 
                              Existing Script</div>
                        </div>
                    </div>
                </div>
              </div>
          </div>      


          <div className="row bg-light-gray custom-header--padding-top">        
              <div className="col-md-12">
                <div className="row h-space-8">
                  <div className="col-md-4 offset-md-2 pb-5">
                    <div className="custom-header--bold custom-header--font-24 h-space-2">Why choose Nunc Systems
                        For Web Development Service?</div>
                   <div>
                      <ul className="custom-bullet">
                          <li>We provide Highly Scalable module</li>
                          <li>We understand your business Goal & Requirement</li>
                          <li>Customer first approach</li>
                          <li>Transparent Development Process</li>
                          <li>Quality QA Process throughout the entire phases 
                              of the Web App Development</li>
                          <li>Smooth Deployment with Support & Maintenance</li>
                      </ul>
                   </div>
                  </div>              
                  <div className="col-md-4 offset-md-1 text-center">
                    <img src="img/web-app-devlopment/responsive-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            
      
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center h-space-8"> 
                <div className="custom-header mt-5 text-center h-space-1">
                    <span className=" text-uppercase">Request a quote</span>
                </div>
                <div className="career-div_body h-space-2">Start your amazing testing experience here</div>
                <button className="btn btn-default custom-btn custom-btn--with-bg text-uppercase">Get a Quote</button>             
            </div>
        </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product