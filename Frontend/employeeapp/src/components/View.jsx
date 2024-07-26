import { Table, TableCell, TableContainer, TableRow,TableHead, Typography, TableBody, Button } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var [emp, setEmp] = useState([])
    var navigate=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3005/view")
            .then((res) => {
                setEmp(res.data)
            })
            .catch((err) => console.log(err))
        
    })
    const delValue = (id) => {
        console.log(id)
        axios.delete("http://localhost:3005/remove/" + id)
            .then((res) => {
                alert(res.data.message)//message is given in index.js backend
                //to reload window
                window.location.reload()                
            })
        .catch((err)=>console.log(err))
    }
    const updateValue = (val) => {
        console.log("up clicked")
        navigate("/adds",{state:{val}})

        // axios.delete("http://localhost:3005/remove/" + id)
        //     .then((res) => {
        //         alert(res.data.message)//message is given in index.js backend
        //         //to reload window
        //         window.location.reload()
        //     })
        //     .catch((err) => console.log(err))
    }
   
  return (
      <div>
          <br /><br /><br /><br />
          <Typography variant='h3'>View Details</Typography><br /><br /><br />
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                          <TableCell>Department</TableCell>
                          <TableCell>Salary</TableCell>
                          <TableCell>Update</TableCell>
                        
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {emp.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell>{val.Name}</TableCell>
                                  <TableCell>{val.Age}</TableCell>
                                  <TableCell>{val.Dept }</TableCell>
                                  <TableCell>{val.Sal}</TableCell>
                                  <TableCell><Button variant='contained' size='small' color='success' onClick={() => {
                                      updateValue(val)
                                  }}>UPDATE</Button><br /><br />
                                      <Button variant='contained' size='small' color='error' onClick={() => {
                                          delValue(val._id)
                                      }}>DELETE</Button></TableCell>
                              </TableRow>   
                          )
                      })}
                      
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default View