import { Link } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';

const SingleContent = () => {

    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, id.",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci atque cumque dolor eveniet quidem architecto nesciunt repellat et, earum laborum dolorum delectus amet.",
            img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-1.jpg"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, numquam!",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero accusamus velit hic, repudiandae, et ea asperiores tenetur quaerat numquam aliquid illum perspiciatis atque laboriosam eos? Ipsam et officia fuga laborum?",
            img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-2.jpg"
        },
        {
            id: 3,
            title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, laudantium.",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam facilis error quibusdam ipsam, cupiditate est quisquam dolores expedita consectetur natus sed, corrupti ex officiis cum.",
            img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-3.jpg"
        },
        {
            id: 4,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, enim?",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum animi totam autem id ducimus aperiam adipisci corporis debitis illum.",
            img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-6.jpg"
        },
        {
            id: 5,
            title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, possimus.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium expedita delectus officiis sint ratione quas eveniet nostrum temporibus et odio.",
            img: "https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-5.jpg"
        }
    ]

    return (
        <div className="container single-content mb-5">
            <div className="row">
                <div className="col col-single">
                    <div className="img-holder">
                        <img className="img-fluid img-thumbnail" src="https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-1.jpg" />
                    </div>
                    <div className="caption mb-2">
                        <div className="img-holder-person">
                            <img 
                                style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
                                src="https://storage.googleapis.com/pierre-2023/web-resources/prof-personal/health-1.jpg" 
                                alt=""
                                className="mt-2"
                            />
                        </div>
                        <div className="cap-desc">
                            <div className="desc-words">
                                <h2>Fay Diuds</h2>
                                <h3>Posted 3 days ago</h3>
                            </div>
                            <div className="alter">
                                <Link className="links" to="/"><FaEdit /></Link>
                                <Link className="links" to="/"><BsTrash /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="post-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, possimus cum? 
                            Dolorem, asperiores quae nostrum, dolor ex dolores quisquam numquam esse repellendus
                            in provident hic aperiam alias deserunt minus doloremque. Modi, dignissimos natus 
                            ipsa illo explicabo molestias magni praesentium minima voluptate, doloremque fugiat
                            eaque in quas deleniti quasi, omnis fuga distinctio vero ab! Dolore facere molestias
                            harum quidem ducimus soluta commodi. Ipsam rem cumque excepturi nisi reiciendis
                            ullam dicta reprehenderit illum! Quaerat sint, porro pariatur earum ut nostrum
                            facere, sunt sequi vitae corrupti est iure alias non commodi sed consequuntur
                            velit architecto cumque? Dolor asperiores aut vero eius nobis vel consequuntur
                            rem illo qui itaque repellendus tempora perferendis quod excepturi, quidem
                            nesciunt nihil distinctio iure iusto aliquam placeat quae ullam magni eum.
                            Recusandae commodi cum odit totam illum quo mollitia neque voluptatibus
                            consequatur quidem. Sint adipisci necessitatibus, facere, est nobis, explicabo
                            sequi doloremque molestiae laborum repellendus deleniti ab debitis autem! 
                            Eligendi, porro pariatur? Reiciendis quos nemo quo laboriosam error voluptas,
                            architecto ea eaque suscipit eveniet non debitis aut consectetur harum eum, 
                            eius fuga ducimus minima, qui quod doloribus consequatur. Quaerat fugit ut 
                            accusamus minima error facere molestiae optio illum et cupiditate quae mollitia
                            odio magni, sit minus expedita quibusdam exercitationem unde, dolorum, cumque
                            officia quo incidunt ad. Repudiandae, debitis nulla est, rerum ipsum sint nobis
                            deleniti distinctio molestias aliquam neque possimus nesciunt qui quasi, molestiae
                            facilis accusamus perferendis labore? At voluptas soluta nobis reprehenderit, 
                            exercitationem nesciunt corporis quos nam iste inventore nisi cumque! Quaerat 
                            incidunt amet pariatur quod in assumenda perspiciatis quia eaque animi, dolorem
                            consectetur deleniti et rerum iste esse sit, dolores facere necessitatibus, 
                            unde nulla. Nesciunt corporis voluptatum debitis eveniet aliquid reprehenderit 
                            quaerat omnis voluptatibus doloremque eos distinctio doloribus eum, voluptatem 
                            saepe, quas sequi dolore. Corporis saepe facilis officiis impedit id a corrupti! 
                            Autem sed modi quasi expedita!
                        </p>
                    </div>
                </div>
                <div className="col col-aside">
                    <h1>Other Posts you may like</h1>
                    <div className="row">
                        <div className="col">
                            {
                                posts.map(post => {
                                    return (
                                        <div className="posts ms-4 mt-5">
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
                                                {post.title}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleContent;