
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'

import { useEffect, useState } from 'react'
import { API_KEY, value_converter } from '../data'
import moment from 'moment/moment'


const PlayVideo = ({videoId}) => {

    const [apiData, setApiData] = useState(null)
    const [channelData, setChannelData] = useState(null)
    const [korment, setKorment] = useState([])

    useEffect(()=>{
        const fetchItemData = async() =>{
            const item_url =  `https:youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&id=${videoId}&key=${API_KEY}`
    
            await fetch(item_url).then(response=>response.json()).then(data=>setApiData(data.items[0]))
        }
        fetchItemData()
    }, [videoId])

    useEffect(()=>{
        const fetchDetails = async() =>{
            const channelDetails = `https:youtube.googleapis.com/youtube/v3/channels?part=snippet&part=contentDetails&part=statistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`

            await fetch(channelDetails).then(response=>response.json()).then(data =>setChannelData(data?.items[0]))

            const corment = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&part=replies&videoId=${videoId}&key=${API_KEY}`
             await fetch(corment).then(response=>response.json()).then(data=>setKorment(data.items))
        }
        fetchDetails()
    },[apiData])

    // useEffect(()=>{
    //     const fetchComments = async() =>{
            
    //         // })
  return (
    <div className=' max-md:basis-[100%] max-md:w-full basis-[69%]'>

        <iframe className='w-full h-[37vw] max-md:w-full max-md:h-[50vw' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h3 className='mt-[10px] font-semibold text-[22px]'>{apiData?.snippet?.title}</h3>
        <div className='flex items-center justify-between max-md:px-0 flex-wrap mt-[10px] text-[14px] text-[#5a5a5a]'>
            <p>{value_converter(apiData?.statistics.viewCount)} &bull; {moment(apiData?.snippet.publishedAt).fromNow()}</p>
            <div className=' flex '>
                <span className=' inline-flex items-center ml-[15px] max-md:ml-0 max-md:mr-[15px] max-md:mt-[15px]'><img className='w-5 mr-3' src={like} alt=''/>{value_converter(apiData?.statistics.likeCount)}</span>
               
                <span className=' inline-flex items-center ml-[15px] max-md:ml-0 max-md:mr-[15px] max-md:mt-[15px]'><img className='w-5 mr-3' src={share} alt=''/>share</span>
                <span className=' inline-flex items-center ml-[15px] max-md:ml-0 max-md:mr-[15px] max-md:mt-[15px]'><img className='w-5 mr-3' src={save} alt=''/>share</span>
            </div>
        </div>
        <hr className='border-0 h-[1px] bg-[#ccc] my-[10px]' />
        <div className=' flex items-center mt-5'>
            <img className=' w-10 rounded-[50%] mr-4' alt='' src={channelData?.snippet.thumbnails.default.url}/>
            <div className=' flex flex-col flex-1 leading-4'>
                <p className='text-[#000] font-semibold text-[18px]'>{apiData?.snippet.channelTitle}</p>
                <span className=' text-[13px] text-[#5a5a5a]'>{value_converter(channelData?.statistics.subscriberCount)}</span>
            </div>
            <button className=' bg-red-600 text-[#fff] py-2 px-[30px] border-0 outline-0 rounded-[4px] cursor-pointer'>Subscribe</button>
        </div>
        <div className=' max-md:px-8 pl-[55px] my-[15px]'>
            <p className=' text-[14px] mb-[5px] text-[#5a5a5a]'>{apiData?.snippet.description.slice(0,250)}</p>
            <hr />
            <h4 className=' text-[#5a5a5a] text-[14px] mt-[15px]'>{value_converter(apiData?.statistics.commentCount)} comments</h4>
           {korment.map((comm, index)=>(
                <div key={index} className=' flex my-5  items-center overflow-hidden '>
                    <img className=' w-[35px] rounded-[50%] mr-[15px]' src={comm.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=''/>
                    <div>
                        <h3 className=' text-[14px] mb-[2px]'> {comm.snippet.topLevelComment.snippet.authorDisplayName}<span className=' text-[12px] text-[#5a5a5a] font-medium'>1 day ago</span></h3>
                        <p>{comm.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className=' flex items-center my-2 text-[14px]'>
                            <img  className='  w-5 rounded-[0] mr-[5px]' src={like} alt=''/>
                            <span className='mr-5 text-[#5a5a5a]'>{value_converter(comm.snippet.topLevelComment.snippet.likeCount)}</span>
                            <img  className='  w-5 rounded-[0] mr-[5px]' alt='' src={dislike}/>
                        </div>
                    </div>
                </div>   
           ))}
            
        </div>
    </div>
  )
}

export default PlayVideo