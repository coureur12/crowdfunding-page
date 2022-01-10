import classes from "./Element.module.css";
import ElementPlus from "./ElementPlus";
import React, {useState} from "react";

//This component display the offer in the module 

function Element (props){
        // initial value is `false`
        //this setup the color changer
         const [checked, setChecked] = useState(false);
         const [color,setColor] = useState('1px solid rgba(0, 0, 0, 0.15)');
         const [opacity,setOpacity] = useState('1');

         // The logic to change the colors of the border on click
         const handleChange = () => {
           // Change state to the opposite (to ture) when checkbox changes
           setChecked(!checked && props.quantity > "0");
            if (!checked && props.quantity > "0"){
            setColor('1px solid #3CB3AB');
            }else{
            setColor('1px solid rgba(0, 0, 0, 0.15)');
            }    
        }

        // this reduce the opacity of the offer with a 0 quantity 
        const getOpacity = (quantity) => {
            if (quantity === '0') return  ['0.5','none'];
            return '';
        };
        const getZopacity = (quantity) => {
            if (quantity === 'NULL') return 'none';
            return '';
        };
    


    return (
        <div className={classes.elementContainer} style={{outline:color,border:color,opacity:getOpacity(props.quantity)[0]}} >
            <div className={classes.elementFlexContainer}>
                <div className={classes.checkboxContainer}>
                    <input type="checkbox" className={classes.checkBox} Checked={checked} onClick={handleChange} style={{pointerEvent:getOpacity(props.quantity)[1]}} />
                </div>
            <div className={classes.textContainer}>
                <div className={classes.titleContainer}>
                    <div className={classes.title}>
                        <h2>{props.title}</h2>
                        <p>{props.subtitle}</p>
                    </div>
                    <div className={classes.quantiyContainer}>
                        <p className={classes.quantity} style={{display: getZopacity(props.quantity)}}>{props.quantity}</p>
                        <span className={classes.left} style={{display: getZopacity(props.quantity)}}>left</span>
                    </div>
                </div>
                <div className={classes.Text}>
                    <p>{props.text}</p>
                </div>
                <div className={classes.quantiyContainerMobile}> {/*This div contains the quantity for the mobile version to make easier for the mobile version */}
                        <p className={classes.quantiy} style={{display: getZopacity(props.quantity)}}>{props.quantity}</p>
                        <span className={classes.left} style={{display: getZopacity(props.quantity)}}>left</span>
                    </div>
            </div>
            </div>
            {checked && <ElementPlus onAdd={handleChange} />}
        </div>
    );
}
export default Element;