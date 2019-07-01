import React from "react"
import Header from "../components/header"
import SimpleSlider from "../components/Slider"
import Footer from "../components/Footer"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import scotpro from "../components/img/agriculture/tab.png"
import containerStyles from "../components/css/container.module.css"
import "../components/css/slick-slider.css"
import "react-slick";
import Video from "../components/video"
import {Button} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Img from "gatsby-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
    
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};




const Product = ({ pageContext }) => (
  
  <StaticQuery
  query={graphql`
  query {
    placeholderImage: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
     
    placeholderImages: file(relativePath: { eq: "bg-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    placeholderImage1: file(relativePath: { eq: "latest-thinking-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prods:indexJson(slug: { eq:"home" }) {         
          maintitle
          param1
          param2  
          videos       
    }  
    grids:indexJson(slug: { eq:"imagesgrid" }) {         
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
   slide:indexJson(slug: { eq:"slides" }) {         
    slide1
    slide2
    slide3
    slide4          
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
<SimpleSlider />
       {/* <Slider {...settings}>
          <div>
          <Video 
        videoSrcURL={data.prods.videos}
        videoTitle="Official Music Video on YouTube"
       className={containerStyles.background_video}
      />
          </div>
         
          
          <div>
          <Video 
        videoSrcURL={data.prods.videos}
        videoTitle="Official Music Video on YouTube"
       className={containerStyles.background_video}
      />
          </div>
        
         
        </Slider> */}
       
         
    
      {/* <div className="row carousel-top-banner-height">
      <div className="col-md-12 p-0 slider">
        <div id="carousel-top-banner" className="carousel slide carousel-fade js-carouselTopBanner" data-ride="carousel">
          <ol className="carousel-indicators slider_carousel-indicators d-none d-md-block">
            <li data-target="#carousel-top-banner" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-top-banner" data-slide-to="1"></li>
          
          </ol>
          <div className="carousel-inner">
            <div className={containerStyles.carosel_video+" carousel-item active"}>
            <Video 
        videoSrcURL={data.prods.videos}
        videoTitle="Official Music Video on YouTube"
        style={{
          width:`100%`
        }}
      />
            </div>
            <div className="carousel-item" id="slide1">
              <div className={containerStyles.slider_textbox+' '+"text-white text-left"}>
                <span className="typewriter-text slider-textbox_header mb-3" id="slider-1-main-text"></span>
                <p className="typewriter-text d-none d-sm-block" id="slider-1-sub-text"></p>
                <button className="btn btn-default custom-btn custom-btn--with-bg explore-btn">Explore</button>
              </div>
              <img src="./img/homepage-slider.jpg" className="d-block w-100" alt="./img/banner-1.jpg" />
            </div>
          
          </div>
          <div className="slider-controllers">
            <a className="carousel-control-prev" href="#carousel-top-banner" role="button" data-slide="prev">

              <div className="slider-prev">
                <span className="carousel-control-prev-icon slider-controllers_icons" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </div>
            </a>
            <a className="carousel-control-next" href="#carousel-top-banner" role="button" data-slide="next">
              <div className=" slider-next bg-dark-blue">
                <span className="carousel-control-next-icon slider-controllers_icons" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>  */}
    <div className="row bg-light-gray">
      <div className="col-md-5 p-md-0 d-none d-md-block">
        <div className={containerStyles.why_nunc_left_side}>
        <BackgroundImage fluid={data.placeholderImages.childImageSharp.fluid} style={{
        height:400,
      }} />
          <div className={containerStyles.why_nunc_middle_txt_box}><span className={containerStyles.why_nunc_middle_txt}>ABOUT</span> </div>
        </div>
      </div>
      
      <div className={containerStyles.banner_border_top+' '+"col-md-7  bg-light-gray"}>
        <div className={containerStyles.why_nunc_right_side+' '+"pb-5 pb-md-0"}>
        
          <span className={containerStyles.why_nunc_mobile_txt_box+' '+"d-md-none mt-5 ml-5 mb-3"}><span className={containerStyles.why_nunc_mobile_txt}>ABOUT</span> </span>
          <span className={containerStyles.custom_header+' '+"pt-2 pt-md-5 font-weight-bold"}>NUNC</span>
          <p>NUNC Systems is an established Software development
            company that works with Enterprise systems and companies. As a privately-owned company, we provide IT
            Consultancy,
            Software Design, and Development as well as professional
            services and hardware deployment and maintenance to the various industries.
          </p>

          <button className="btn btn-default custom-btn custom-btn--bordered font-weight-bold">Know More ></button>

        </div>
      </div>
    </div>

    <div className="row bg-gray pb-5">
      <div className="col-md-8 col-sm-10 offset-sm-1 offset-md-2 mt-sm-5 mt-md-auto">

        <div className={containerStyles.latest_thinking+' '+"row bg-gray mb-4"}>
       
          <div className={containerStyles.latest_thinking_bg+' '+"col-lg-4 d-lg-block d-none"}>
          <BackgroundImage fluid={data.placeholderImage1.childImageSharp.fluid} style={{
        height:200,
      }} />
            <div className={containerStyles.latest_thinking_middle_txt_box}>
            <span class={containerStyles.latest_thinking_middle_txt}>INSIGHTS</span> </div>
            
          </div>
          <div className="col-lg-8 bg-white">
            <span className={containerStyles.why_nunc_mobile_txt_box+"d-lg-none ml-4"}>
            <span className={containerStyles.why_nunc_mobile_txt}></span>
            </span>
            <p className="py-4 px-3">Gain insights and foresights from various Industries, updates, top technology trends, implementation in Industries and a
            digital strategy that empowers your business to stay ahead of the competition.</p>
          </div>
          <div className="col-md-12">
            <div className="row p-4">
              <div className="col-sm-6 col-md-6 col-lg-3 p-3 flex-container justify-content-center ">
                <div className={containerStyles.flex_container_item_wrapper_1+' '+containerStyles.blockchain_bg}>
                  
                <img src={data.grids.image1} alt="" className="mt-3" />
                </div>
                <div className="flex-container_text_1 mt-3 font-weight-bold">Blockchain</div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 p-3 flex-container justify-content-center ">
                 <div className={containerStyles.flex_container_item_wrapper_1+' '+containerStyles. big_data_analytics}>
                 <img src={data.grids.image2} alt="" className="mt-3" />
                </div> 
                <div className="flex-container_text_1  mt-3 font-weight-bold">BigData Analysis</div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 p-3 flex-container justify-content-center ">
                <div className={containerStyles.flex_container_item_wrapper_1+' '+containerStyles.chatbot_bg}>
                <img src={data.grids.image3} alt="" className="mt-3" />
                </div>
                <div className={containerStyles.flex_container_text_1+' '+"mt-3 font-weight-bold"}>Chatbot</div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 p-3 flex-container justify-content-center">
                <div className={containerStyles.flex_container_item_wrapper_1+' '+containerStyles.datascience_bg}>
                <img src={data.grids.image4} alt="" className="mt-3" />
                </div>
                <div className="flex-container_text_1 mt-3 font-weight-bold">Data Science</div>

              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 p-3 flex-container justify-content-center">
                <div className={containerStyles.flex_container_item_wrapper_1+' '+containerStyles.rpa_bg}>
                  
                <img src={data.grids.image5} alt="" className="mt-5" />
                </div>
                <div className={containerStyles.flex_container_text_1+' '+"mt-3 font-weight-bold"}>RPA</div>
              </div>
            </div>
          </div>
        </div>
     
    </div>
           
        </div>
        <div className="row case-study bg-gray pb-5">
        <div className="col-md-12">
          <div className="custom-header text-center text-uppercase mt-5">
            <span className={containerStyles.custom_header_bold}>Case </span>studies
          </div>
          <section className={containerStyles.case_study_slider+' '+"responsive"}>
            <div className={containerStyles.image_container}>
              <img src={data.slide.slide1} alt="slide" />
              <h2 className={containerStyles.image_title+' '+"text-center"}>smart toolkit</h2>
            </div>
            <div className={containerStyles.image_container}>
            <img src={data.slide.slide2} alt="slide" />
              <h2 className={containerStyles.image_title+' '+"text-center"}>Scout Pro</h2>
            </div>
            <div className={containerStyles.image_container}>
            <img src={data.slide.slide3} alt="slide" />
              <h2 className={containerStyles.image_title+' '+"text-center"}>shoptmize</h2>
            </div>
            <div className={containerStyles.image_container}>
            <img src={data.slide.slide4} alt="slide" />
              <h2 className={containerStyles.image_title+' '+"text-center"}>smart toolkit</h2>
            </div>
            <div className={containerStyles.image_container}>
            <img src={data.slide.slide1} alt="slide" />
              <h2 className={containerStyles.image_title+' '+"text-center"}>smart toolkit</h2>
            </div>
            <div className={containerStyles.image_container}>
            <img src={data.slide.slide2} alt="slide" />
              <h2 className={containerStyles.image_title+' '+"text-center"}>smart toolkit</h2>
            </div>
          </section>
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