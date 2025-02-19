
function Services() {
    return (
        <section className="services" id="services">
        <div className="container flex flex-column-center">
            <h2 className="title">Services</h2>
            <p className="description text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec malesuada tincidunt. Pellentesque lobortis.</p>
            <div className="services-list row flex">
                <div className="service col flex flex-column-center">
                    <img src="./icons/web-development.webp" alt="Web Development Icon"/>
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec </p>
                </div>
                <div className="service col flex flex-column-center">
                    <img src="./icons/web-design.webp" alt="Web Design Icon"/>
                    <h3>Web Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec </p>
                </div>
                <div className="service col flex flex-column-center">
                    <img src="./icons/mobile.webp" alt="App Design Icon"/>
                    <h3>App Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec </p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Services;