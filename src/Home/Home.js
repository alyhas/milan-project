import React from 'react';
import '../component/Header/css/style.css';
import FrontandBack from '../images/FrontandBack.png';
import Aim from '../images/aim.svg'
import IphoneMockup from '../images/Iphone-Mockup-2.png';
import DownloadApp from '../images/download_app.png';
import Destination from '../images/Destination.PNG'
import Gift from '../images/gift.PNG'
import Paynsend from '../images/paynsend.PNG'
import ShopOwner from '../images/shopowner.png'
const Home = () => {
    return (
        <div >
          
         
<div  class="sn" style={{ backgroundImage: `url(require("../images/boquet.png"))` }}>
  <div class='top-text'>
<h2> Delivered or pick up your flowers … Order now!</h2> <br/><h2>Select your location to browsing the best florist in your area</h2>
</div>
<form>
  <div class= 'formfirst'>
      
       < div class='row'>
      < div class='selectform' >
      <div class="form-inline">
    
    <select class="form-control" >
      <option>Select City</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
</div>
< div class='selectform'>
<div class="form-inline">
    
    <select class="form-control" >
      <option>Select Dist.</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
</div>
<div class='selectform'>
<div class='form-inline'>
<img src={Aim} style={{ overflow:'hidden', position: 'relative', maxHeight:450}}></img>
  
</div>

</div>
< div >
<button class='btn search-btn' id='btn'>Search </button>
</div>
</div>
</div>
           </form>
           </div>
{/* This is second div */}

           <div class='secondary-content shadow-sm d-flex justify-content-between bg-white rounded'>
              <div class='container'>
<div class='row'>

  <div class='col-lg-3 mb-6'>
<div >
  <img src={IphoneMockup} style={{maxHeight:260, position: 'relative', top:-70, overflow:'visible', alignContent:'center'}} />
</div>
  </div>
  <div class='col-lg-6 mb-6 text-center p-3' style={{margin:'5vh'}} >
    <h2>Download Our Mobile App</h2>
    <span class='sec-content-text p-3' style={{fontSize:18, color: '#8888', fontWeight:500}} > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</span>
    </div>
    <div class='col-lg-2 mb-6 '>
    <div class='container'><img src={DownloadApp} style={{maxWidth:150,justify:'center' ,paddingTop:15}}/> </div>
    </div>
</div>
</div>
           </div>

           <div class='white-bg'>

              

               <div class="container">

               <div class="text-center" style={{fontWeight:'bold' ,padding:60}} ><h2>How It Works</h2></div>
               </div>
          <div class="container ">
            <div class='row  d-flex justify-content-center'>

              <div class='col-lg-4 mb-4 text-center'>

              <div class="d-flex flex-column">
  <div class="p-2 "><img src={Destination} style={{maxHeight:90}} /></div>
  <div class="p-2 "><h3>Select Destination</h3></div>
  <div class="p-2 "><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
</div>
              </div>
              
              <div class='col-lg-4 mb-4 text-center'>
              <div class="d-flex flex-column">
  <div class="p-2 "><img src={Gift} style={{maxHeight:90}}/></div>
  <div class="p-2 "><h3>Choose Your Gift</h3></div>
  <div class="p-2"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
</div>
              
              </div>
              
              <div class='col-lg-4 mb-4 text-center'>
              <div class="d-flex flex-column">
  <div class="p-2 "><img src={Paynsend} style={{maxHeight:90}}/></div>
  <div class="p-2 "><h3>Pay and Send </h3>
  </div>
  <div class="p-2 "><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
</div>
              
              </div>
            </div>
          </div>
           </div>

           <div>
               
                   <div style={{padding:20}} class="row red-background" >
  <div class="WhyYaward col-lg-4 mb-6 "><h3 style={{fontWeight:700, fontSize:22 }} class= "text-left">Why Use Yaward</h3>
                   <p  class='text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                   <button class='btn btn-outline-light'id='btn-trans'>Search </button></div>
  <div class="col-lg-4 mb-6 "><img class='frontandback'src={FrontandBack} style={{ overflow:'hidden', position: 'flex', maxHeight:350}}></img>
</div>
</div>
               </div>

               
       
     


           {/* This is experiment */}
<div class="ivory-texture">

<div class="container ">
            <div class='row  d-flex justify-content-center'>

              <div class='col-lg-6 mb-4 text-center'>

              <div class="d-flex flex-column">
  <div class="p-3 "><img src={ShopOwner} style={{maxWidth:280, padding:'5vh'}}/> </div>
  
</div>
              </div>
              
              <div class='col-lg-6 mb-4'>
              <div class="d-flex flex-column">

  <div class="p-3" style={{margin:'5vh'}} > <h2>Are You A Flower Shop Owner ?</h2>
          <p style={{color:'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop including versions of Lorem Ipsum.</p>
          
          <button class='btn search-btn' id='btn'>Search </button></div>
</div>
              
              </div>
              
             
            </div>
          </div>
           </div>

           <div>
</div>
           
           </div>
       
       
    );};

export default Home;