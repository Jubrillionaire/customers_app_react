import React from 'react'

const Customer = ({customer, grabEditDetails,setEditMode, handleDeleteCustomer}) => {
    const {firstname, lastname, age, phone, email, id} = customer

    const handleEdit = () => {
     grabEditDetails(customer)
     setEditMode(true)
    }
    return (
        <ul>
            <li>First Name: {firstname}</li>
            <li>Last Name: {lastname}</li>
            <li>Age: {age}</li>
            <li>Phone: {phone}</li>
            <li>Email: {email}</li>
            <li className='btns'>
            <button onClick={() => handleDeleteCustomer(id)}>Delete</button> 
            <button onClick={() => handleEdit()}>Edit</button>
            </li>
           
        </ul>

    )
}

export default Customer
