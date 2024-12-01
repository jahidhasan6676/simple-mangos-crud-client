
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const mango = { name, email };
    console.log(mango);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(mango)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          form.reset();
          alert("users added successfully")
        }
      })
  }


  return (
    <>

      <h1>Simple crud Mangos collection</h1>
      <Link style={{marginLeft:"600px"}} to="/users">Users</Link>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>


    </>
  )
}

export default App
