import '../../CSS/RightContainerHome.css'
import searchIcon from '../../Image/search.png'
import refreshIcon from '../../Image/refresh-icon-1024x1024-320jsasx.png'
import plusIcon from '../../Image/plusIcon.png'
import sizeIcon from '../../Image/databeIcon.png'
import React, {useState} from 'react'
import imgSrc from '../../Image/codeant_ai_logo.jpeg'
import HomeIcon from '../../Image/HomeIcon.jpg'
import HowToUseIcon from '../../Image/HowTouse.jpg'
import CodeIcon from '../../Image/CodeIcon.jpg'
import logOut from '../../Image/logOutIcon.jpg'
import PhoneIcon from '../../Image/phoneIcon.jpg'
import SettingIcon from '../../Image/SettingIcon.png'
import CloudIcon from '../../Image/CloudIcon.png'
function RightContainerHome(){
    const RepoData=[
        {
            'repoName':'design-system',
            'access':'Public',
            'language':'React',
            'size':'7320 KB',
            'lastUpdate':'Updated 1 day ago'
        },
        {
            'repoName':'codeant-ci-app',
            'access':'Private',
            'language':'Javascript',
            'size':'6871 KB',
            'lastUpdate':'Updated 2 day ago'
        },
        {
            'repoName':'analytics-dashboard',
            'access':'Private',
            'language':'Python',
            'size':'4251 KB',
            'lastUpdate':'Updated 5 day ago'
        },
        {
            'repoName':'mobile-app',
            'access':'Public',
            'language':'Swift',
            'size':'3096 KB',
            'lastUpdate':'Updated 3 day ago'
        },
        {
            'repoName':'e-commerce-platform',
            'access':'Private',
            'language':'Java',
            'size':'6210 KB',
            'lastUpdate':'Updated 6 day ago'
        },
        {
            'repoName':'blog-website',
            'access':'Public',
            'language':'HTML/CSS',
            'size':'1876 KB',
            'lastUpdate':'Updated 4 day ago'
        },
        {
            'repoName':'social-network',
            'access':'Private',
            'language':'PHP',
            'size':'5432 KB',
            'lastUpdate':'Updated 7 day ago'
        },
        {
            'repoName':'movie-villa',
            'access':'Private',
            'language':'Javascript',
            'size':'6871 KB',
            'lastUpdate':'Updated 5 day ago'
        },
        {
            'repoName':'figma-app',
            'access':'Public',
            'language':'React',
            'size':'6870 KB',
            'lastUpdate':'Updated 1 day ago'
        }
    ]
    const [data,setdata]=useState(RepoData)
    const [inpuText,setinputText]=useState('')
    const [isButtonClick,setisButtonClick]=useState('notClicked')
    const [isFixed,setisFixed]=('notFixedContent')
    function handleInput(e){
     setinputText(e.target.value)
    }
    function search(){
      RepoData.map(function(item){
        
        if (item.repoName==inpuText)
        {
            console.log('Call')
            setdata([item])
        }
      })
    }
    function refreshData(){
        setinputText('')
        setdata(RepoData)
    }
    const topContent=[
        {
            'Name':'Repositories',
            'img':HomeIcon
        },
        {
            'Name':'AI Code Review',
            'img':CodeIcon
        },
        {
            'Name':'Cloud Security',
            'img':CloudIcon
        },
        {
            'Name':'How to use',
            'img':HowToUseIcon
        },
        {
            'Name':'Settings',
            'img':SettingIcon
        },
        {
            'Name':'Suport',
            'img':PhoneIcon
        },
    ]
    function checkButtonClickedFalse(){
        setisButtonClick('notClicked')
    }
    function checkButtonClickedTrue(){
        setisFixed('FixedContent')
        setisButtonClick('Clicked')
    }

    return(
        <div className='rightHomeContainer'>
            <div className={isButtonClick}>
            <div className='buttonClickedContent'>
        <div className='buttonClickedHeading'>
            <div className='icon_Name'>
                <div className='bIcon'>
                    <img src={imgSrc} id='BIcon' />
                </div>
                <div className='bName'>CodeAnt AI</div>
            </div>
            <div className='CrossButton' onClick={checkButtonClickedFalse}><h2>X</h2></div>
        </div>
        <div className='userNameBox'>
        <select name='Pradeep Kumar' id='pk1'>
            <option value='pk'>Pradeep Kumar</option>
            <option value='abc'>Abc</option>
            <option value='abc'>Xyz</option>
        </select>
        </div>
        <div className='items'>
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
            <button type='submit'  className='homeLeftbuttons'>
                     <span className='buttonIcon'>
                        <img src={logOut}  id='btnIcons'/>
                     </span>
                     <span className='Title'>Logout</span>
                    </button>
            </div>
        </div>
       
        </div>
        <div className={isFixed}>
            <div className='MobileView'>
        <div className='rightHeadMobile'>
        <div className='icon'>
        <img src={imgSrc} alt='' id='RighticonMobileView'/>
        </div>
        <div className='NameMobileview'>CodeAnt AI</div>
        </div>
        <div className='ThreeLineButton' onClick={checkButtonClickedTrue}>
            <div className='b1'></div>
            <div className='b2'></div>
            <div className='b3'></div>
        </div>
        </div>
        <div className='rightHeading'>
            <div className='leftSection'>
                <span className='titleNameRight'>Repositories</span><br />
               <span> {RepoData.length} total repositories</span>
               <div className='serachField'>
              <button className='searchbtn' onClick={search}><img src={searchIcon} className='searchIcon' /></button>
                <input className='inputBox' onChange={handleInput} value={inpuText} type='search' placeholder='Search Repositories' /></div>
                
            </div>
            <div className='rightSection'>
                <button type='submit' onClick={refreshData} id='Refresh'>
                    <img src={refreshIcon} id='refreshIcon' />
                    Reresh All
                </button>
                <button type='submit' id='AddRepo'>
                    <img src={plusIcon} id='addIcon' />
                    Add Repositories
                </button>
            </div>
        </div>
        </div>
        <div className='RepoList'>
           {data.map(function(item){
            return(
            <>
             <div className='RepoName_Modifier'>
             <div className='repoName'>
                {item.repoName}
             </div>
             <div className='Modifier'>
               {item.access}
              </div>
            </div>
            <div className='language_size_lastUpdated'>
                <div className='langauge'>
                    <div className='languageName'>{item.language}</div>
                    <div className='langaugeDot'></div>
                </div>
                <div className='size'>
                    <img src={sizeIcon} className='sizeIcon' />
                    {item.size}</div>
                <div className='lastUpdated'>{item.lastUpdate}</div>
            </div>
            <hr />
            </>
            )
           })}
           </div>
        </div>
    )
}
export default RightContainerHome