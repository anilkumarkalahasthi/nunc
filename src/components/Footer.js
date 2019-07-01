import React from "react"
import containerStyles from "./css/container.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import logos from "./img/nunc_sys_logo.svg";
import map from "./img/google.png";



const footer=()=>{
return <div className={containerStyles.footer}>
       <div className="col-md-10 offset-1" style={{
           
           display:`flex`,
         justifyContent:`space-between`,
       }}>
        <img src={logos} alt="Logo" className={containerStyles.logo} />
        <h1>Get in Touch</h1>
        <h1>Our Services</h1>
        </div>
        <div  className="col-md-10 offset-1" style={{
            display:`flex`,
            justifyContent:`space-between`,
        }}>
        <div>
        <p>NUNC SYSTEMS PRIVATE LIMITED</p>
            <p>7th Floor, Wing-B,Melange Towers,</p>
            <p>Hitech City, Hyderabad-500081,Telangana,INDIA</p>
            <div className="d-flex">
        <img src={map} alt="map" className="mr-3"/>
        <div>
        <p>Find us on</p>
        <h3 className="font-weight-normal">Google Map</h3>
        </div>
      </div>
            </div>
    
       <div>
      <p>+91-040-3999 7760</p>
      <p>info@nuncsystems.com</p>
       </div>
       <div  style={{
            display:`flex`,
            justifyContent:`space-between`,
        }}>
         <div>
           <h3>Insights</h3>
           <p>Big Data Analytics</p>
           <p>Blockchain</p>
           <p>Data Science</p>
         </div>
         <div>
         <h3>Expertise</h3>
           <p>Web Development</p>
           <p>Mobile</p>
           <p>Applications</p>
           <p>Salesforce</p>
           <p>Salesforce</p>
         </div>
       </div>
       </div>
       <div className={containerStyles.hr_line+" col-md-12 col-lg-12"}></div>
       <div className="col-sm-12 col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-md-12 col-lg-6 text-lg-left text-center">
                  <div className={containerStyles.footer_social_link}>
                    <a className="text-white" href="www.nuncsystems.com">NUNC Systems © 2018. All rights reserved.</a>
                  </div>
                </div>
       <div className="col-md-12 col-lg-6 text-lg-right">
                  <div className={containerStyles.footer_social_link}>
                    <a className="text-white" href="www.nuncsystems.com ">Careers</a> &nbsp;&nbsp;| &nbsp;&nbsp;<a class="text-white" href="">Privacy
                      Policy</a>
          
                  </div>
                </div>
                </div>
                </div>
</div>
}

export default footer;