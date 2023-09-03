import React, { useState } from 'react'

const Register = () => {
    const[newRegister,setNewRegister]=useState(
        {
            firstName:"",
            middleName:"",
            lastName:"",
            gender:"",
            dateOfBirth:"",
            department:"",
            userName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    )
    const readNewReg=(read)=>{
        setNewRegister({...newRegister,[read.target.name]:read.target.value})
    }
    const displayNewReg=()=>{
        console.log(newRegister)
    }
  return (
    <div>

<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" name="firstName" value={newRegister.firstName} className="form-control" onChange={readNewReg} />
                            </div>

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Middle Name</label>
                                <input type="text" name="middleName" value={newRegister.middleName} className="form-control" onChange={readNewReg}/>
                            </div>

                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Last Name</label>
                                <input type="text" name="lastName" value={newRegister.lastName} className="form-control" onChange={readNewReg} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="gender"  id="" value={newRegister.gender} className="form-control" onChange={readNewReg} >
                                    <option value="select">Select</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="other">Others</option>
                                </select>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date of birth</label>
                                <input type="date" name="dateOfBirth" value={newRegister.dateOfBirth} id="" className="form-control" onChange={readNewReg} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Department</label>
                                <select name="department" id="" value={newRegister.department} className="form-control" onChange={readNewReg} >
                                    <option value="select">Select</option>
                                    <option value="Frontdeskassociate">Front desk associate</option>
                                    <option value="Nutritionconsultant">Nutrition consultant</option>
                                    <option value="Frontdeskmanager">Front desk manager</option>
                                    <option value="Healthandwellnesscoach">Health and wellness coach</option>
                                    <option value="Membershipcoordinator">Membership coordinator</option>
                                    <option value="Fitnessconsultant">Fitness consultant</option>
                                    <option value="Personaltrainer">Personal trainer</option>
                                </select>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form label">User name</label>
                                <input type="text" name="userName" value={newRegister.userName} className="form-control" onChange={readNewReg} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" name="email" value={newRegister.email}  id="" className="form-control" onChange={readNewReg}/>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" value={newRegister.password} id="" className="form-control" onChange={readNewReg} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" name="confirmPassword" value={newRegister.confirmPassword}  id="" className="form-control" onChange={readNewReg} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={displayNewReg}  className="btn btn-danger">Register</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href="/">Back to home</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


    </div>
  )
}

export default Register