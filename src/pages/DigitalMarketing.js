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
        placeholderImage: file(relativePath: { eq: "dg-bg.jpg" }) {
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
        sideimg:digitalmarketingJson(slug: { eq:"sideimages" }) {         
         image1
         image2 
         image3
         image4
         image5    
       }  
      }
    `} 
   
    render={data=> <div>    
      <Header />
      <BackgroundImage fluid={data.placeholderImage.childImageSharp.fluid} style={{
        height:600,
      }} />
      <div className={containerStyles.heading}>
      <h1>DIGITAL</h1>
      <h1>MARKETING</h1>
      <p>Branding. Advertising. Ideas.</p>
      {/* <div><img src={scotpro}/></div> */}
      </div>
      <div className="row bg-light-gray">
            <div className="col-md-8 offset-md-2 mb-5">
                <div className="mb-4">
                    <h4 className="text-center font-weight-bold mt-5">How it Helps</h4>
                    <div className="d-flex justify-content-center"><span className="custom-h-bar  "></span></div>
                </div>
              
                <p>Digital marketing is a broad term used to describe the integrated marketing services used to attract,
                    engage and convert customers online. Digital marketing uses several channels such as content
                    marketing, influencer marketing, Search Engine Optimization, Social Media and Online advertising to
                    help brands connect with customers and discover performance of marketing programs in real-time.</p>
                <p> Digital marketing is also known as Internet marketing, but their real methods differ, as digital
                    marketing is considered more targeted, measurable and interactive.</p>
            </div>
         
        </div>

        <div className="row">
            <div className="col-md-8 offset-md-2 mt-5">
                <h5 className="text-center font-weight-bold">Our Best-in-Class Services</h5>

                <div className="d-flex justify-content-center"><span className="custom-h-bar  "></span></div>

            </div>
        </div>
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                    <div className="row mt-5">
                        <div className="col-md-6">
                        <img src={data.sideimg.image1} alt="" /></div>
                        <div className="col-md-6">
                            <h5 className="font-weight-bold mb-5">Social Media Marketing</h5>
                            <div className=" h-space-4">
                                <p>Our expert team of social media marketing will create, manage, and deliver top-performing social media campaigns for
                                your business. As a digital marketing service provider, we position our clients to become influencers through social
                                media marketing. Our campaigns deliver engaging content, rise followers, and drive word of mouth. This method
                                straightforwardly translates into more leads and sales for our clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 bg-light-gray">
                <div className="col-md-8 offset-md-2">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h5 className="font-weight-bold mb-5">Social Media Advertising</h5>
                            <div className=" h-space-4">
                                <p>We use social media platforms to connect your product or service to thousands of people. We use highly targeted methods
                                of social media promotion that allow our clients to locate their exact demographic and reach them at an inexpensive
                                rate. With our social media advertising services, we will create Ads, target, and optimize them for the best results.</p>
                            </div>
                        </div>
                        <div className="col-md-6"><img src={data.sideimg.image2} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                    <div className="row mt-5">
                        <div className="col-md-6"><img src={data.sideimg.image3} alt="" /></div>
                        <div className="col-md-6">
                            <h5 className="font-weight-bold mb-5">Pay-Per-Click (PPC)</h5>
                            <div className=" h-space-4">
                                <p>People uses places like Google, Bing & Yahoo to find related companies that meet their requirements. Search engine
                                marketing also called as Pay-Per-Click which allows you to run advertisements on search engines that show when people
                                are searching for the products and services you offer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 bg-light-gray">
                <div className="col-md-8 offset-md-2">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h5 className="font-weight-bold mb-5">Search Engine Optimization (SEO)</h5>
                            <div className=" h-space-4">
                                <p>We use social media platforms to connect your product or service to thousands of people. We use
                                    highly targeted methods
                                    of social media promotion that allow our clients to locate their exact demographic and reach
                                    them at an inexpensive
                                    rate. With our social media advertising services, we will create Ads, target, and optimize them
                                    for the best results.With the help of SEO technique, potential customers can find you on the search engines like Google and Bing. As a
                                    digital marketing service provider, we offer SEO services to help your website rank for the keywords most important to
                                    your business. Every day, millions of people search for the products or services you offer & we make sure they see your
                                    website when they do.</p>
                            </div>
                        </div>
                        <div className="col-md-6"><img src={data.sideimg.image4} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                    <div className="row mt-5">
                        <div className="col-md-6"><img src={data.sideimg.image5} alt="" /></div>
                        <div className="col-md-6">
                            <h5 className="font-weight-bold mb-5">WhatsApp Marketing</h5>
                            <div className=" h-space-4">
                                <p>Send unlimited Bulk WhatsApp messages to unlimited contacts and generate instant leads for your business and most
                                importantly our software is easy to use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    <div className="row bg-light-gray">
        <div className="col-md-8 offset-md-2 text-center h-space-8">
            <div className="mt-5 text-center mb-3">
                <h4 className="font-weight-bold text-uppercase">Want to Grow your Digital Strategy?</h4>
            </div>
            
            <button className="btn btn-default custom-btn custom-btn--with-bg text-uppercase">get a quote</button>
        </div>
    </div>
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product