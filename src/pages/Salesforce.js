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
      <div className="row bg-gray">
            <div className="col-md-8 offset-md-2 mb-5">
              <div className="middle-text text-center font-weight-bold">Our Salesforce Solutions</div>
              <div className="text-center h-space-4">
                <p>Salesforce is an innovative application that 
                enables organizations to reimagine their relationships with customers from a 
                new view across all networks and at every touch point. Salesforce’s CRM solution
                 put the customer at the center of everything they do.
                </p>
                <p>We as a Salesforce development company help companies in planning, designing and implementing complete Salesforce
                business solutions. We change the way companies interact and manage their customers, products, partners, and even
                employees. We employ our clients in finding the right Salesforce product, the right feature set, and the right
                customizations. We are here to set the full potential for you.</p>

              
                </div>
            </div>        
          </div>


          <div className="row bg-light-gray">
            <div className="col-md-6 offset-md-3 bg-white text-center timeline-top-box mb-5">
                <h5 className="font-weight-bold pt-5">Salesforce Offerings</h5>
                <div className="h-space-4"><p>We are a team of expert in evaluating your work practices and providing the essential consultation. Our effort is to
                  bring forth the possibilities to build lasting relationships between you and your clients. With the help of Salesforce
                  you can create a legacy worth remembering.</p>
                </div>

            </div>
            <div className="col-md-10 offset-md-1">
                  <ul className="timeline">
                    
                    <li className="timeline-inverted">
                      <div className="tl-circ"></div>
                      <div className="timeline-panel">
                        <div className="timeline-img">
                         <img src="./img/sales_force/integration.png" alt="" />
                        </div>
                        <div className="tl-body">
                          <h5 className="font-weight-bold">Integration.</h5>
                          <p>Salesforce Integration gives you the ability to start a survey from a Salesforce event and send survey response data.
                          Lead feature, which allows you to generate leads in Salesforce from survey responses. And conditions can be set using
                          advanced logic to identify specifically which respondents will be saved into Salesforce.</p>
                        </div>
                      </div>
                    </li>
                    
                    <li>
                        <div className="tl-circ"></div>
                        <div className="timeline-panel">
                          <div className="timeline-img">
                           <img src="./img/sales_force/cloud_development.png" alt="" />
                          </div>
                          <div className="tl-body">
                            <h5 className="font-weight-bold">Cloud Development</h5>
                            <p>Salesforce Cloud Development allows to create add-on applications that integrate into the main Salesforce application
                            and are hosted on Salesforce’s infrastructure. We are experts in designing, developing and deploying Customer
                            Relationship Management systems, and integrated Enterprise Content Management solutions.</p>
                          </div>
                        </div>
                    </li>
                    
                    
                    <li className="timeline-inverted">
                        <div className="tl-circ"></div>
                        <div className="timeline-panel">
                          <div className="timeline-img">
                           <img src="./img/sales_force/consulting.png" alt="" />
                          </div>
                          <div className="tl-body">
                            <h5 className="font-weight-bold">Consulting</h5>
                            <p>Nunc Systems help companies design and plan the most effective way to implement Salesforce products for their business.
                            Our expert professional help our clients to find the right Salesforce product.</p>
                          </div>
                        </div>
                    </li>
                    <li>
                        <div className="tl-circ"></div>
                        <div className="timeline-panel">
                          <div className="timeline-img">
                           <img src="./img/sales_force/force-platform.png" alt="" />
                          </div>
                          <div className="tl-body">
                            <h5 className="font-weight-bold">Force.com Platform</h5>
                            <p>The Force.com platform allows to build new applications and integrate Salesforce.com with current ones using the
                            platform’s APIs. As Force.com is an aPaaS geared towards developing new applications, this states that integration is an
                            ability but not the main use of the platform. Furthermore, while the platform makes it easy to extend and modify
                            Salesforce.com applications for current users, it leads to vendor lock-in and bounds users from integrating freely
                            across different systems and platforms.
</p>
                          </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="tl-circ"></div>
                      <div className="tl-circ"></div>
                      <div className="timeline-panel">
                        <div className="timeline-img">
                         <img src="./img/sales_force/implementation.png" alt="" />
                        </div>
                        <div className="tl-body">
                          <h5 className="font-weight-bold">Implementation</h5>
                          <p>Nunc Systems help organizations solve their business problems through Salesforce. We guide them in choosing the correct
                          customizations and in efficiently using different Salesforce databases.</p>
                        </div>
                      </div>
                    </li>
                    
                  </ul>
            </div> 
          </div>
  
          

      
          <div className="row ">
              <div className="col-md-6 offset-md-3">                 
                <div className="custom-header text-center h-space-4 mt-5">
                    <span className="custom-header--bold">Our Proven Implementation  Approach Includes</span>
                    
                </div>            
              </div>
              <div className="col-md-10 offset-md-1 h-space-8">
                
                <div className="row">
                    <div className="col-md-2 col-lg-2 padding_5">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon pb-3"><img src="img/sales_force/Process Maping.png" alt="" /></div>
                          <div className="flex-container-2_text">Process Mapping</div>
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-2 padding_5">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon pb-3"><img src="img/sales_force/Gap Analysis.png" alt="" /></div>
                          <div className="flex-container-2_text">Gap Analysis</div>
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-2 padding_5">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon pb-3"><img src="img/sales_force/Setup Configuration.png" alt="" /></div>
                          <div className="flex-container-2_text">Setup, Configuration, Implementation.</div>
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-2 padding_5">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon pb-3"><img src="img/sales_force/customization.png" alt="" /></div>
                          <div className="flex-container-2_text">Customization</div>
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-2 padding_5">
                        <div className="flex-container-2_item-wrapper">                    
                          <div className="flex-container-2_icon pb-3"><img src="img/sales_force/deployment.png" alt="" /></div>
                          <div className="flex-container-2_text">Deployment</div>
                        </div>
                    </div>

                    <div className="col-md-2 col-lg-2 padding_5">
                      <div className="flex-container-2_item-wrapper">
                        <div className="flex-container-2_icon pb-3"><img src="img/sales_force/deployment.png" alt="" /></div>
                        <div className="flex-container-2_text">Post Implementation support</div>
                      </div>
                    </div>
                </div>
              </div>
          </div>


        
      
        <div className="row bg-light-gray">
            <div className="col-md-8 offset-md-2 text-center h-space-8"> 
                  <div className="mt-5 text-center h-space-1">
                      <h4 className="font-weight-bold text-uppercase">Know more about salesforce services</h4>
                  </div>
                  <div className="h-space-2">Let us help you get more information about services</div>
                  <button className="btn btn-default custom-btn custom-btn--with-bg">Request  more info</button>             
              </div>
        </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product