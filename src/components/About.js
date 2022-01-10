import classes from './About.module.css';
import Panel from './Panel';


function About(){
    return(
        <div className={classes.mainContainer}>
            <div className={classes.mainTitleContainer}>
                <h2 className={classes.mainTitle}>About this project</h2>
            </div>
            <div className={classes.mainTextContainer}>
                <p className={classes.mainText}>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                <br />
                <br />
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            </div>
            <div className={classes.panelContainer}>
                <div className="panel">
                <Panel title="Bamboo Stand" text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list." quantity="101">
                </Panel>
                </div>
                <div className="panel">
                <Panel title="Black Edition Stand" text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included." quantity="64">
                </Panel>
                </div>
                <div className="panel">
                <Panel title="Mahogany Special Edition" text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included. " quantity= "0">
                </Panel>
                </div>
            </div>
        </div>
    );
}

export default About;