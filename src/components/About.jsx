import HireMe from "./buttons/Hire-Me";
import ViewCv from "./buttons/View-CV";

function About(){
    return(
        <section className="about-me" id="about">
            <div className="container grid">
                <h2 className="title">About Me</h2>
                <div className="details">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec malesuada tincidunt. Pellentesque lobortis metus quis ipsum mattis, vitae laoreet est posuere. Mauris bibendum eros massa, sit amet tempor sem lobortis non. </p>
                    <div className="btns i-flex">
                    <HireMe content="Hire Me"/>
                    <ViewCv content="View CV"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;