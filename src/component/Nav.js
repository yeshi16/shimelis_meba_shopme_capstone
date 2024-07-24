import {Link} from 'react-router-dom'

function Nav(props) {
    return(
        <div>
            <link to='/'>
                <div>Home</div>
            </link>
            <link to='/products'>
                <div>Products</div>
            </link>
        </div>
    )
}

export default Nav