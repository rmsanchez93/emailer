import React from 'react'

function Form(props) {
    return (
        <div className="formcontainer">
            <div className="form">
                <h1>Send An E-Mail</h1>
                <hr />
                <form>
                    <label>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="tu nombre, hombre" />
                    <label>Last Name</label>
                    <input type="text" id="fname" name="lastname" placeholder="your last name" />
                    <label>Email</label>
                    <input type="text" id="fname" name="firstname" placeholder="your email address por favor" />
                    <hr />
                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

                </form>
                <button>Submit</button>
            </div>
        </div>

    )
}

export default Form;