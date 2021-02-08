import React, { useEffect } from "react";
import axios from 'axios'
import puppeteer from 'puppeteer'
export interface AboutProps {
  
}
 
const About: React.SFC<AboutProps> = () => {

  const getHtml = async() => {
    // try{
    //   await axios.get("http://bike.passo.co.kr/bike/index.php?part=cybershop&path=cybershop&mode=home#HIS_ID:search=@maker_idx:34#@mod[…]ge=0&order_by=&search_mode=detail")
    //   .then(res => console.log(res))
    // }catch (error){
    //   console.log(error)
    // } 
    // const browser = await puppeteer.launch()
    // const page = await browser.newPage()
    // await page.goto("http://bike.passo.co.kr/bike/index.php?part=cybershop&path=cybershop&mode=home#HIS_ID:search=@maker_idx:34#@mod[…]ge=0&order_by=&search_mode=detail")
    // await browser.close()
  }

  // useEffect(() => {
  //   getHtml()
  // },[])
  
  return ( 
    <div>
      <p>
        this is About 
      </p>
    </div>
   );
}
 
export default About;