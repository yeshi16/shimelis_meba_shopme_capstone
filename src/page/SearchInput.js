import React from "react";

function SearchInput({ search, setSearch, getProducts }) {

  

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a product"
            />
            <button onClick={() => getProducts(search)}>Search</button>

        </div>
    )
}

export default SearchInput




// function SearchInput({ search, setSearch, getProducts }) {



//     useEffect(() => {
//         let timer;
//         if (search === '') {
//             setButtonText('Search');
//         } else {
//             timer = setTimeout(() => {
//                 setButtonText('Clear');
//             }, 5000); // 5 seconds delay
//         }

//         // Cleanup the timer when the effect runs again or component unmounts
//         return () => clearTimeout(timer);
//     }, [search]);

//     const handleButtonClick = () => {
//         if (buttonText === 'Clear') {
//             setSearch('');
//             getProducts('');
//         } else {
//             getProducts(search);
//         }
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search for a product"
//             />
//             <button onClick={handleButtonClick}>{buttonText}</button>
//         </div>
//     );
// }

// export default SearchInput;
