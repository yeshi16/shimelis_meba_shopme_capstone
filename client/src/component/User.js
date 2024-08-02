import React, { useEffect, useState } from "react";
import UserDisplay from "../page/UserDisplay";

function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            console.log(data);
            setUsers(data);
        }

        fetchUsers();
    }, [])

    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:4000/usersss');
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log('Error fetching users');
        }
    };

    return (
        <div>
             <h1>User Data</h1>
            {
                users.map((user, i) => (
                    <UserDisplay key={i} name={user.name} email={user.email} />
                ))
            }
        </div>
    );
}

export default User;
