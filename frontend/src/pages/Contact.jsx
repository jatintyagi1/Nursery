import "../styles/Contact.css";

const ContactPage = () => {

    const onSubmit = (event) => {
        event.preventDefault()
        const BACKEND_URL = import.meta.env.VITE_API_URL;
        console.log(BACKEND_URL)
        console.log('hello')
    }

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <h1>Contact Us</h1>
                <p>
                    We&apos;d love to hear from you! Please fill out the form below and we will
                    get back to you as soon as possible.
                </p>
                <form className="contact-form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
