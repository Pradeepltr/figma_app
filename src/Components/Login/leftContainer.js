import '../../CSS/leftContainer.css'
import imgSrc from '../../Image/codeant_ai_logo.jpeg'
function leftContainer(){
    return(
        <>
        <div className='box1'>
        <div className='boxContentUp'>
         <img id='icon'
         src={imgSrc} />
         <span className='head'>AI to Detect & Autofix Bad Code</span>
         </div> 
         <hr />
         <div className='boxContentDown'>
          <div className='content1'>
          <span className='labelValue'>30+</span><br />
          <span className='label'>Language Support</span>
          </div>
          <div className='content2'>
          <span className='labelValue'>10K+</span><br />
          <span className='label'>Developers</span>
          </div>
          <div className='content3'>
          <span className='labelValue'>100K+</span><br />
          <span className='label'>Hour Saved</span>
          </div>
         </div>
        
     </div>
     <div className='box2'>
         <div className='boxContent'>
             <div className='box2content1'>
             <div className='piechart'>

             </div>
             <div className='labels'>
             <span className='box2label'>Issues Fixed</span><br />
             <span className='box2value'>500K+</span><br /></div>
             </div>
             <div className='box2content2'>
             <span className='upArrow'>&#8593;</span>
             <span className='percent'>14 %</span><br />
             <span className='percentlabel'>This week</span>
         </div>
         </div>
         
     </div>
     </>
    )
}
export default leftContainer