import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../data'
import { useEffect, useState } from 'react'

const Recommended = ({categoryId}) => {

    const [catData, setCatData] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const category = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=30&videoCategoryId=${categoryId}&key=${API_KEY}`
            await fetch(category).then(response=>response.json()).then(data=>setCatData(data.items))
        }
        fetchData()
    },[])
  return (
    <div className=' max-md:hidden sm:basis-[30%]'>
        {catData.map((hitem,index)=>(
            <Link to={`/video/${hitem.snippet.categoryId}/${hitem.id}`}  key={index} className='side-vid'>
                <img src={hitem.snippet.thumbnails.medium.url} alt=''/>
                <div className='vid-info'>
                    <h4>{hitem.snippet.title}</h4>
                    <p>{hitem.snippet.channelTitle}</p>
                    <p>{value_converter(hitem.statistics.viewCount)} Views</p>
                </div>
            </Link >
        ))}
        
        
    </div>
  )
}

export default Recommended