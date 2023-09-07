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
    const location = useLocation()
    const { id } = useParams();
    const postId = location.pathname.split("/")[2]
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [post, setPost] = useState({});
    const [err, setErr] = useState(null)

    const get_post_url = `http://localhost:7007/api/posts/${id}`
    const delete_post_url = `http://localhost:7007/api/posts/${id}`

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




    // const posts = [
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, id.",
    //         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci atque cumque dolor eveniet quidem architecto nesciunt repellat et, earum laborum dolorum delectus amet.",
    //         img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-1.jpg"
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, numquam!",
    //         desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero accusamus velit hic, repudiandae, et ea asperiores tenetur quaerat numquam aliquid illum perspiciatis atque laboriosam eos? Ipsam et officia fuga laborum?",
    //         img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-2.jpg"
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, laudantium.",
    //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam facilis error quibusdam ipsam, cupiditate est quisquam dolores expedita consectetur natus sed, corrupti ex officiis cum.",
    //         img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-3.jpg"
    //     },
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, enim?",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum animi totam autem id ducimus aperiam adipisci corporis debitis illum.",
    //         img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-6.jpg"
    //     },
    //     {
    //         id: 5,
    //         title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, possimus.",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium expedita delectus officiis sint ratione quas eveniet nostrum temporibus et odio.",
    //         img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-5.jpg"
    //     }
    // ]

    // 


//     <div className="col col-aside">
//     <h1>Other Posts you may like</h1>
//     <div className="row">
//         <div className="col">
//             {
//                 filteredPosts.map(post => {
//                     return (
//                         <div key={post.id} className="posts ms-4 mt-5">
//                             <div className="img-holder">
//                                 <img className="img-fluid" src={post.img} alt="" />
//                             </div>
//                             <div className="caption">
//                                 <img className="mt-2" style={{height: "50px", width: "50px", borderRadius: "50%" }} src={post.img} alt="" />
//                                 <div className="caps-desc">
//                                     <h3>Jeez</h3>
//                                     <h3>Posted 3 days ago</h3>
//                                 </div>
//                             </div>
//                             <div className="post-title">
//                                 <Link to={`/post/${post.id}`}>
//                                     {post.title}
//                                 </Link>
//                             </div>
//                         </div>
//                     );
//                 })

                
//             }
//         </div>
//     </div>
// </div>