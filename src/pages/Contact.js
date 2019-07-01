import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
//import containerStyles from "../components/css/container.module.css"


const Product = ({ pageContext }) => (
 <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "contact.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholderImage4: file(relativePath: { eq: "contact-img-1.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `} 
    render={data=> <div>    
      <Header />
      <BackgroundImage fluid={data.placeholderImage.childImageSharp.fluid} style={{
        height:400,
      }} />
       <div className="row">
            <div className="col-md-8 col-sm-10 offset-sm-1 offset-md-2 contact-mt">        
                <div className="row contactus_border_radius bg-white">                 
                    <div className="col-lg-4">
                        <div className="text-uppercase text-center font-weight-bold mt-5 mb-3">get in touch with us</div>                        
                        <div className="d-flex justify-content-center mb-5 ">
                        <Img fluid={data.placeholderImage4.childImageSharp.fluid} />
                        </div>
                    </div>
                    <div className="col-lg-8 bg-gray contactus_border_top_radius">
                        <div className="row mb-5">
                            <div className="col-md-8 offset-md-2">   
                            <form className="form-horizontal contact-formheader--padding-top" id="myForm">
                                <div className="form-group  mb-5">
                                    <div className="row">
                                        <div className="col-md-4 text-uppercase">
                                        <label for="inputPassword6">NAME</label>
                                        </div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" required="" id="inputSuccess2" />
                                            <div className="valid-feedback feedback-icon">
                                                <i className="fa fa-check"></i>
                                            </div>
                                            <div className="invalid-feedback feedback-icon">
                                                <i className="fa fa-times"></i>
                                            </div>
                                        </div>
                                    </div>
                    
                                </div>
                                <div className="form-group mb-5">
                                    <div className="row">
                                        <div className="col-md-4 text-uppercase"><label for="inputPassword6">Phone</label></div>
                                        <div className="col-md-8">
                                            <input type="text" className="form-control" required="" id="inputSuccess2" />
                                            <div className="valid-feedback feedback-icon">
                                                <i className="fa fa-check"></i>
                                            </div>
                                            <div className="invalid-feedback feedback-icon">
                                                <i className="fa fa-times"></i>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className="form-group mb-5">
                                    <div className="row">
                                        <div className="col-md-4 text-uppercase"><label for="inputPassword6">message</label></div>
                                        <div className="col-md-8 ">
                                            <input type="text" className="form-control" required="" id="inputSuccess2" />
                                            <div className="valid-feedback feedback-icon">
                                                <i className="fa fa-check"></i>
                                            </div>
                                            <div className="invalid-feedback feedback-icon">
                                                <i className="fa fa-times"></i>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>

                                <div className="contact_button d-flex justify-content-between align-items-center">
                                    <i className="fa fa-times text-danger"></i>
                                    <div>Required filed</div>                                   
                                    <button className="btn btn-primary btn-lg contact_button_radius" id="submitButton">Submit</button>
                                </div>                                
                            </form>
                            </div>
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