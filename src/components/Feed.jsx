// eslint-disable react-hooks/exhaustive-deps;
import { Link } from 'react-router-dom'
import { value_converter } from '../data'
import { useEffect, useState } from 'react'
import moment from 'moment/moment'

const Feed = ({category}) => {
    const [matt,setMatt] = useState([])
    

    useEffect(()=>{
        const fetchMovieData = async () =>{
            const video_URL = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${category}&key=${import.meta.env.VITE_API_KEY} `
    
            await fetch(video_URL)
            .then(response =>response.json())
            .then(data =>setMatt(data.items))
        }
        fetchMovieData();
    },[category])
  return (
    <div className='grid grid-cols-feed gap-x-4 gap-y-[30px] mt-4'>
        {matt.map((item, index)=>{
            return(
                <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className=''>
                    <img className='card-img' src={item.snippet.thumbnails.medium.url} alt=''/>
                    <h2 className='htu'>{item.snippet.title}</h2>
                    <h3 className='htree'>{item.snippet.channelTitle}</h3>
                    <p className='text-[14px]'>{value_converter(item.statistics.viewCount)} views &bull;{moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
            )
        })}
         
    </div>
    
  )
}

export default Feed