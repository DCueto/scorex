import './ListPage.css'
import RAWGService from '../../services/RAWGService';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';








function ListPage() {


  
return (
<section className="ListPage">

    <div className="imagecontainer">
    <img className="imgtop" src= "src/assets/img/840_560.jpeg" alt="headerpic"/> 
    <div className="imggradient"></div>
    </div>

    <h1 className='hellouser'> Welcome to your list <p className="coloruser">user</p> </h1>  
    <h2 className="Numbergames"> You have X games on your list </h2>


    <div className="gamebox">
        

        
    <img className="imgbox"src="src/assets/img/apps.220.14171925115759792.46ff70c5-7760-41a8-9ced-d2de5ae78f17.jpg"/>
        
    <h1 className="gametitle">Grand Theft Auto V</h1>
    
    <div className="puntuations">
    <img className="score"/>

    <div className="icons">
    <img className="arrowdown"src="src/assets/img/8a7b232d44aa4b5d2421e84a434fa840.png"/>
    <img className="arrowup"src="src/assets/img/845335b91b42c8ed9341dfcb6c004b4c.png"/>
    <img className="imgchange"src="src/assets/img/445c9470ac6df68dbeacfb156cb12d66.png"/>
    <img className="bin" src="src/assets/img/4724b936bb77aeb2ce894d3d6b261f4f.png"/>
    </div>

   
    </div>
    </div>



    <i className="fa-solid fa-plus addbutton"></i> 

    

</section>
)


}















export default ListPage;