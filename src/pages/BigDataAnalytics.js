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
        placeholderImage: file(relativePath: { eq: "big-data.jpg" }) {
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
        bigdata:bigdataJson(slug: { eq:"submain" }) {         
              subimage
                    
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
        height:500,
      }} />
      <div className={containerStyles.heading+' '+"mb-5"}>
      <h1>BIG DATA & ANALYTICS</h1>
      <h1>Transform Your Enterprise with the power of Big Data Analytics</h1>
      <div className="row">
            <div className="col-md-8 col-sm-10 offset-sm-1 offset-md-2 iot-mr">
                
                <div className={containerStyles.big_data_border_radius+' '+"row  bg-white"}>
                    <div className="col-md-10 offset-md-1 mb-5">
                        <div className={containerStyles.middle_text+' '+"text-center mb-2"}>Transform Your Enterprise with the Power of Big
                            Data Analytics
                        </div>  
                    </div>
                    <div className="col-lg-6">
                        <img src={data.bigdata.subimage} alt="subimage"/>
                    </div>
                    <div className="col-lg-6" style={{color:`black`}}>
                        <p>Big data analytics is the frequently complex procedure of examining large and varied data sets -- or big data - to
                        reveal data including hidden patterns, obscure connections, market trends and client inclinations that can enable
                        organizations to make informed business decisions. Big Data Analytics gives analytics experts, such as data scientists
                        and predictive modelers, the capability to break down Big Data from numerous and varied sources, including transactional
                        data and other organized data.
                    </p>
                    <p>
                        Big Data has turned into a key differentiator in helping organizations prediction and make key decisions to stay focused
                        and increase revenue, decrease risk and accomplish progress. Big data is playing key role in improving the efficiency in
                        various sectors such as Travel, Healthcare, E-commerce, Retail, Manufacturing and many more.
                    </p>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    
      

      

        <div className="row  bg-light-gray mt-5" style={{
          marginTop:250
        }}>
            <div className="col-md-10 offset-md-1 mb-5">
               
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <h5 className="font-weight-bold">The Importance of Big Data Analytics</h5>
                        <p>Driven by particular analytics systems and software, high-powered computing systems, big data analytics offers different
                        business benefits, including new income opportunities, more active marketing, better customer service, enhanced
                        operational effectiveness and competitive advantages over competitors.
                        Big data analytics applications empower big data analysts, data scientists, predictive modelers, analysts and different
                        analysis experts to break down developing volumes of organized transaction data, in addition to different types of data
                        that are frequently left untapped by conventional business Intelligence (BI) and analytics programs. That incorporates a
                        blend of semi-organized and unstructured data - for instance, internet clickstream data, web server logs, web-based
                        social networking content, content from client messages and review reactions, cell phone records, and machine
                        information caught by sensors associated with the internet of things.</p>
                    </div>
                    <div className="col-md-12">
                        <h5 className="font-weight-bold">Big Data Analytics Technologies and Tools</h5>
                        <p>Unorganized and semi-organized data types usually don't fit well in customary data warehouses that depends on relational
                        databases to structured data sets. Further, data warehouses will most likely be unable to deal with the handling
                        requests posted by sets of big data that should be refreshed every now and again - or even continually, as in the case
                        of real-time data on stock trading, the online activities of website visitor or the performance of mobile applications.
                        Therefore, a large number of the organizations that gather, process and analyze big data turn to NoSQL databases, as
                        well as Hadoop and its partner tools, including:</p>
                        <div className="d-flex"><span className="font-weight-bold">YARN:</span><p className="ml-3">A group management technology and one of the key features in second- generation Hadoop.</p></div>
                        <div claclassNamess="d-flex"><span className="font-weight-bold">MapReduce:</span><p className="ml-3">It is software framework that enables developers to write programs that process enormous measures of unstructured data
                        in parallel over a dispersed bunch of processors or stand-alone computers.</p></div>

                        <div className="d-flex"><span className="font-weight-bold">Spark:</span><p className="ml-3">An open source, parallel processing framework that empowers operator to run large scale data analytics applications
                        through clustered frameworks.</p></div>

                        <div className="d-flex"><span className="font-weight-bold">HBase:</span><p className="ml-3">A column-oriented key/ value data store worked to keep running over the Hadoop Distributed File System (HDFS).</p></div>
                        <div className="d-flex"><span className="font-weight-bold">Hive:</span><p className="ml-3">An open source data warehouse system framework for questioning and analyzing large data sets in Hadoop files</p></div>


                    </div>
                    <div class="col-md-12">
                        <h5 class="font-weight-bold">Business Benefits of Big Data Analytics</h5>
                        <ul>
                            <li><h5>Faster and better business choices</h5></li>
                            <li><h5>Improved business execution with real time monitoring of events</h5></li>
                            <li><h5>Increased product and service growth</h5></li>
                            <li><h5>Competitive advantage the business</h5></li>
                            <li><h5>Better identification of risk and active mitigation</h5></li>
                            <li><h5>Enhanced client engagement</h5></li>
                        </ul>
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