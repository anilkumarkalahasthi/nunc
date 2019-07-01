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
      <div className="row  bg-light-gray custom-header--padding-top">
            <div className="col-md-6 offset-md-3 mb-5">
                <div className="text-center mt-3">{data.prods.param1}
                </div>
                <div className="text-center mt-3">{data.prods.param2}
                </div>
            </div>
        </div>

        <div className="row bg-light-gray ">
            <div className="col-md-12 mt-5 mb-5">
                <div className="row ">
                    <div className="col-md-10 offset-md-2">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="d-flex flow-column justify-content-center">
                                    <div className="flex-container_icon_agriculture">
                                      <img src={data.grids.image1} alt="" className="mt-3" />
                                    </div>
                                </div>
                                <p className="text-center mt-3 font-weight-bold">{data.grids.title1}</p>
                            </div>

                            <div className="col-md-2">
                                <div className="d-flex justify-content-center">
                                    <div className="flex-container_icon_agriculture">
                                    <img src={data.grids.image2} alt="" className="mt-3" /></div>
                                </div>
                                <p className="text-center mt-3 font-weight-bold">{data.grids.title2}</p>
                            </div>
                            <div className="col-md-2">
                                <div className="d-flex justify-content-center">
                                    <div className="flex-container_icon_agriculture">
                                    <img src={data.grids.image3} alt="" className="mt-3" />
                                    </div>
                                </div>
                                <p className="text-center mt-3 font-weight-bold">{data.grids.title3}</p>
                            </div>
                            <div className="col-md-2">
                                <div className="d-flex justify-content-center">
                                    <div className="flex-container_icon_agriculture">
                                    <img src={data.grids.image4} alt="" className="mt-3" /></div>
                                </div>
                                <p className="text-center mt-3 font-weight-bold">{data.grids.title4}</p>
                            </div>
                            <div className="col-md-2">
                                <div className="d-flex justify-content-center">
                                    <div className="flex-container_icon_agriculture">
                                    <img src={data.grids.image5} alt="" className="mt-3" /></div>
                                </div>
                                <p className="text-center mt-3 font-weight-bold">{data.grids.title5}</p>
                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>
        </div>

    <div className="row bg-white  pt-5">
        <div className="col-md-8 offset-md-2">
            <div className="row bg-white mb-5">
                <div className="col-md-6">
                    <div className="custom-header h-space-3">
                        <div className="custom-header--bold">{data.tabgrid.title}</div>
    
                    </div>
                    <p className="font-weight-bold">{data.tabgrid.subtitle}</p>
                    <p className="text-container_body-text mb-5">
                     {data.tabgrid.param1}
                    </p>
                    <p className="text-container_body-text mb-5">
                    {data.tabgrid.param2}
                    </p>
                  
    
                </div>
                <div className="col-md-6">  <img src={data.tabgrid.tab1} />
                </div>
            </div>
        </div>
    </div>

        <div className="row bg-light-gray">
            <div className="col-lg-8 offset-lg-2 text-center h-space-5">
                <div className="custom-header mt-5 text-center h-space-1">
                    <span className=" text-uppercase">ready to make your project live</span>
                </div>
                <div className="h-space-2">Let us help you to maakr live</div>
                <button className="btn btn-default custom-btn custom-btn--with-bg">GET QUOTE NOW</button>
            </div>
        </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product