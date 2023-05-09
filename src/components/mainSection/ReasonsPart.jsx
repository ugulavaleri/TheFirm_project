import "./main.css";
import photo from "../../images/image 3.png";

const Reasons = () => {
    return (
        <div className="midContainer">
            <div className="midSection">
                <div className="midSectionText">
                    <h2>Reason to Choose Us</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries,
                    </p>
                </div>
                <div className="midSectionButtons">
                    <button>Market Research</button>
                    <button>Branding</button>
                    <button>Reporting</button>
                    <button>Data Analysis</button>
                </div>
            </div>
            <div>
                <div className="brandingPart">
                    <div>
                        <img src={photo} alt="brandImage" />
                    </div>
                    <div>
                        <h5>Branding</h5>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reasons;
