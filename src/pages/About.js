import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import containerStyles from "../components/css/container.module.css"


const Product = ({ pageContext }) => (
 <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "about_nunc_img.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholderImage2: file(relativePath: { eq: "img-1.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholderImage3: file(relativePath: { eq: "img-2.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        prods:aboutJson(slug: { eq:"aboutmain" }) {         
          maintitle
          param1
          param2         
    }   
      }
    `} 
    render={data=> <div>    
      <Header />
      <BackgroundImage fluid={data.placeholderImage.childImageSharp.fluid} style={{
        height:400,
      }} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.description }} />
       <div className="row bg-white  pt-5 ">
            <div className="col-md-8 offset-md-2">
                <div className="row bg-white mb-5">
                    <div className="col-md-6 col-sm-8">
                        <div className="custom-header h-space-3">
                            <div className="custom-header--bold"> <h1>{data.prods.maintitle}</h1></div>
                        </div>

                        <p className="text-container_body-text">
                        {data.prods.param1}
                        </p>

                        <p className="text-container_body-text">
                        NUNC Systems is an established Software development company that works with Enterprise systems and companies. As a
                        privately-owned company, we provide IT Consultancy, Software Design, and Development as well as professional services
                        and hardware deployment and maintenance to the various industries.
                        </p>

                        <p className="text-container_body-text">
                            We are a partner with more than 100 top notch companies to serve and support them on their mobile application needs. As
                            a Salesforce & SAP partner, it offers a unique value in development, integration, and implementation of CRM and ERP
                            systems and RMS based projects in the following verticals: Retail, Finance, and Telecommunications.
                        </p>

                    </div>
                    <div className="col-md-6 col-sm-4"><Img fluid={data.placeholderImage2.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
        </div>

       

        <div className="row bg-white">
            <div className="col-md-8 offset-md-2 mb-3 mt-3">
                <div className="row ">
                    <div className="col-md-6 col-sm-4"><Img fluid={data.placeholderImage3.childImageSharp.fluid} />
                    </div>
                    <div className="col-md-6 col-sm-8">
                        <div className="custom-header h-space-3">
                            <div className="custom-header--bold">Our Vision</div>
                        </div>
                        <p className="text-container_body-tex">
                            Over the years, we have emerged as a successful name in the global IT collaboration scenario. Though our roots are in
                            India, we have a business presence in worldwide.
                        </p>

                        <p className="text-container_body-tex">
                        Our team operates with enthusiasm and flexibility. We are focused on our customers, being their reliable partner for IT
                        services and solutions, working together on a partnership basis, helping them face the challenges of the modern times.
                        NUNC Systems has clients from the USA, Great Britain, Netherlands, Denmark, France, and EMEA regions. It is one of the
                        very few companies which values and cares about its employees at par with its customers. Come and join us to explore new
                        frontiers.
                        </p>
                        <h5 className="font-weight-bold mb-3">We follow three simple principles</h5>
                            <div className="d-flex"><i className="fas fa-check mr-3 mt-1"></i>
                                <p>True collaboration with customers and partners</p>
                            </div>
                            <div className="d-flex"><i className="fas fa-check mr-3 mt-1"></i>
                                <p>Complete understanding of customers business</p>
                            </div>
                            <div className="d-flex"><i className="fas fa-check mr-3 mt-1"></i>
                                <p>Persistence in finishing the job whatever it takes</p>
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