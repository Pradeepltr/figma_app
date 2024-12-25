import React, {useState} from 'react'
import '../../CSS/leftContainerHome.css'
import imgSrc from '../../Image/codeant_ai_logo.jpeg'
import HomeIcon from '../../Image/HomeIcon.jpg'
import HowToUseIcon from '../../Image/HowTouse.jpg'
import CodeIcon from '../../Image/CodeIcon.jpg'
import logOut from '../../Image/logOutIcon.jpg'
import PhoneIcon from '../../Image/phoneIcon.jpg'
import SettingIcon from '../../Image/SettingIcon.png'
import CloudIcon from '../../Image/CloudIcon.png'
import { useNavigate } from "react-router-dom";
function LeftContainer(){
    const navigate=useNavigate()
function setRouter(){
    navigate("/")
}
const topContent=[
    {
        'Name':'AI Code Review',
        'img':CodeIcon,
        'functionName':'AICode'
    },
    {
        'Name':'Cloud Security',
        'img':CloudIcon,
        'functionName':'Cloud'
    },
    {
        'Name':'How to use',
        'img':HowToUseIcon,
        'functionName':'HowToUse'
    },
    {
        'Name':'Settings',
        'img':SettingIcon,
        'functionName':'Setting'
    }
]
const downContent=[
       {
        'Name':'Suport',
        'img':PhoneIcon,
       },
]
  const [activeButtom,setActiveButton]=useState('Repo')
function Repo(){
    setActiveButton('Repo')
}


 
    return(
        <>
        <div className='leftHead'>
        <div className='icon'>
        <img src={imgSrc} alt='' id='titleicon'/>
        </div>
        <div className='titleName'>CodeAnt AI</div>
        </div>
        <div className='userBox'>
        <select name='Pradeep Kumar' id='pk'>
            <option value='pk'>Pradeep Kumar</option>
            <option value='abc'>Abc</option>
            <option value='abc'>Xyz</option>
        </select>
        </div>
        <div className='TopButtons'>
                <button type='submit' id='Repo' className='homeLeftbuttons'>
                    <span className='buttonIcon'>
                        <img src={HomeIcon}  id='btnIcons'/>
                     </span>
                     <span className='Title'>Repositories</span>
                </button>
                {
                topContent.map(function(item){
                    return(
                        <>
                        <button type='submit'  className='homeLeftbuttons'>
                     <span className='buttonIcon'>
                        <img src={item.img}  id='btnIcons'/>
                     </span>
                     <span className='Title'>{item.Name}</span>
                    </button>
                        </>
                    )
                })
            }
        </div>
        <div className='downButton'>
            {
                 downContent.map(function(item){
                    return(
                        <>
                        <button type='submit' className='homeLeftbuttons'>
                     <span className='buttonIcon'>
                        <img src={item.img}  id='btnIcons'/>
                     </span>
                     <span className='Title'>{item.Name}</span>
                    </button>
                        </>
                    )
                })
            }
            <br /> <button type='submit' className='homeLeftbuttons' onClick={setRouter}>
                     <span className='buttonIcon'>
                        <img src={logOut}  id='btnIcons'/>
                     </span>
                     <span className='Title'>Logout</span>
                    </button>
        </div>
        </>
    )
}
export default LeftContainer