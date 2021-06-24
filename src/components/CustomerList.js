import React from 'react'
import Customer from './Customer'

const CustomerList = ({customers, grabEditDetails, setEditMode, handleDeleteCustomer}) => {


    return (
        <div className="customers">
             {customers.map(customer => <Customer handleDeleteCustomer={handleDeleteCustomer} customer={customer} setEditMode={setEditMode} grabEditDetails={grabEditDetails} key={customer.id}/>) }
        </div>
    )
}

export default CustomerList
