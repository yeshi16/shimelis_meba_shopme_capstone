import React from "react";

function Footer() {

    return (

        <footer className="bootstrap-classes text-center footerCon">
            <div className="container  ">
                <img src="/images/ShopMe_Logo.jpg" alt="Bootstrap" style={{ width: "60px", height: "50px" }} />
                <pre>Data provided by Dummy Json <span>(<a href="https://dummyjson.com/">https://dummyjson.com/</a>)</span>,
                    a free API for retrieving information about various products.
                </pre>
            </div>
        </footer>
    )
}

export default Footer