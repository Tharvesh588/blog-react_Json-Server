import "./Nav.css"

function Nav() {
    return (
        <nav>
            <h2 className="logo">Tharvesh.io</h2>
            <ul className="menu">
                <li><a href="#" className="urls">Home</a></li>
                <li><a href="#" className="urls">Blog</a></li>
                <li><a href="#" className="urls">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav