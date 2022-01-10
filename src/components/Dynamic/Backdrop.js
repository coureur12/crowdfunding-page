import classes from "./Backdrop.module.css"

// This component display the light black background

function Backdrop(props){
    return(
        <div className={classes.drop} onClick={props.onCancel} />
    );
}

export default Backdrop;