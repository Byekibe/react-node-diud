import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

const AllPosts = ({ post }) => {

    const [fontColor, setFontColor] = useState(false);
    // console.log(fontColor);

    const style = fontColor? {color: "#66af6b"} : {color: "#555"}
    // color ? {color: "#66af6b"} : {color: "#555"}  

    return (
        <div className="column col col-sm-12 col-md-12 col-lg-12">
            <div className="right-aside">
                <Link to={`/post/${post.id}`}>
                    <img className="img-fluid" src={post.img} alt={post.desc} />
                </Link>
            </div>
            <div className="left-aside">
                <h1>
                    <Link style={style} className="links" to={`/post/${post.id}`}>{post.title}</Link>
                </h1>
                <p>{post.desc}</p>
                <button 
                    className="mb-5"
                    onMouseEnter={() => setFontColor(true)}
                    onMouseLeave={() => setFontColor(false)}
                >
                    <Link className="link" to={`/post/${post.id}`}>Read more <BsArrowRight /></Link>
                </button>
            </div>
        </div>
    );
};

export default AllPosts;