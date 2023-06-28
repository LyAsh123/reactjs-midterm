import { Button, Container, Grid, TextField } from "@mui/material"
import { useState } from "react"
import axios from '../../../plugins/axios';
import { useNavigate } from "react-router-dom";


function Register() {
    const [account, setAccount] = useState({
        "email": "",
        "username": "",
        "password": "",
        "re_password": "",
        "first_name": "",
        "last_name": "",
        "birthdate": null,
        "gender": ""
    })
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <Grid container spacing={2} style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item md={4}></Grid>
                    <Grid item md={4}>
                        <h1>Fill in Information</h1>
                        <div style={{ paddingBottom: 3 }}>
                            <TextField fullWidth label="Email" variant="outlined" onChange={(event) => {
                                setAccount({
                                    ...account,
                                    email: event.target.value
                                })
                            }} />
                        </div>
                        <div style={{ paddingBottom: 3 }}>
                            <TextField fullWidth label="Username" variant="outlined" onChange={(event) => {
                                setAccount({
                                    ...account,
                                    username: event.target.value
                                })
                            }} />
                        </div>
                        <div style={{ paddingBottom: 3 }}>
                            <TextField fullWidth label="Password" variant="outlined" type="password" onChange={(event) => {
                                setAccount({
                                    ...account,
                                    password: event.target.value
                                })
                            }} />
                        </div>
                        <div style={{ paddingBottom: 3 }}>
                            <TextField fullWidth label="Confirm" variant="outlined" type="password" onChange={(event) => {
                                setAccount({
                                    ...account,
                                    re_password: event.target.value
                                })
                            }} />
                        </div>
                        <div style={{ paddingBottom: 3 }}>
                            <TextField fullWidth label="FirstName" variant="outlined" onChange={(event) => {
                                setAccount({
                                    ...account,
                                    first_name: event.target.value
                                })
                            }} />
                        </div>
                        <div style={{ paddingBottom: 3 }}>
                            <TextField fullWidth label="LastName" variant="outlined" onChange={(event) => {
                                setAccount({
                                    ...account,
                                    last_name: event.target.value
                                })
                            }} />
                        </div>

                        <div style={{ paddingBottom: 3 }}>
                            <TextField fullWidth label="BirthDate" variant="outlined" onChange={(event) => {
                                setAccount({
                                    ...account,
                                    birthdate: event.target.value
                                })
                            }} />
                        </div>
                        <div style={{ paddingBottom: 3 }}>
                            <TextField fullWidth label="Gender" variant="outlined" onChange={(event) => {
                                setAccount({
                                    ...account,
                                    gender: event.target.value
                                })
                            }} />
                        </div>
                        <Button fullWidth variant="outlined" onClick={() => {
                            axios.post('accounts/users/', account).then(response => {
                                if (response.status === 201) {
                                    console.log('Success')
                                }
                            })
                        }}>Register</Button>
                        <Button variant="contained" style={{ backgroundColor: '#42B72A' }} size="" onClick={() => {
                            navigate("/")
                        }}>
                            back
                        </Button>
                    </Grid>
                    <Grid item md={4}></Grid>
                </Grid>
            </Container>
        </>

    )
}

export default Register