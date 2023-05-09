import { useEffect, useState } from 'react';
import axios from '../../plugins/axios'

function Application() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('accounts/users/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        }).then(response => {
            setUsers(response.data)
        })
    }, [])
    return (
        <>
            <h1 align="center">
                DASHBOARD
            </h1>
            {
                users.map(obj => <p key={obj.id}>{obj.email}</p>)
            }

        </>
    )
}

export default Application;