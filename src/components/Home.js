import classes from './Home.module.css'

const Home = props => {
    return (
        <div className={classes.homePage}>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <button>Get Started</button>
        <button>Watch Trailer</button>
        </div>
    )
};

export default Home;