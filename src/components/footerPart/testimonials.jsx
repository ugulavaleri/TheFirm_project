import "./footer.css";

import Person1 from "../../images/Ellipse 31.png";
import Person2 from "../../images/Ellipse 33.png";
import Person3 from "../../images/Ellipse 34.png";
import Person4 from "../../images/Ellipse 35.png";
import Person5 from "../../images/Ellipse 36.png";

const testimonials = () => {
    return (
        <div className="testimonialsContainer">
            <h1>Our Testimonials</h1>
            <div>
                <div className="imageDiv">
                    <img src={Person2} alt="" />
                    <img src={Person3} alt="" />
                    <img src={Person1} alt="" />
                    <img src={Person5} alt="" />
                    <img src={Person4} alt="" />
                </div>
                <div>
                    <p className="TestimonialsText">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took type scrambled it to make a
                        type specimen book. It has survived not only five
                        centuries,
                    </p>
                    <p className="companyTitle">
                        <strong>Jenny Wilson | </strong>Digital Agency
                    </p>
                </div>
            </div>
        </div>
    );
};

export default testimonials;
