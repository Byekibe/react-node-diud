import { useState, useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from '../context/authContext.jsx';
import moment from 'moment';
import Menu from "./Menu.jsx";

const SingleContent = () => {
    const serverAddress = "http://localhost:7007"
    const location = useLocation()
    const { id } = useParams();
    const postId = location.pathname.split("/")[2]
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [post, setPost] = useState({});
    const [err, setErr] = useState(null)

    const get_post_url = `${serverAddress}/api/posts/${id}`;
    const delete_post_url = `${serverAddress}/api/posts/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(get_post_url);
                setPost(res.data)
            } catch (error) {
               setErr(error) 
            }
        };

        fetchData()
    }, [id]);


    const handleDelete = async () => {
        try {
            await axios.delete(delete_post_url, {
                method: "POST",
                withCredentials: true,
                credentials: "include"
            });
            navigate("/");
        } catch (error) {
            console.log(err);
        }
    }

    return (
        <div className="container single-content mb-5">
            <div className="row">
                <div className="col col-single">
                    <div className="img-holder">
                        <img className="img-fluid img-thumbnail" src={post?.img} />
                    </div>
                    <div className="caption mb-2">
                        {
                            post.userImg && (
                                <div className="img-holder-person">
                                <img 
                                    style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
                                    src={post?.userImg} 
                                    alt=""
                                    className="mt-2"
                                />
                            </div>
                            )
                        }
                        <div className="cap-desc">
                            <div className="desc-words">
                                <h2>{post?.username}</h2>
                                <h3>Posted {moment(post?.date).fromNow()}</h3>
                            </div>
                        {
                            currentUser?.username === post.username && (
                                <div className="alter">
                                    <Link className="links edit" to={`/edit/${id}`} state={post}><FaEdit /></Link>
                                    <BsTrash onClick={handleDelete} className="trash" />
                                </div>
                            )
                        }
                        </div>
                    </div>
                    <div className="title">
                        <h1>{post.title}</h1>
                    </div>
                    <div className="post-body">
                        {post.subTitle}
                    </div>
                </div>
                <div className="col col-aside">
                <h1>Other Posts you may like</h1>
                <div className="row">
                    <div className="col">
                        <Menu cat={post.cat} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleContent;