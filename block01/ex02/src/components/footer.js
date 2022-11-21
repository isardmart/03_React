import React from 'react'

export default function footer() {
let socialnTermsArray=['Friend Us On Facebook','Testimonials','About','Terms of Service','Refund Policy'];
let socialnTerms=(arr)=>(
    arr.map((ele,idx)=>{
      return <p key={idx}>{ele}</p>
    } )
  );
let searchBar=function(){
return <div><input type="text" ></input></div>
};
  return (
    <footer>
      <ul>
        <li>Chalk us out!<ul>{socialnTerms(socialnTermsArray)}</ul></li>
        <li>What even more</li>
        <li>Search{searchBar()}</li>
      </ul>
    </footer>
  )
}
