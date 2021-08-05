import { useState } from 'react'

function Contact() {

    const [value, setValue] = useState({
        name: '',
        email: '',
        message: ''
    })

    function handleChange(event) {
        const { name, value } = event.target
        setValue((prevState => ({
            ...prevState,
            [name]: value
        })))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(value)
    }

    return (
        <section id="contact" className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <div className="my-form">
                        <h2>Contact Form</h2>
                        <form onSubmit={handleSubmit} >
                            <div className="form-group my-3">
                                <input
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group my-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="EMAIL"
                                    name="email"
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="form-group my-3">
                                <textarea
                                    className="form-control"
                                    placeholder="MESSAGE"
                                    name="message"
                                    rows="3"
                                    onChange={handleChange}
                                    required></textarea>
                            </div>
                            <button type="submit" className="btn custom-btn">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact