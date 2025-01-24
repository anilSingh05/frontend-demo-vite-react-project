
function ContactMe() {
    return <section id='contact' className='contact-section'>
        <h2>Contact Me</h2>
        <p>
            If you have any questions or want to work together, feel free to contact me.
        </p>
        <form className='contact-form' action='#' style={{ display: 'flex', flexDirection: 'column' }}>
            <input type='text' placeholder='Your Name' />
            <input type='email' placeholder='Your Email' />
            <textarea placeholder='Your Message'></textarea>
            <button type='submit'>Send Message</button>
        </form>
    </section>;
}

export default ContactMe;