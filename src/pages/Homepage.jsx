
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { useState } from 'react'

const Homepage = ({sideBar}) => {
  const [category, setCategory] = useState(0)
  return ( 
    <div className='flex  '>
        <Sidebar sideBar={sideBar} category={category} setCategory={setCategory}/>
        <div className={`${sideBar? '':'large'} max-sm:w-full sm:flex-1 bg-[#f9f9f9] max-sm:px-5 pl-[17%] pr-[2%] py-5`}>
          <Feed category={category}/>
        </div>
    </div>
  )
}

export default Homepage