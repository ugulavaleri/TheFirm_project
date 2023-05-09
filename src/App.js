import "./App.css";
import Reasons from "./components/mainSection/ReasonsPart";
import Research from "./components/mainSection/ResearchPart";
import Blogs from "./components/mainSection/blogs";

import Img1 from "./images/blogPic1.png";
import Img2 from "./images/blogPic2.png";
import Img3 from "./images/blogPic3.png";

import ProfilePic1 from "./images/userImage1.png";
import ProfilePic2 from "./images/userImage2.png";
import ProfilePic3 from "./images/userImage3.png";

function App() {
    const blogsObject = [
        {
            image: Img2,
            title: "Lorem Ipsum is ",
            desc: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
            userImage: ProfilePic3,
            userName: "Alex Liones",
            time: "28,Aug 2020, 09:48:00",
        },
        {
            image: Img1,
            title: "Lorem Ipsum is ",
            desc: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
            userImage: ProfilePic2,
            userName: "Alex Liones",
            time: "28,Aug 2020, 09:48:00",
        },
        {
            image: Img3,
            title: "Lorem Ipsum is ",
            desc: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
            userImage: ProfilePic1,
            userName: "Alex Liones",
            time: "28,Aug 2020, 09:48:00",
        },
    ];
    return (
        <>
            <Reasons />
            <Research />
            <Blogs blogObj={blogsObject} />
        </>
    );
}

export default App;
