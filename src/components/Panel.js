import classes from './Panel.module.css';
import Modal from './Dynamic/Modal';
import Backdrop from './Dynamic/Backdrop';
import {useState } from 'react'; 



function Panel (props) {

    const getColor = (quantity) => {
        if (quantity === "0") return  ['0.5', '#979797','none'];
        if (quantity < 10) return 'blue';
        return '';
    };

       
    const [ modalIsOpen,setModalIsOpen] = useState(false);

    function openModalHandler() {
      if (props.quantity === "0"){
        setModalIsOpen(false);
      }else{  
        setModalIsOpen(true)
      } 
    }
  
    function closeModalHandler() {
      setModalIsOpen(false);
    }
    
    
    return(
        <div className={classes.card} style={{ opacity: getColor(props.quantity)[0]}}>
            <div className={classes.titleContainer}>
            <h3 className={classes.title}>{props.title}</h3>
            <p className={classes.information}>{props.subtitle}</p>
            </div>
            <div className={classes.textContainer}>
            <p className={classes.text}>{props.text}</p>
            </div>
            <div className={classes.buttonContainer}>
                <div className={classes.quantityContainer}>
                    <p className={classes.quantity}>
                      {props.quantity}  
                    </p>
                    <span className={classes.span}>
                        left
                    </span>
                </div>
                <div className={classes.buttoncontainer}>
                    <button className={classes.button} onClick={openModalHandler}  style={{ backgroundColor: getColor(props.quantity)[1]}}>Select Reward</button>
                </div>
            </div>
            { modalIsOpen && <Modal onConfirm={openModalHandler} onCancel={closeModalHandler}/>}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
        </div>
    );
}
export default Panel;