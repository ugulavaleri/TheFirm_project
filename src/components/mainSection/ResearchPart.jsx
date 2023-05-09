import "./main.css";
import image from "../../images/image 4.png";

const Research = () => {
    return (
        <div className="researchContainer">
            <div className="researchTextPart">
                <h2>Our Research &#38; Case Studies</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                </p>
            </div>
            <div className="researchImagePart">
                <div>
                    <h4>Lorem Ipsum is simply</h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took.
                    </p>
                    <button>Read More</button>
                </div>
                <div>
                    <img src={image} alt="ResearchImage" />
                </div>
            </div>
        </div>
    );
};

export default Research;
