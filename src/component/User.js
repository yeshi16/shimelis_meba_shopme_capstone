// import React, { useEffect, useState } from "react";
// import UserDisplay from "../page/UserDisplay";


// function User() {

//     const [users, setUsers] = useState([])

//     const getUsers = async () => {
//         try {
//             const response = await fetch(`http://localhost:3000/user?timestamp=${new Date().getTime()}`);
//             console.log('Response status:', response.status);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             console.log(data)
//             return data;
//         } catch (err) {
//             console.log('error fetching user')
//         }
//     }

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const data = await getUsers()
//             setUsers(data)

//         }

//         fetchUsers()
//     }, [])

//     console.log('Rendered users:', users);

//     return (
//         <div>

//             {users.map((user, i) => (
//                 <UserDisplay key={i} name={user.name} email={user.email} />
//             ))}

//             {/* {users.length > 0 ? (
//                 users.map((user, i) => (
//                     <UserDisplay key={i} name={user.name} email={user.email} />

//                 ))
//             ) : (
//                 <p>No users found</p>
//             )} */}

//         </div>

//     )
// }

// export default User


// User.js


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
            const response = await fetch('http://localhost:4000/user');
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
