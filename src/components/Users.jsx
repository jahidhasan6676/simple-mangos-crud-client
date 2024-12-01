import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const usersData = useLoaderData();
    const [users, setUsers] = useState(usersData);
    const handleDelete = id =>{
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert("users successfully delete");
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining)
            }
        })
    }
    return (
        <div>
            <h3>User Data</h3>
            <div>
                {
                    users.map(user => <p key={user._id}> {user.name}: {user.email}: {user._id}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    
                    <button onClick={()=>handleDelete(user._id)}>X</button>
                    </p>)
                }
            </div>
            
        </div>
    );
};

export default Users;