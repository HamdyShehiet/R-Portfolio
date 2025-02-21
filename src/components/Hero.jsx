import HireMe from "./buttons/Hire-Me";

function Hero(){
    return(
        <section className="hero" id="home">
        <div className="container grid">
            <div className="info">
                <h1 className="title">Hello<br/> I’m Ridho</h1>
                <p >Freelancer Web Developer</p>
                <HireMe content="Hire Me"/>
            </div>
            <div className="image text-center">
                <img src="/images/user.webp" alt="Person" />
            </div>
        </div>
        </section>
    )
}
export default Hero;