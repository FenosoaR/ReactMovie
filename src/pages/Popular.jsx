import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Popular(){
    const [popular , setPopular] = useState([])

    useEffect(() =>{
        axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' , {
            headers : {
                Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODk4MGEwZGQyODQzMjZkM2Y5MDVlOTQ4M2ZkNDkxYyIsInN1YiI6IjY1YmI4MDlkZDdjZDA2MDE3YjUzZDcwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fWuLr34Jy9CWVnWGbaQ6dYg_h8Cu6FG5kU90JJbvIcs`
            }
        })
        .then((res)=>{
            setPopular(res.data.results)
        })
        .catch((er) => console.log(er))
    }, [])
    return(
        <div>
            <div className="bg-dark">
            <Navbar />
            <div className="container">
          <div className="row">
            {popular.map((value , index) =>(
                 <div className="col" key={index}>
                 <div className="card-image">
                    <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt=""></img>
                 </div>
                 <span style={{textAlign : "center"}}>{value.title}</span>
               </div>
            ))}
          </div>
        </div>
            </div>
        </div>
    )
}