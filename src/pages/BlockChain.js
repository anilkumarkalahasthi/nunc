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
        placeholderImage: file(relativePath: { eq: "blockchain-bg.jpg" }) {
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
        grids:blockchainJson(slug: { eq:"imagesgrid" }) {         
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
      <h1>BLOCKCHAIN</h1>
      <p>Disrupt your Industry and Transform your Business with Blockchain.</p>
<p>Get freed of friction, form trust and open new prospects across businesses and enterprises with the power of our Blockchain solutions.</p>     
      </div>
      <div className="row  bg-light-gray custom-header--padding-top">
            <div className="col-md-6 offset-md-3 mb-5">
                <div className="text-center mt-3">
                <h2>What is Blockchain</h2>
                </div>
                <div className="text-center mt-3">
                <p>The Blockchain is one of the greatest trends in technology at the present time. But what is it? And why are we all discussing about it?</p>
                <p>Let's begin from the earliest starting point. The major application of blockchain technology was bitcoin which was released in 2009. Bitcoin is a digital currency also called as cryptocurrency and the blockchain is the technology that supports it. A cryptocurrency alludes to a digital coin that keeps running on a blockchain.</p>
                <p>Understanding how the blockchain functions with bitcoin will enable us to perceive how the innovation can be exchanged to numerous other real-world use cases.</p>
                <p>Bitcoin is the brainchild of a mysterious individual or group of people known as Satoshi Nakamoto. No one knows the personality of Nakamoto, however, their vision was spread out in a 2009 whitepaper called "Bitcoin: A Peer-to-Peer Electronic Cash System." Blockchain gave the answer to digital trust since it records critical data in an open space and doesn’t allow anyone to remove it. It's transparent, time-stamped and decentralized.</p>
                </div>
            </div>
        </div>

      

    <div className="row bg-white  pt-5">
        <div className="col-md-8 offset-md-2">
            <div className="row bg-white mb-5">
            <div className="col-md-6">  <img src={data.grids.image1} />
                </div>
                <div className="col-md-6">
                    <div className="custom-header h-space-3">
                       
    
                    </div>
                    <h2 className="font-weight-bold">Blockchain Separates from Bitcoin</h2>
                    <p className="text-container_body-text mb-5">
                    Indeed, even today, there are numerous who believe Bitcoin and blockchain are one and the same, despite the fact that they are most certainly not. The individuals who began to acknowledge around 2014 that blockchain could be utilized for more than cryptocurrency began to put resources into and investigate how blockchain could modify a wide range of sorts of tasks. At its core, blockchain is an open, decentralized ledger that records exchanges between two parties for all time without requiring third-party verification. This makes a greatly efficient process and one individuals predict will drastically reduce the cost of transactions.
                    </p>
                    <p className="text-container_body-text mb-5">
                    At the point when business people understood the power of blockchain, there was a surge of investment and discovery to perceive how blockchain could affect supply chains, healthcare, insurance, transportation, and many others. About 15% of financial institutions are at currently utilizing blockchain technology.
                    </p>
                  
    
                </div>
               
            </div>
        </div>
    </div>
    <div className="row bg-light-primary  pt-5">
        <div className="col-md-8 offset-md-2">
            <div className="row bg-white mb-5">
                <div className="col-md-6">
                    <div className="custom-header h-space-3">
                    <p className="font-weight-bold">Blockchain Servies to Companies</p>
    
                    </div>
                   
                    <p className="text-container_body-text ">
                    Blockchain service tends to blockchain and its complementing technologies, for example, distributed ledger technology, smart contracts, and cryptocurrency. Many companies provide a variety of services to help organizations in their journey to accomplish trustless agreement based on global partnerships.
                    </p>
                    <p className="text-container_body-text ">
                    Many companies bring its solid expertise in Platform integration and Digital transformation services to join with blockchain and offer some value-added services technology platforms.
                    </p>
                    <p className="text-container_body-text ">
                    Organizations likewise act as an end-to-end partner for Blockchain projects; from an exploratory stage, through the business case development until development and roll-out.
                    </p>
    
                </div>
                <div className="col-md-6">  <img src={data.grids.image2} />
                </div>
            </div>
        </div>
    </div>
    <div className="row bg-white  pt-5">
        <div className="col-md-8 offset-md-2">
            <div className="row bg-white mb-5">
            <div className="col-md-6">  <img src={data.grids.image3} />
                </div>
                <div className="col-md-6">
                    <div className="custom-header h-space-3">
                    <p className="font-weight-bold">How to Blockchains works?</p>
    
                    </div>
                    
                    <p className="text-container_body-text mb-5">
                    At the point when a new transaction or an alter to a current transaction comes into a blockchain, by and a larger part of the hubs inside a blockchain implementation must execute algorithms to assess and confirm the historical backdrop of the individual blockchain block that is proposed. If a larger part of the hubs go to an accord that the history and mark is substantial, the new block of transactions is accepted into the record and another square is added to the chain of exchanges. If a larger part does not concede to the addition or modification of the ledger entry, it is denied and not added to the chain. This distributed consensus model is what permits blockchain to keep running as a distributed ledger without the requirement for some central, unifying authority saying what transactions are legitimate and (maybe more vitally) which ones are most certainly not.
                    </p>
                 
                  
    
                </div>
               
            </div>
        </div>
    </div>
        
    
      <Footer />
    </div>}  
  /> 
 
)

export default Product