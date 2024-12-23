import React, {useState} from 'react'
import '../../CSS/RightContainer.css'
import imgSrc from '../../Image/codeant_ai_logo.jpeg'
import github from '../../Image/GitHub.png'
import gitlab from '../../Image/gitlab.png'
import azure from '../../Image/azur.png'
import bitbucket from '../../Image/bitbucket.webp'
import keyIcon from '../../Image/key-icon.jpg'
function RightContainer(){
    const SAAS_Data=[
        {
            'imgSrc':github,
             'msg': 'Sign in with Github'
        },
        {
            'imgSrc':bitbucket,
             'msg': 'Sign in with Bitbucket'
        },
        {
            'imgSrc':azure,
             'msg': 'Sign in with Azure Devops'
        },
        {
            'imgSrc':gitlab,
             'msg': 'Sign in with GitLab'
        }
    ]
    const Self_Hosted_Data=[
        {
            'imgSrc':gitlab,
             'msg': 'Self Hosted Github'
        },
        {
          'imgSrc':keyIcon,
          'msg': 'Sign in with SSO'
        }
    ]
    const [buttonData,setButtonData]=useState(SAAS_Data)
    const [activeButtom,setActiveButton]=useState('SAAS')
    function setDataSAAS(){
        setButtonData(SAAS_Data)
        setActiveButton('SAAS')
        console.log(buttonData)
    }
    function setDataSELF(){
        setButtonData(Self_Hosted_Data)
        setActiveButton('Self_Hosted')
        console.log(buttonData)
    }

    return(
       <div>
       <div className='box'>
        <div className='rightHead'>
        <div className='icon'>
        <img src={imgSrc} alt='' id='Righticon'/>
        </div>
        <div className='Name'>CodeAnt AI</div>
        </div>
        <h1 className='message'>Welcome to CodeAnt AI</h1>
        <div className='buttons'>
            <div className='btn1'> <button type='submit' onClick={setDataSAAS} className='optionButtons' id={activeButtom}>SAAS</button></div>
            <div className='btn2'> <button type='submit' onClick={setDataSELF} className='optionButtons' id={activeButtom}>Self Hosted</button></div>
        </div>
        <div className='logiWithData'>
            {buttonData.map(function(item){
                return(
                    <div className='btnContent'>
                    <button type='submit' className='btns'>
                        <div className='loginButtonContents'>
                        <span className='btnImageData'>
                        <img src={item.imgSrc} className='btnImage'/>
                        </span>
                        <span className='btnMsg'>{item.msg}</span>
                        
                        </div>
                    </button>
                </div>
                )
            })}
            
        </div>
        <p>By signing up you agree to the <b>Privacy Policy.</b></p>
       </div>
       
       </div>
    )
}

export default RightContainer