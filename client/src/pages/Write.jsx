import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';

const Write = () => {
    const [blogBody, setBlogBody] = useState("");
    const [title, setTitle] = useState("");

    const handleClick = () => {
        if (blogBody !== "" && title !== "") {
            console.log(blogBody, title);
            setBlogBody("");
            setTitle("");
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

                <div className="form-floating mb-3 textarea">
                    {/* <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea> */}
                    <MDEditor
                        value={blogBody}
                        onChange={setBlogBody}
                        className='textarea-editor'
                    />
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
                        <input style={{ display: "none" }} type="file" name="" id="file" />
                        <label className='file' htmlFor="file">Upload Image</label>
                        <div className="buttons">
                            <button className='draft'>Save as a draft</button>
                            <button className='update'>Update</button>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="categories">
                            <ul>
                                <li>
                                    <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="food" />
                                    <label className="form-check-label" htmlFor="food">
                                        Food
                                    </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="diet" />
                                    <label className="form-check-label" htmlFor="diet">
                                        Diet
                                    </label>
                                    </div>
                                </li>
                                <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="nutrition" />
                                    <label className="form-check-label" htmlFor="nutrition">
                                        Nutrition
                                    </label>
                                    </div>
                                </li>
                                <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="exercise" />
                                    <label className="form-check-label" htmlFor="exercise">
                                        Exercise
                                    </label>
                                    </div>
                                </li>
                                <li>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="health" />
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