import classes from './Record.module.css';
import React from 'react';

function Record(props){
    return(
        <div className={classes.recordContainer}>
            <div className={classes.dataContainer}>
                <div className={classes.moneyContainer, classes.valueContainer}>
                    <p className={classes.moneyReceveid, classes.title}>{props.money}</p>
                    <span className={classes.label}>of $100000 backed</span>
                </div>
                <hr />
                <div className={classes.backerContainer, classes.valueContainer}>
                    <p className={classes.backerValue, classes.title}>{props.backer}</p>
                    <span className={classes.label}>total backers</span>
                </div>
                <hr />
                <div className={classes.daysContainer, classes.valueContainer}>
                    <p className={classes.daysValue, classes.title}>{props.day}</p>
                    <span className={classes.label}>days left</span>
                </div>
            </div>
            <div className={classes.bar}>
                <div className={classes.progression}></div>
            </div>
        </div>
    );
}

export default Record;