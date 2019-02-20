import React from 'react'

function Form(props) {
    return (
        <div className="formcontainer">
            <div className="form">
                <h1>Send An E-Mail</h1>
                <hr />
                <form>
                    <label>First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="tu nombre, hombre" onChange={props.changeHandler}/>
                    <label>Last Name</label>
                    <input type="text" id="lname" name= "lname" placeholder="your last name" onChange={props.changeHandler}/>
                    <label>Email</label>
                    <input type="text" id="email" name="email" placeholder="your email address por favor" onChange={props.changeHandler}/>
                    <hr />
                    <label >Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." onChange={props.changeHandler}></textarea>

                </form>
                <button onSubmit={props.handleSubmit}>Submit</button>
            </div>
        </div>

    )
}

export default Form;