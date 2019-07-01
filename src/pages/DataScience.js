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
        placeholderImage: file(relativePath: { eq: "bg-img.png" }) {
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
        grids:datascienceJson(slug: { eq:"help" }) {         
         image1
         image2
         image3
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
      <h1>DATA SCIENCE</h1>
      <p>Data science is a study that deals with identification, illustration and extraction of meaningful info from data sources to be used for business functions.</p>
      
      </div>
      <div className="row  data-science-sideimg ">
        <div className="col-md-6 offset-md-3 mb-5">
          <h4 className="text-center font-weight-bold">How it Helps</h4>

          <div className="d-flex justify-content-center"><span class="custom-h-bar  "></span></div>
        
        </div>
      
         
          <div className="row no-gutters">
            <div className="col-md-8 offset-md-2">
               <div className="row">
                <div className="col-md-6 ">
                  <img className="img-fluid mb-3" src={data.grids.image1} alt="" />
                </div>
                <div className="col-md-6">
                  <div className="h-space-4 text-left">
                  <p>  Data Science is a study that deals with identification, illustration and extraction of meaningful info
                    from data sources to be used for business functions.
                    with huge of facts creating each minute,the necessity to extract the valuable insights is a must for the
                    industries to stand out from the crowd. Data Science
                    Engineers setup the database and data storage in order to facilitate the process of data mining, data
                    mugging and other processes. Now a days,organization are
                    running behind profits,but the businesses that express efficient approaches based on fresh and valuable
                    visions always win the game in the long-term.
                    </p>
                    <p>In reality, data science is developing rapidly and has already shown vast difference of opportunity that a wider
                    definition is important to understanding it.
                    And whereas it's difficult to pin down a particular definition, it's quite simple to learn and feel its
                    impact. Data science, once applied to different fields will result in unbelievable new insights. 
                  </p>

                   
                  </div>
                </div>
               </div>
            </div>
            
          </div>
        </div>

        <div className="row bg-light-gray">
        <div className="col-md-8 offset-md-2 mt-5">
          <h4 className="text-center font-weight-bold">Lifecycle of Data Science</h4>
          
          <div className="d-flex justify-content-center"><span class="custom-h-bar  "></span></div>
          <img className="img-fluid" src={data.grids.image2} alt="" />
        </div>
     </div>

     <div className="row">
       <div className="col-md-8 offset-md-2 mt-5">
            <h5 className="text-center font-weight-bold mb-5">Data Scientist roles and Responsibilities</h5>

            <ul>
              <li><p>A data scientist is an expert responsible for gathering, analyzing and interpreting huge amounts of data to find ways
                to
                aid the business improve operations and increase a competitive edge over competitors.</p></li>

                <li><p>The data scientist make use of advanced analytics technologies, including machine learning and predictive modeling,
                  to
                  provide insights beyond statistical analysis. The demand for data science skills has increased significantly in recent
                  years as businesses look to collect useful data from the huge amounts of organized, unorganized and semi-organized
                  data
                  that a big organization produces and collects -- collectively referred to as big data.</p></li>

                  <li><p>A data scientist’s key duty is data analysis, a process that initiates with data collection and ends with business
                    decisions made on the basis of the data scientist’s final data analytics results. Data scientists normally work in
                    teams
                    to mine big data for information that can be used to forecast customer behavior and find business hazards and
                    opportunities.</p></li>

                    <li><p>These experts are tasked with evolving statistical learning models for data analysis and must have knowledge using
                      statistical tools, as well as the capability to generate and evaluate complex predictive models.</p></li>
            </ul>
          
       </div>
     </div>

     <div className="row mt-5 bg-light-gray">
              <div className="col-md-8 offset-md-2 mt-5">
                <h5 className="text-center font-weight-bold">Business Intelligence(BI) vs Data Science</h5>
                
                <div className="d-flex justify-content-center"><span className="custom-h-bar  "></span></div>
                 
                </div>
            <div className="col-md-8 offset-md-2 h-space-8">
              <div className="row mt-5">
                <div className="col-md-6">
                 
                  <div className="text-center h-space-4">Over recent years Software Testing has experienced a seismic move
                    in system and core interest. Gone is the time software testing and testers living in their own silo,
                    making and executing reams of tests, performed by a group of people
                    crosswise over different cycles before the application was ready for release. This old method for
                    testing has an immense negative effect on the cost and timescales of a software development.</div>
                </div>
                <div className="col-md-6"><img src={data.grids.image3} alt="" width="300" height="300" /></div>
              </div>
            </div>
          </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product