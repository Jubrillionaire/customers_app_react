import { useEffect, useState } from "react";
import CustomersForm from "./components/CustomersForm";
import CustomerList from "./components/CustomerList";
import "./App.css";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [editCustomer, setEditCustomer] = useState({});
  const [editMode, setEditMode] = useState(false);

  const URL = "https://customers-appv2.herokuapp.com/api/customers";

  const loadData = async () => {
    try {
     
      const response = await fetch(URL);
      const { customers } = await response.json();
      const sortedCustomers = customers.sort((a, b) => a.id - b.id);
      setCustomers(sortedCustomers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  

  const handleEditCustomer = async ({id, age, firstname, lastname, email, phone}) => {

    try {
      const response =await  fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          age,
          email,
          phone
        }),
      });

      const {customer} = await response.json();
      const updatedCustomers = customers.map(i => i.id === customer.id ? customer : i)
      setCustomers(updatedCustomers)
    } catch (err) {
      console.log(err);
    }

  };
  const handleAddCustomer = async ({id, age, firstname, lastname, email, phone}) => {
    try {
      const response =await  fetch(URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          age,
          email,
          phone
        }),
      });

      const {customer} = await response.json();
      setCustomers((OldArr) => [...OldArr, customer])
 
    } catch (err) {
      console.log(err);
    }

  };


  const handleDeleteCustomer = async (id) => {
    try {
      const response =await  fetch(`${URL}/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });

     const filteredCustomers = customers.filter(customer => customer.id !== id)
      setCustomers(filteredCustomers)
 
    } catch (err) {
      console.log(err);
    }

  };


  const grabEditDetails = (customer) => {
    setEditCustomer(customer);
  };

  return (
    <div className="App">
      <h1>Customers App</h1>
      <CustomersForm
        editCustomer={editCustomer}
        handleAddCustomer={handleAddCustomer}
        handleEditCustomer={handleEditCustomer}
        editMode={editMode}
        setEditMode={setEditMode}
        editCustomer={editCustomer}
      />
      <CustomerList
      handleDeleteCustomer={handleDeleteCustomer}
        setEditMode={setEditMode}
        grabEditDetails={grabEditDetails}
        customers={customers}
      />
    </div>
  );
};

export default App;
