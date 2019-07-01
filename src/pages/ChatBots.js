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
        placeholderImage: file(relativePath: { eq: "chatbot-bg.jpg" }) {
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
        height:600,
      }} />
      <div className={containerStyles.heading}>
      <h1></h1>
      <h1></h1>
      
      </div>
      <div className="row mt-5">
            <div className="col-md-8 offset-md-2">
                <div className="row mt-5">
                    <div className="col-md-6"><img src="./img/chatbots/chatbot-new.png" alt="" /></div>
                    <div className="col-md-6">
                        <h5 className="font-weight-bold mb-3">What is a Chatbot?</h5>
                        <div className=" h-space-4">
                            <p>A chatbot also called as Chatter Robot is an Artificial Intelligence (AI) software that can simulate a discussion (or a
                            talk) with a user in common language via messaging applications, sites, mobile apps or through the phone. Chatbots are
                            at the talking point of the business world at this point. A Chatbot mimics human talks in its natural format using AI
                            techniques such as Natural Language Processing (NLP), image and video processing, and audio analysis.</p>
                            
                           
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>The advent of
                            chatbots have unlocked new domains of the customer engagement and better ways of doing business in the form of
                            conversational commerce. It is one of the most beneficial technologies that organizations can depend on, perhaps
                            replacing the old-style models and making apps and websites redundant. The most exciting feature of the chatbot is
                            that
                            they learn from the previous interactions and become intelligent and smarter over the time.</p>
                        <h5 className="font-weight-bold">Significance of Chatbots In Business</h5>
                        <p>We are living in an age where clients are tech- savvy, always connected to social media via their smart phones. This new
                        generation of customers expects unified customer experience from the brands they engage with. They demand near real time
                        reply to their questions and expect more personalized recommendations from the brand. To satisfy these client demands
                        and to address the cumulative rivalry in the business space, businesses are revolving their effort to build chatbots
                        that can manage customer questions round the clock without any delay. In fact, chatbots engage their customers in the
                        right place, right time and with the right information in a cost-effective way.</p>

                        <h5 className="font-weight-bold">Behind the scenes: How a chatbot works</h5>
                        <div className="chatbots-works">
                            <img className="img-fluid mt-3" src="./img/chatbots/chatbot-works.png" alt="" />
                            <p className="mt-3">As you can see in this graphic, a user request’s a query next it analyses the request then the identifies the intent and
                            entities and a response is given to a user based on input. This process may look simple; in practice, things are quite
                            complex.</p>
                        </div>

                        <h5 className="font-weight-bold">Why You Should Choose NUNC Systems as a Chat Bot Developer for Your Business</h5>
                        <div>
                            <ul className="list-unstyled">
                                <li>Enhance the customer service experience</li>
                                <li>Improve Customer Engagement</li>
                                <li>Increase Your</li>
                                <li>Business reach</li>
                            </ul>
                        </div>

                        <h5 className="font-weight-bold mb-3">Services We Offer</h5>

                        <div>
                            <h6 className="font-weight-bold">Bots Framework</h6>
                            <p>NUNC Systems’ expert team builds intelligent chatbots and virtual agents in a framework that line up with changeable
                            business dynamics. We use NLP to analyze context and use modern technology like Mongo DB, Node Js, Luis to allow
                            chatbots deliver great user experience.</p>
                            <h6 className="font-weight-bold">Bots Solutions</h6>
                            <p>At NUNC Systems, we offer bot solutions across a cross-section of industries for multiple services like customer care,
                            feedback, booking, and payment. Our experienced team is involved in developing bot solutions aimed at refining
                            customer-facing interactions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       <div className="row bg-light-gray">
            <div className="col-md-8 offset-md-2 text-center h-space-8">
                <div className="mt-5 text-center mb-3">
                    <h4 className="font-weight-bold text-uppercase">Chatbots</h4>
                </div>

                <button className="btn btn-default custom-btn custom-btn--with-bg text-uppercase">get a quote</button>
            </div>
        </div>

   >
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product