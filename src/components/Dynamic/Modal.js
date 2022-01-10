import classes from "./Modal.module.css";
import Element from "./Element";
import { useEffect } from 'react';

function Modal (props){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
   
    function cancelHandler(){
        props.onCancel();
    }

    return(
        <div className={classes.modalComponent}>
            <button className={classes.cross} onClick={cancelHandler}>
                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fill-rule="evenodd" opacity=".4"/>
                </svg>
            </button>
            <div className={classes.texContainer}>
                <h1 className={classes.Title}>Back this project</h1>
                <p className={classes.text}>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>
            </div>
            <Element title="Pledge with no reward" subtitle="" text="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email." quantity="NULL" />
            <Element title="Bamboo Stand" subtitle="Pledge $25 or more" text="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email." quantity="101" />
            <Element title="Black Edition Stand" subtitle="Pledge $75 or more" text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included." quantity="64" />
            <Element title="Mahogany Special Edition" subtitle="Pledge $200 or more" text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. 
 Shipping is included." quantity="0" />
        </div>
    );
}
export default Modal;