import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log('Your form has been submitted')
    };

    return (
        <div className="contact-me">
            <h2>Let keep in touch...</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        <label>Name <sup>*</sup> </label>
                        <input 
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <button disabled={!name} type="submit">Send!</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Contact;