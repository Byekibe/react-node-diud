import { useState } from "react";

const AllPosts = ({ post }) => {

    const [fontColor, setFontColor] = useState(false);
    // console.log(fontColor);

    const style = fontColor? {color: "#66af6b"} : {color: "#555"}
    // color ? {color: "#66af6b"} : {color: "#555"}  

    return (
        <div className="column col col-sm-12 col-md-12 col-lg-12">
            <div className="right-aside">
                <img className="img-fluid" src={post.img} alt={post.desc} />
            </div>
            <div className="left-aside">
                <h1 style={style}>{post.title}</h1>
                <p>{post.desc}</p>
                <button 
                    className="mb-5"
                    onMouseEnter={() => setFontColor(true)}
                    onMouseLeave={() => setFontColor(false)}
                >
                    Read more
                </button>
            </div>
        </div>
    );
};

export default AllPosts;