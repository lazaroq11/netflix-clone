import React, { useEffect, useState, } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'
import './App.css'


export default () => {

    
 
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null); //começa o featuredData que é o filme de destaque como nulo
  const[blackHeader,setBlackHeader] = useState(false); //Alterna a cor do cabeçalho 

  useEffect(() =>{      /*O useEffect serve basicamente para que quando a tela for carregada*/
                        /*ele execute o que está dentro dessa função */       
    //TRABALHANDO COM A API DO TMDB 
   const loadAll = async()=>{
      //PEGANDO A LISTA TOTAL
      let list = await Tmdb.getHomeList(); //funcao para pegar os filmes
      setMovieList(list); //captura dos filmes
      
     
    //PEGANDO O FILME EM DESTAQUE
      let originals = list.filter(i=>i.slug==='originals'); //filtro para pegar somente filmes originais da netflix
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length-1)) //ele vai gerar um numero aleatorio e multiplicar esse numero pela quantidade de itens do originals (FIlmes originais da Netflix)
      let chosen = originals[0].items.results[randomChosen]; //vai pegar um filme aleatorio
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv'); //pega as informações do filme escolhido
      setFeaturedData(chosenInfo); //captura da informação dos filmes
    } 
     
     
     loadAll();                                                            

  },[]);

  useEffect(() => {

    const scrollListener = () =>{
      if(window.scrollY >10){
          setBlackHeader(true)
      }else{
          setBlackHeader(false);
      }

    }

    window.addEventListener('scroll',scrollListener);

    return()=>{
        window.removeEventListener('scroll',scrollListener);
    }
  },[])
   
  return (
    //basicamente, criamos a seção lists com a função map que vai mapear as categorias dos filmes
    //de acordo com o que foi definido na função getHomeList. Portanto o componente item.title vai exibir as categorias
    //dos filmes como foi definido la e o item.items vai exibir os filmes. O key no MovieRow é um item necessário para todo map.
    //caso eu não adicione a key ele não deixará de funcionar porém ocorrerá um erro ao inspecionar o elemento
    <div className="page">

       <Header black={blackHeader}/>

       {featuredData &&
       
       <FeaturedMovie item={featuredData} />
       
       }



        <section className="lists"> 
          {movieList.map((item, key) => (
             <MovieRow key={key} title = {item.title} items= {item.items} />
             ))}

             </section>
            
            </div>
  );
}