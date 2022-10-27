 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 import Newsletter from "./newsletter"
 
 const Bio = () => {
   const data = useStaticQuery(graphql`
     query BioQuery {
       site {
         siteMetadata {
           author {
             name
             summary
           }
           social {
             twitter
           }
         }
       }
     }
   `)
 
   // Set these values by editing "siteMetadata" in gatsby-config.js
   const author = data.site.siteMetadata?.author
   const social = data.site.siteMetadata?.social
 
   return (
     <div className="bio">
       <StaticImage
         className="bio-avatar"
         layout="fixed"
         formats={["auto", "webp", "avif"]}
         src="../images/LaurinWirth.jpg"
         width={150}
         height={150}
         quality={95}
         alt="Profile picture"
       />
       <div className="description">
        <h2 className="headerAdjusted">Hi, I am Laurin!</h2>
        <p> 
        On this blog I share what it takes to get to your first <strong>$1000</strong> in monthly income from a bootstrapped business. 
        <p> <br/><strong>Subscribe </strong> to my newsletter where I share my learnings on how to gain <strong>financial independence</strong> and 
          live a <strong>self-determined</strong> and <strong>authentic life.</strong> </p>
          
        </p>
      </div>
      <Newsletter/>

     </div>
     


   )
 }
 
 export default Bio