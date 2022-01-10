import classes from "./ElementPlus.module.css";
import EndMessage from "./EndMessage";
import Backdrop from "./Backdrop";
import { useState } from 'react';

// This component display the form with the price input and continue button  

function ElementPlus(props){
    const [ modalIsOpen,setModalIsOpen] = useState(false);

    function openModalHandler() {
      setModalIsOpen(true);
    }
  
    function closeModalHandler() {
      setModalIsOpen(false);
    }
    
    return(
        <div className={classes.plusContainer}>
            <form className={classes.FormFlexBox} >
                <p>
                Enter your pledge
                </p>
                <div className={classes.inputContainer}>
                    <label data-domain="$">
                        <input type="number" name="name" min={props.minValue} className={classes.inputNumber} />
                    </label>
                    <input type="" value="Continue" className={classes.btnInput} onClick={openModalHandler} />
                </div>
                {modalIsOpen && <EndMessage onConfirm={openModalHandler} onCancel={closeModalHandler}/>}
                {modalIsOpen && <Backdrop />}
            </form>
            
        </div>
    );
}

export default ElementPlus;