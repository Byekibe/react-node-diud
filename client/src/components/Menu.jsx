import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = ({ cat }) => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams()
    // console.log(id)
    const get_posts_url = `http://localhost:7007/api/posts/?cat=${cat}`;
    // const filteredPosts = posts.map(post => {
    //     if (post.id !== id) {
    //         console.log(post)
    //         return post
    //     }
    // });
    // console.log(filteredPosts)
    useEffect(() => {
        window.scrollTo({ top:"700px", left: 0, behavior: "smooth" });
    }, [])
    const goUp = () => {
       window.scrollTo({ top: "700px", left:0, behavior: "smooth" });
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(get_posts_url);
                // console.log(res)
                setPosts(res.data)
            } catch (error) {
               console.log(error)
            }
        };

        fetchData()
    }, [cat]);
    return (
        <>
            {
                posts.map(post => {
                    return (
                        <div key={post.id} className="posts mt-5">
                            <div className="img-holder">
                                <img className="img-fluid" src={post.img} alt="" />
                            </div>
                            <div className="caption">
                                <img className="mt-2" style={{height: "50px", width: "50px", borderRadius: "50%" }} src={post.img} alt="" />
                                <div className="caps-desc">
                                    <h3>Jeez</h3>
                                    <h3>Posted 3 days ago</h3>
                                </div>
                            </div>
                            <div className="post-title">
                                <Link onClick={goUp} to={`/post/${post.id}`}>
                                    {post.title}
                                </Link>
                            </div>
                        </div>
                    );
                })

                
            }
        </>
    );
};

export default Menu;