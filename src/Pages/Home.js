import LeftContainer from '../Components/Home/leftContainer'
import RightContainer from '../Components/Home/RightContainer'
import '../CSS/Home.css'
function Home(){
    return(
   <>
   <div className='Parent'>
    <div className='leftChild'>
    <LeftContainer />
    </div>
    <div className='rightChild'>
    <RightContainer />
    </div>
   </div>
   </>
    )
}
export default Home