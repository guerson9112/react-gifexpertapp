import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs( category );

    /* const [images, setImages] = useState([]);

    

    useEffect( () => {
        getGifs( category ).then( setImages ) //then( imgs =>  setImages (imgs)) // es lo mismo
    }, [category])

     */
    
    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading...</p> }

            <div  className = "card-grid" >
                
                    { images.map( img => (
                                <GifGridItem 
                                key = { img.id }
                                {...img} 
                                />
                            )
                        )
                    }
            </div>

        </>

    )
}
