import '../CSS/LogIn.css'
import Leftcontainer from '../Components/Login/leftContainer';
import RightContainer from '../Components/Login/RightContainer';
function LogIn(){
    return(
        <div className='container'>
        <div className='leftContainer'>
        <Leftcontainer />
        </div>
        <div className='rightContainer'>
           
          <RightContainer />
         
        </div>
        </div>
    )
}
export default LogIn;
