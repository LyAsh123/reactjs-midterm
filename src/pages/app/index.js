import { Button, Card, CardContent, FormControl, Grid, TextField } from "@mui/material";
import { useEffect, useState } from 'react';
import axios from '../../plugins/axios'
import "./App.css"
import logotitle from "./title-removebg-preview.png"
import logout from "./logout.png"
import userprof from "./userProfile.jpg"
import viand from "./viand.jpg"
import { useNavigate } from "react-router-dom";

function Application() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();
    const [comments, setComments] = useState([])
    const [ucomment, setUserComment] = useState("")
    const [prof, setProfile] = useState(false);
    /*
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('accounts/users/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        }).then(response => {
            setUsers(response.data)
        })
    }, [])*/

    function state() {
        if (prof) {
            setProfile(false)
        }
        else {
            setProfile(true)
        }

    }

    const handleCommenChange = (event) => {
        setUserComment(event.target.value);
    }

    const handleComments = () => {
        if (comments.length < 4) {
            setComments([...comments, ucomment]);
            setUserComment("")
        }
        else {
            comments.splice(0, 1);
            setComments([...comments, ucomment]);
            setUserComment("")
        }
    }
    return (
        <div className='home'>
            {prof ? (<div className="halfboard3">
                <img src={userprof} className="post2" />
                <h2>Name: Dave Balido</h2>
                <h2>Email: dave@gmail.com</h2>
                <h1 className="backb" onClick={state}>Back</h1>
            </div>) : (<div className='halfboard'>
                {prof ? (<div className="halfboard3"></div>) : (<div></div>)}
                <img src={viand} className="post" />
                <p style={{ marginLeft: 200 }}>Posted by: Ashly Galagnara</p>
                <input type='text' className='inputd' onChange={handleCommenChange} />
                <Button className="button1" onClick={handleComments}>Post Comment</Button>
                {comments.map((comment, index) => (<p className="cm" key={index}><img src={userprof} className="userp" onClick={state} />: {comment}</p>))}
            </div>)}

            <div className='halfboard2'>
                <img src={logotitle} className='logot' />
                <h1 align="center">

                </h1>
                {
                    users.map(obj => <p key={obj.id}>{obj.email}</p>)
                }
                <img src={logout} className='logoutb' onClick={() => {
                    navigate("/")
                }} />

            </div>
        </div>
    )
}

export default Application;