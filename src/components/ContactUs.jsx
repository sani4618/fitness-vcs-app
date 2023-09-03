import React, { useState } from 'react'
import Header from './Header'

const ContactUs = () => {
    const[newcontact,setNewContact]=useState(
        {
            Name:"",
            email:"",
            phnum:"",
            message:""
            
        }
    )
    const readNewContact=(contact)=>{
        setNewContact({...newcontact,[contact.target.name]:contact.target.value})
    }
    const displayNewContact=()=>{
        console.log(newcontact)
    }
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <p><b><i><center><h2>Get In Touch</h2></center></i></b></p>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" name="Name" value={newcontact.Name} className="form-control" onChange={readNewContact} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" name="email" value={newcontact.email} id="" className="form-control" onChange={readNewContact}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone Number</label>
                            <input type="text" name="phnum" value={newcontact.phnum} className="form-control" onChange={readNewContact}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Message</label>
                            <textarea name="message" value={newcontact.message} id="" cols="30" rows="5" className="form-control" onChange={readNewContact} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button onClick={displayNewContact} className="btn btn-danger">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs