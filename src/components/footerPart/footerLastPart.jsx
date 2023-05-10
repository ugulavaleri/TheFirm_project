import "./footer.css";

const mapAndFooter = () => {
    return (
        <div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11948.62224350367!2d45.02151845!3d41.
                5225709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1670767978670!5m2!1sen!2sge"
                    width="800"
                    height="600"
                    className="iframe"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="footerLastContainer">
                <h1>TheFirm</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Solutions</a>
                        </li>
                        <li>
                            <a href="#">Cases</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default mapAndFooter;
