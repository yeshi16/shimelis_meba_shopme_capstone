import {Link} from 'react-router-dom'

function Nav() {
    return(
        <div>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/products'>
                <div>Products</div>
            </Link>
        </div>
    )
}

export default Nav