import classes from './EndMessage.module.css';
import { useEffect } from 'react';

// This component contains the submit button after the click it's refresh the page 

function EndMessage (){
    useEffect(() => {
        window.scrollTo(0, 50)
      }, [])
    return(
        <div className={classes.mainContainer}>
            <div className={classes.imgContainer}>
                <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                    <circle fill="#3CB3AB" cx="32" cy="32" r="32"/>
                    <path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24"/></g>
                </svg>
            </div>
            <div className={classes.textContainer}>
                <h1>Thanks for your support!</h1>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            </div>
            <div className={classes.btnContainer}>
                <input type="submit" className={classes.btn}  value="Got it!" />
            </div>
        </div>
        
    )
}

export default EndMessage;