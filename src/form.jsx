import  { useState } from 'react';
import './form.css'
const Form = () => {
    const [formData, setFormData] = useState({
      name: '',
      address: '',
      contact: '',
      email: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
 


    const postData =async(e)=>{
      e.preventDefault();
         const {name , address, contact, email} = formData; 

         if(name &&address &&contact && email){
          const res = await fetch(
            "https://firstform-172af-default-rtdb.firebaseio.com/reactform.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
               name,
               address,
               contact,
               email,
            }),
            }
               );
         
               if(res){
                 setFormData({
         
                   name: '',
                   address: '',
                   contact: '',
                   email: ''
                 });
                 alert("Data stored successfully");
               }
         }
         else{
           alert("Please fill all the fields");
         }

    };



    return (
      <>
      <div className="form-container">
        <form method="POST"  >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
      
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <button type="submit"onClick={postData} >Submit</button>
        </form>
      </div>
    </>
  )
};
export default Form