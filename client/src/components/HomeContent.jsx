import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import AllPosts from './AllPosts.jsx';
import axios from 'axios';

const HomeContent = () => {
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

    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState();
    const serverAddress = "http://localhost:7007"

    const cat = useLocation().search

    const get_post_url = `${serverAddress}/api/posts${cat}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(get_post_url);
                setPosts(res.data)
            } catch (error) {
                console.log(error)
               setErr(error) 
            }
        };

        fetchData()
    }, [cat])

    return (
        <div className="row my-row" style={{ marginTop: "5em" }}>
            {
                posts?.map(post => {
                    return (
                        <AllPosts key={post.id} post={post} />
                    )
                })
            }
        </div>
    );
};

export default HomeContent;