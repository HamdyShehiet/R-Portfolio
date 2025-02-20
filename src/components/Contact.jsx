function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="title text-center">Contact</h2>
                <div className="contact-info grid">
                    <div className="form-box">
                        <h3>Send Me Message</h3>
                        <form method="post" className="flex">
                            <div className="user-details flex align-center">
                            <input type="email" name="email" id="email" placeholder="Email" required />
                            <input type="text" name="name" id="name" placeholder="Name" required />
                            </div>
                            <textarea name="message" id="message" placeholder="Message" required></textarea>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>
                    <div className="social-links">
                        <h3>Send Me Message</h3>
                        <ul>
                            <li><a href="/"><img src="/icons/whatsapp.png" alt="Whatsapp Icon" /><span>089522231321</span></a></li>
                            <li><a href="/"><img src="/icons/instagram.png" alt="Instagram Icon" /><span>satriawan.ridho</span></a></li>
                            <li><a href="/"><img src="/icons/facebook.png" alt="Facebook Icon" /><span>Ridho Satriawan</span></a></li>
                            <li><a href="/"><img src="/icons/linkedin.png" alt="LinkedIn Icon" /><span>Ridho Satriawan</span></a></li>
                            <li><a href="/"><img src="/icons/github.webp" alt="Github Icon" /><span>ridhosatriawan</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default Contact;