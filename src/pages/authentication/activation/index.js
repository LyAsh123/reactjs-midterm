import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from '../../../plugins/axios';

function Activation() {
    const params = useParams()
    return (
        <>
            <h1>Activation</h1>
            <Button onClick={() => {
                axios.post('accounts/users/activation/', params).then(response => {
                    if (response.status === 204) {
                        console.log('Activated');
                    }
                })
            }}>Activate</Button>
        </>
    )
}

export default Activation;