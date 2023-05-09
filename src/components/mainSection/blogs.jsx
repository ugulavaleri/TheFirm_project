import "./main.css";

const blogs = (props) => {
    return (
        <div className="blogContainer">
            <h1 className="blogsHeadline">Our Blogs</h1>
            <div className="blogParts">
                {props.blogObj.map((e) => (
                    <div className="blogItem">
                        <div>
                            <img
                                src={e.image}
                                alt="photos"
                                className="photos"
                            />
                        </div>
                        <div className="descriptionPart">
                            <h3>{e.title}</h3>
                            <p className="text">{e.desc}</p>
                            <div className="profileStats">
                                <div>
                                    <img src={e.userImage} alt="" />
                                    <p className="username">{e.userName}</p>
                                </div>
                                <div>
                                    <p className="time">{e.time}</p>
                                </div>
                            </div>
                            <div className="btnDiv">
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default blogs;
