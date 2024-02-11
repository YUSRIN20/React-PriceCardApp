import React from 'react';
import PriceCard from './components/PriceCard';


const App = () => {
  let dataObj = [{
     title:"FREE",
     price:"$0",
     user:"Single User",
     storage:"5GB storage",
     domain:"Free Subdomain",
     project:"text-muted",
     projectIcon:"fa fa-times",
     phone:"text-muted",
     phoneIcon:"fa fa-times",
     subdomain:"text-muted",
     subdomainIcon:"fa fa-times",
     monthly:"text-muted",
     monthlyicon:"fa fa-times"
   },
   {
    title:"PLUS",
    price:"$9",
    user:"5 Users",
    storage:"50GB Storage",
    domain:"Free Subdomain",
    project:"",
    projectIcon:"fa-solid fa-check",
    phone: "",
    phoneIcon:"fa-solid fa-check",
    subdomain:"",
    subdomainIcon:"fa-solid fa-check",
    monthly:"text-muted",
    monthlyicon:"fa fa-times"

   },
   {

    title:"PRO",
    price:"$49",
    user:"Unlimited Users",
    storage:"150GB Storage",
    domain:"Unlimited Free Subdomain",
    project:"",
    projectIcon:"fa-solid fa-check",
    phone: "",
    phoneIcon:"fa-solid fa-check",
    subdomain:"",
    subdomainIcon:"fa-solid fa-check",
    monthly:"",
    monthlyicon:"fa-solid fa-check"

   }
  ]
  return (
    <section className='pricing py-5'>

    <div className='container' id='bg-color'>
       <PriceCard dataObj = {dataObj} />
    </div>
    </section>
  );
};

export default App;