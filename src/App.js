import React, {useEffect} from 'react'
import Tmdb from './Tmdb'

export default () => {
     
  useEffect(() =>{      /*O useEffect serve basicamente para que quando a tela for carregada*/
                        /*ele execute o que está dentro dessa função */       
      
   const loadAll = async()=>{
          //PEGANDO A LISTA TOTAL
      let list = await Tmdb.getHomeList
      console.log(list);
     }                                                                                

  },[]);
   
  return (
    <div>
      Olá Mundo!
    </div>
  )
}