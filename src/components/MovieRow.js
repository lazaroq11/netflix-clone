import React from 'react';
import '../components/MovieRow.css';
//o export default recebe o title e o items que foi definido no Tmdb.js
export default ({title, items}) => {
    return(
       <div>
           <div className="movieRow">
           <h2>{title}</h2>    
           <div className="movieRow--listarea">
               <div className="movieRow--list">
               {items.results.length>0 && items.results.map((item,key )=>(
                    <div key={key} className="movieRow--item">   
                       <img src = {`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                    ))}
                                 
                 </div>
           </div>
       </div>
</div>
    );
}