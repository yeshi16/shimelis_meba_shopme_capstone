import React from "react";

function UserDisplay({name, email}){

    return(
        <div>
            <h4>Name: {name} </h4>
            <h4>Emial: {email} </h4>
        </div>

    )
}

export default UserDisplay