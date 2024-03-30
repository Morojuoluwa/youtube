import { useParams } from "react-router-dom"
import PlayVideo from "../components/PlayVideo"
import Recommended from "../components/Recommended"
const Video = () => {
  const{ videoId, categoryId} = useParams()
  return (
    <div className=" bg-[#f9f9f9] px-[2%] py-5 max-md:px-[5%] flex justify-between flex-wrap">
       <PlayVideo videoId={videoId}/>
       <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video