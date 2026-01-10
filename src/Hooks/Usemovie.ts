import { useState } from "react"


interface movie {
  
  show: {
    id:number,
  name: string,
  status: string,
  summary: string,
  premiered: string,
  image?: {medium: string};
  }
  
}



export const useMovie = () => {

    const [movies, setMovies] = useState<movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const apiRequest = async (queryValue:string) => {
        setLoading(true);

        try {

            const request = await fetch(`https://api.tvmaze.com/search/shows?q=${queryValue}`)
            if(!request.ok) throw new Error('something went wrong');
            const data = await request.json();
            setMovies(data);
            
        } catch (error) {
            console.log(error);
            setError('Algo salio mal');
        }finally {
            setLoading(false);
        }
    } 

    return {
    movies,
    loading,
    error,
    apiRequest
};
};



