
import './App.css'

function App() {

  const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user)
    fetch('http://localhost:5000/users',{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        alert('user Added')
        form.reset();
      }
    })
  }

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <label htmlFor="name">Name:</label><br />
        <input 
          type="text" 
          id="name" 
          name="name" 
         
          required 
        /><br />
        
        <label htmlFor="email">Email:</label><br />
        <input 
          type="email" 
          id="email" 
          name="email" 
          
          required 
        /><br />
        
        <input type="submit" value="Add User" />
      </form>

      
    </>
  )
}

export default App
