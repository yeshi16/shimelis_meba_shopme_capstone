import React from "react";

function Footer() {

    return (
        <>
            <footer className="bootstrap-classes text-center text-secondary">
                <div className="container border border-secondary-emphasis p-3">
                <img src="/images/ShopMe_Logo.jpg" alt="Bootstrap" style={{ width: "60px", height: "50px"}} />
                    <pre>Data provided by Dummy Json <span>(<a href="https://dummyjson.com/">https://dummyjson.com/</a>)</span>,
                        a free API for retrieving information about various products.
                    </pre>
                </div>
            </footer>
            <br />
            <br />
            <br />
        </>
    )
}

export default Footer