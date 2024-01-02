import React from 'react'
import './applay.css'
const Apply=()=>{


    return(

   <div className='Apply-container'>
             

        <div className='Elemnts'>
            
        <img  id='Applyimage'    src={Apply}></img>
        <h1>
        How to Apply  <br />
        for Nusoft?
        </h1>
        <button id='sign-button'>Sign up now</button>
        </div>
    

   <div className='Steps'>
    <ApplySteps  nb={1} description="FolloRegister Register and Define your CV"/>
    <ApplySteps  nb={2} description="Login With Linkedin Profile"/>
    <ApplySteps  nb={3} description="Enter all your skills in the registered major"/>   
    </div>

  
      <div className="box"></div>  

</div>
    
)};

    export default Apply;