import React, { useEffect, useState } from 'react'

const CustomersForm = ({handleEditCustomer, handleAddCustomer, editMode, editCustomer, setEditMode}) => {

    const [formData, setFormData] = useState({})

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const resetForm = () => {
        setFormData({age: "", firstname: "", lastname: "", phone: "", email: ""})
    }

useEffect(() => {
   setFormData(editCustomer)
   if(editMode === false){
    resetForm()
   }
}, [handleEditCustomer])

    const handleSubmit = e => {
        e.preventDefault();
        if(editMode){
            setFormData(editCustomer)
             handleEditCustomer(formData)
             setEditMode(false)
        }else{
            handleAddCustomer(formData);
        }
    
    }
const {age, firstname, lastname, phone, email} = formData
    return (
            <form onSubmit={handleSubmit}>
                <h2>Customer's form</h2>
                <input required type='text' value={firstname}  name='firstname' placeholder='enter first name' onChange={handleChange} />
                <input required type='text' value={lastname} name='lastname' placeholder='enter last name' onChange={handleChange} />
                <input required type='number' value={age} name='age' placeholder='enter age' onChange={handleChange} />
                <input required type='email' value={email} name='email' placeholder='enter email' onChange={handleChange} />
                <input required type='number' value={phone} name='phone' placeholder='enter phone' onChange={handleChange} />
                <input className='submit'  type='submit' value={editMode ? 'Edit Customer' : 'Add customer'} />
            </form>
    )
}

export default CustomersForm
