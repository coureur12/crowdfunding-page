import classes from './Savebtn.module.css';
import React,{ useState } from 'react';

function Savebtn(){

  //Let's to redo it in a more efficient way by using a useState(false || true) and depending on the case adding style with an Array.
  
    const [color,setColor]=  useState('rgba(243, 248, 248, 1)');
    const [textColor,setTextColor]=useState('black');
    const [svgColor,setSvgColor]=useState("#2F2F2F");
    const [svgPath,setSvgPath]=useState("#b1b1b1");
  
  function zeubi(){
    if (color === "rgba(203, 203, 203, 1)" && textColor === "" && svgColor ==="#2F2F2F" && svgPath ==="#b1b1b1"){
      setColor("rgba(243, 248, 248, 1)");
      setTextColor("rgba(20, 122, 115, 1)");
      setSvgColor("rgba(20, 122, 115, 1)");
      setSvgPath("white");
    }else{
      setColor("rgba(203, 203, 203, 1)");
      setTextColor("");
      setSvgColor("#2F2F2F");
      setSvgPath("#b1b1b1");
    } 
  }

    return(
    <button className={classes.saveBtn} onClick={zeubi}>
        <div  style={{background:color,color:textColor}} className={classes.book}> 
            <div className={classes.round}>
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill={svgColor} cx="28" cy="28" r="28"/><path fill={svgPath} d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
            </div>
            <div className={classes.btnText}>Bookmark</div>
        </div>
    </button>
    );
}

export default Savebtn;