function About(){
    return(
        <section className="about-me" id="about">
            <div className="container grid">
                <h2 className="title">About Me</h2>
                <div className="details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec malesuada tincidunt. Pellentesque lobortis metus quis ipsum mattis, vitae laoreet est posuere. Mauris bibendum eros massa, sit amet tempor sem lobortis non. </p>
                    <div className="btns i-flex">
                    <a href="index.html" className="hire-me">Hire Me</a>
                    <a href="index.html" >View CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;