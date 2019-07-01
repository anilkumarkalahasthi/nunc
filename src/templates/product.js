import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import containerStyles from "../components/css/container.module.css"


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
      }
    `} 
    render={data=> <div>    
      <Header />
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.description }} />
      <Footer />
    </div>}  
  /> 
 
)

export default Product