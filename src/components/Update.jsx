import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loader = useLoaderData();

    const handleUpdateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);

        fetch(`http://localhost:5000/users/${loader._id}`,{
            method:"PUT",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <h2>Update user name {loader.name}</h2>

            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" defaultValue={loader?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loader?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default Update;