import "./Footer.css"
function Footer() {
    return (
        <>
            <footer>
                <div className="f">
                    <h2>Tharvesh.io</h2>
                    <span>Explore the World Of Tharvesh</span>
                </div>
                <div className="f">
                    <h2>Useful Link</h2>
                    <ul>
                        <li><a href="">Terms & Condition</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="f">
                    <h2> Socials </h2>
                    <ul>
                        <li><a href="">Linkedin</a></li>
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Instagram</a></li>
                    </ul>
                </div>
            </footer>
                <center>&copy; Tharvesh.io Since 2024</center>
        </>
    );
}

export default Footer