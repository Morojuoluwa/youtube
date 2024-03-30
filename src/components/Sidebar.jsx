
import home from '../assets/home.png'
import game_icon from '../assets/game_icon.png'
import automobiles from '../assets/automobiles.png'
import sports from '../assets/sports.png'
import entertainment from '../assets/entertainment.png'
import tech from '../assets/tech.png'
import music from '../assets/music.png'
import blogs from '../assets/blogs.png'
import news from '../assets/news.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import megan from '../assets/megan.png'
import cameron from '../assets/cameron.png'

const Sidebar = ({sideBar, category, setCategory}) => {
  return (
    <>
    <div className={`bg-white w-[15%] max-md:hidden h-screen fixed top-0 pl-[2%] overflow-y-auto scrol pt-[80px] ${sideBar?'': 'small'}`}>
        <div>
            <div className={`syd-div ${category === 0? 'aktiv': ''}`} onClick={()=>{setCategory(0)}}>
                <img  className='syd'src={home} alt=''/>
                <p>Home</p>
            </div>
            <div className={`syd-div ${category === 20? 'aktiv': ''}`} onClick={()=>{setCategory(20)}}>
                <img className='syd' src={game_icon} alt=''/>
                <p>Gaming</p>
            </div>
            <div className={`syd-div ${category === 2? 'aktiv': ''}`} onClick={()=>{setCategory(2)}}>
                <img className='syd' src={automobiles} alt=''/>
                <p>Automobiles</p>
            </div>
            <div className={`syd-div ${category === 17? 'aktiv': ''}`} onClick={()=>{setCategory(17)}}>
                <img className='syd' src={sports} alt=''/>
                <p>Sports</p>
            </div>
            <div className={`syd-div ${category === 24? 'aktiv': ''}`} onClick={()=>{setCategory(24)}}>
                <img className='syd' src={entertainment} alt=''/>
                <p>Entertainment</p>
            </div>
            <div className={`syd-div ${category === 28? 'aktiv': ''}`} onClick={()=>{setCategory(28)}}>
                <img className='syd' src={tech} alt=''/>
                <p>Technology</p>
            </div>
            <div className={`syd-div ${category === 10? 'aktiv': ''}`} onClick={()=>{setCategory(10)}}>
                <img className='syd' src={music} alt=''/>
                <p>Music</p>
            </div>
            <div className={`syd-div ${category === 22? 'aktiv': ''}`} onClick={()=>{setCategory(22)}}>
                <img className='syd' src={blogs} alt=''/>
                <p>Blogs</p>
            </div>
            <div className={`syd-div ${category === 25? 'aktiv': ''}`} onClick={()=>{setCategory(25)}}>
                <img  className='syd'src={news} alt=''/>
                <p>News</p>
            </div>
            <hr className=' border-0 h-[1px] bg-[#ccc] w-[85%]' />
        </div>
        <div>
            <h3 className=' text-[16px] mb-2 mt-3 color-[#5a5a5a]'>Subscribed</h3>
            <div className='syd-div'>
                <img className='sub-img' src={jack}/>
                <p>pieWie</p>
            </div>
            <div className='syd-div'>
                <img className='sub-img' src={simon}/>
                <p>MrBeast</p>
            </div>
            <div className='syd-div'>
                <img className='sub-img' src={tom}/>
                <p>Justin Bieber</p>
            </div>
            <div className='syd-div'>
                <img className='sub-img' src={megan}/>
                <p>5-minutes tap</p>
            </div>
            <div className='syd-div'>
                <img className='sub-img' src={cameron}/>
                <p>Nas daily</p>
            </div>
        </div>

    </div>

    {sideBar && <div className={`fixed sm:hidden bg-white h-full left-0 w-[40%] top-[40px] pl-[2%] overflow-y-auto scrol pt-[80px]`}>
        <div className='flex flex-col gap-y-5 h-full'>
            <div className={`syd-div ${category === 0? 'aktiv': ''}`} onClick={()=>{setCategory(0)}}>
                <img  className='syd'src={home} alt=''/>
                <p>Home</p>
            </div>
            <div className={`syd-div ${category === 20? 'aktiv': ''}`} onClick={()=>{setCategory(20)}}>
                <img className='syd' src={game_icon} alt=''/>
                <p>Gaming</p>
            </div>
            <div className={`syd-div ${category === 2? 'aktiv': ''}`} onClick={()=>{setCategory(2)}}>
                <img className='syd' src={automobiles} alt=''/>
                <p>Automobiles</p>
            </div>
            <div className={`syd-div ${category === 17? 'aktiv': ''}`} onClick={()=>{setCategory(17)}}>
                <img className='syd' src={sports} alt=''/>
                <p>Sports</p>
            </div>
            <div className={`syd-div ${category === 24? 'aktiv': ''}`} onClick={()=>{setCategory(24)}}>
                <img className='syd' src={entertainment} alt=''/>
                <p>Entertainment</p>
            </div>
            <div className={`syd-div ${category === 28? 'aktiv': ''}`} onClick={()=>{setCategory(28)}}>
                <img className='syd' src={tech} alt=''/>
                <p>Technology</p>
            </div>
            <div className={`syd-div ${category === 10? 'aktiv': ''}`} onClick={()=>{setCategory(10)}}>
                <img className='syd' src={music} alt=''/>
                <p>Music</p>
            </div>
            <div className={`syd-div ${category === 22? 'aktiv': ''}`} onClick={()=>{setCategory(22)}}>
                <img className='syd' src={blogs} alt=''/>
                <p>Blogs</p>
            </div>
            <div className={`syd-div ${category === 25? 'aktiv': ''}`} onClick={()=>{setCategory(25)}}>
                <img  className='syd'src={news} alt=''/>
                <p>News</p>
            </div>
            
        </div>
        

    </div>}
    </>
  )
}

export default Sidebar