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
        placeholderImage: file(relativePath: { eq: "big-data-bg.jpg" }) {
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
        icons:bigdataJson(slug: { eq:"icons" }) {         
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
        height:600,
      }} />
      <div className={containerStyles.heading}>
      <div className="col-md-4 offset-md-6">
      <h1>Big data</h1>
     
      <div><p>Transform Your Enterprise with the Power of Big Data Analytics.</p></div>
      </div>
      </div>
      <div className="row bg-light-gray mt-5">
            <div className="col-md-8 offset-md-2">
                <div className="middle-text text-center">
                    Harness big data to drive better business decisions.
                </div>
                <div className="text-center h-space-4">
                    <p>Big data is playing a major role in making organizations cleverer and more effective. Consequently, it is hard
                to imagine a successful business system or application which is not providing bits of knowledge to its clients. We have
                grown a deep understanding of Big Data Analytics advancements/systems and business spaces to enable you to give basic
                bits of knowledge from disparate data sources.</p>

                <p>We worked in various domains and which led us to rapidly connect with business drivers behind the big data
                implementations and allowed us to help you in the process of use-case discovery, solution outline, and execution
                plan/guide. Our team bring a comprehensive view of how big data and advanced analytics can help enhance how you use your
                strategic data assets.</p>
                </div>
            </div>
        </div>
     

        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="custom-header text-center h-space-4 mt-5">
                    <div className="custom-header--bold custom-header--font-24 text-uppercase">why work with nunc?</div>
                </div>
            </div>
            <div className="col-md-10 offset-md-1 h-space-4">

                <div className="row align-items-baseline">
                    <div className="col-sm-12 col-md-3 col-lg-3 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-white p-5 text-center">
                            <div className="flex-container-2_icon h-space-3">
                            <img src={data.icons.image1} alt="" /></div>
                           
                            <div className="flex-container-2_text">We have a team of experienced Big Data Analytics professionals who help you to get Big Data implementations</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 flex-container-2 h-space-1  text-center">
                        <div claclassNamess="flex-container-2_item-wrapper bg-white p-5 text-center">
                            <div className="flex-container-2_icon h-space-3 "><img src={data.icons.image2}
                                    alt="" /></div>
                          
                            <div className="flex-container-2_text">Accelerate Success leveraging our robust relationships with top big data technology providers.</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-white p-5 text-center">
                            <div className="flex-container-2_icon h-space-3 "><img src={data.icons.image3}
                                    alt="" /></div>
                           
                            <div className="flex-container-2_text">Power Intelligent Apps & Services with our Big Data Analytics services.</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 flex-container-2 h-space-1">
                        <div className="flex-container-2_item-wrapper bg-white p-5 text-center">
                            <div className="flex-container-2_icon h-space-3 "><img src={data.icons.image4} alt="" /></div>
                          
                            <div className="flex-container-2_text">Save through Cost Effective Global Delivery Model.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      
        <div className="row bg-light-gray">
            <div className="col-md-12">
                <div className="row mb-5 mt-5">
                    <div className="col-md-4 offset-md-2 pb-5">
                        <div className="custom-header--bold custom-header--font-24 h-space-2">Big Data Service</div>

                        <p>We implement a high knowledge base, for offering data services and our expert team provides your business with the most
                        suitable data model. Analytic services provide solutions that can help organizations capitalize on the transforming
                        potential of Big Data and derive deliverable insights from their data.
                        
                        Our business domain expertise coupled with capable technical competencies enable us to define a Big Data strategy for
                        your organization, integrate Big Data into your overall IT roadmap, architect and implement a solution and empower your
                        business.</p>
                        
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <div className="custom-header--bold custom-header--font-24 h-space-2">Need For Expert Data Analysis</div>
                        <div>
                            <ul className="custom-bullet">
                                <li>Mitigate the data loss incurred by the company, by offering quality data resources and adequate support</li>
                                <li>Improving the sales sector of a company by supplying the best in market high quality data techniques</li>
                                <li>To improvise the levels of customers satisfaction by conducting data analysis surveys</li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="row">
            <div className="col-md-6 offset-md-3 text-center h-space-8">
                <div className="custom-header mt-5 text-center h-space-1">
                    <span className=" text-uppercase">Request a quote</span>
                </div>
                <div className="career-div_body h-space-2">Our experts can show you  how to get the most from your enterprise data</div>
                <button className="btn btn-default custom-btn custom-btn--with-bg text-uppercase">Get a Quote</button>
            </div>
        </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product