// import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import { MdEditor, MdCatalog } from 'md-editor-rt';
import 'md-editor-rt/lib/preview.css';
import 'md-editor-rt/lib/style.css';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const scrollElement = document.documentElement;

const Write = () => {
    const navigate = useNavigate();
    const state = useLocation().state;
    const [text, setText] = useState(state?.desc || "");
    const [title, setTitle] = useState(state?.title || "");
    const [subTitle, setSubTitle] = useState(state?.subTitle || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");
    const [imgUrl, setImgUrl] = useState(state?.img || "");
    const [id] = useState('preview-only');
    const serverAddress = "http://localhost:7007"

    const addOpts = {
        method: "POST",
        withCredentials: 'true',
    }

    const updateOpts = {
        method: "PUT",
        withCredentials: 'true'
    }

    const inputs = {
        title, subTitle, desc: text, cat, img: imgUrl
    }

    const addInputs = {
        title, subTitle, desc: text, cat, img: imgUrl, date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    }

    const update_post_url = `${serverAddress}/api/posts/${state?.id}`;
    const add_post_url = `${serverAddress}/api/posts`;
    const handleClick = async () => {
        if (text !== "" && title !== "" && subTitle !== "" && imgUrl !=="" && cat !== "") {
            try {
                state? await axios.put(update_post_url, inputs, updateOpts) : await axios.post(add_post_url, addInputs, addOpts);
                setTitle("");
                setText("")
                setImgUrl("")
                setCat("") 
                navigate("/")
            } catch (error) {
                console.log(error)
            }
            
        } else {
            alert("Please fill out the fields!!")
        }

    }

    return (
        <div className="container write-container">
            <div className="row">
                <div className="col col-editor">
                <form className='mb-4'>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="floatingTitle" 
                        placeholder="Title" 
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="floatingTitle">Title</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="floatingSubTitle" 
                        placeholder="subTitle" 
                        required
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                    />
                    <label htmlFor="floatingTitle">Sub Title</label>
                </div>

                <div className="form-floating mb-3 textarea">
                    {/* <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea> */}
                    {/* <MDEditor
                        value={blogBody}
                        onChange={setBlogBody}
                        className='textarea-editor'
                    /> */}

                    <>
                        <MdEditor
                            modelValue={text}
                            theme="dark"
                            language="en-US"
                            onChange={(modelValue) => {setText(modelValue)}}
                        />
                        <MdCatalog editorId={id} scrollElement={scrollElement} />
                    </>

                    {/* <MDEditor.Markdown source={blogBody} style={{ whiteSpace: 'pre-wrap' }} />                  */}
                </div>
                </form>
                </div>
                <div className="col col-aside-right">
                    <div className="row">
                        <div className="publish">
                            <h1>Publish</h1>
                        <span>
                            <b>Status: </b> Draft
                        </span>
                        <span>
                            <b>Visibility: </b> Public
                        </span>
                        <input 
                            style={{ display: "none" }} 
                            type="file" 
                            name="" 
                            id="file" 
                            onChange={e => setFile(e.target.files[0])} 
                        />
                        <label className='file' htmlFor="file">Upload Image</label>
                        <div className="buttons mb-5">
                            <button className='draft'>Save as a draft</button>
                            <button className='update'>Publish</button>
                        </div>
                        <input 
                            className='mb-5 url-box'
                            type="text"
                            placeholder='Enter image URL https://exampleimage.com: Step number 1'
                            name="url_img"
                            id='url_img'
                            value={imgUrl}
                            onChange={e => setImgUrl(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="row">
                        <div className="categories">
                            <ul>
                                <li>
                                    <div className="form-check">
                                    <input className="form-check-input" type="radio" checked={cat === "food"} name="cat" id="food" value="food" onChange={e => setCat(e.target.value)} />
                                    <label className="form-check-label" htmlFor="food">
                                        Food
                                    </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                    <input className="form-check-input" type="radio" checked={cat === "diet"} name="cat" id="diet" value="diet" onChange={e => setCat(e.target.value)} />
                                    <label className="form-check-label" htmlFor="diet">
                                        Diet
                                    </label>
                                    </div>
                                </li>
                                <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" checked={cat === "nutrition"} name="cat" id="nutrition" value="nutrition" onChange={e => setCat(e.target.value)} />
                                    <label className="form-check-label" htmlFor="nutrition">
                                        Nutrition
                                    </label>
                                    </div>
                                </li>
                                <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" checked={cat === "exercise"} name="cat" id="exercise" value="exercise" onChange={e => setCat(e.target.value)} />
                                    <label className="form-check-label" htmlFor="exercise">
                                        Exercise
                                    </label>
                                    </div>
                                </li>
                                <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" checked={cat === "health"} name="cat" id="health" value="health" onChange={e => setCat(e.target.value)} />
                                    <label className="form-check-label" htmlFor="health">
                                        Health
                                    </label>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row container mb-5 button-post">
                <button onClick={handleClick} className='btn-custom' type="submit">Post</button>
            </div>
        </div>
    );
};

export default Write;