import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
const appLink="http://127.0.0.1:8000/api/viewall/"
const Fitnessview = () => {
  const[viewfitnessreg,setFitnessReg]=useState([])

  useEffect(
    ()=>{
      FetchFitnessData()
    }
  )

  const FetchFitnessData=()=>{
    axios.get(appLink).then(
      (response)=>{
        setFitnessReg(response.data)
      }
    )
  }
  return (
    <div>

<Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">


                <table class="table">
                  <thead>
                  <tr>
                  <th scope="col">FirstName</th>
                  <th scope="col"> MiddleName</th>
                  <th scope="col">LastNamer</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Date Of Birth</th>
                  <th scope="col">Department</th>
                  <th scope="col">user Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Confirm Password</th>
                  </tr>
                  </thead>
           
                  <tbody>
                     {
                      viewfitnessreg.map(
                        (value,index)=>{
                          return <tr>
                               
                          <td>{value.firstName}</td>
                          <td>{value.middleName}</td>
                          <td>{value.lastName}</td>
                          <td>{value.gender}</td>
                          <td>{value.dateOfBirth}</td>
                          <td>{value.department}</td>
                          <td>{value.userName}</td>
                          <td>{value.email}</td>
                          <td>{value.password}</td>
                          <td>{value.confirmPassword}</td>
                          
                          </tr>
                        }
                      )
                      
                     }

                  
                  </tbody>
                  </table>
                    

                </div>

                

            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Fitnessview