import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './home.css';



const HomePage = ({black}) =>{

    return(
        <div>
          
          <header className={black ?'black' : ''}>
           <div className="header--logo">
               
                   <img src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"/>
              
           </div>
           </header>



           <div className="titleHome">
               <h1>Quem está assistindo?</h1>
           </div>
           <div className="user">
           <Link to="/index">
               <img src = "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_200x200.png" alt="Usuário"/>
               <label className = "userName">Lázaro</label>
               <img src = "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_200x200.png" alt="Usuário"/>
               <label className = "userName">Felicity</label>
               <img src = "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_200x200.png" alt="Usuário"/>
               <label className = "userName">Neymar</label>
               <img src = "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_200x200.png" alt="Usuário"/>
               <label className = "userName">Messi</label>
               <img src = "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_200x200.png" alt="Usuário"/>
               <label className = "userName">Pharrel</label>  
            </Link>            
           </div>
        </div>
        
        )
}

export default HomePage;