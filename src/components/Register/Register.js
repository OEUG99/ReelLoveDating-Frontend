import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()

    async function handleClick(username, password) {
        // POST request using fetch inside useEffect React hook

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST',
            },
            body:
                JSON.stringify({
                    "username": username,
                    "password": password,
                })

        }

        let response = await fetch("http://localhost:8001/api/v1/auth/register", requestOptions);

        if (response.ok) {
            let token = await response.json();

            token = token['token']
            // go to paste page using react router dom
            console.log(token);

            // saving JWT token to client
            localStorage.setItem('jwtToken', token);
            navigate('/')

        } else {
            console.log("response not good (sometimes this is because username taken)")
        }
    }


    return (
        <div className="container text-center w-25 px-5 ">
            <label htmlFor="emailFormControlInput" className="form-label ">Register</label>
            <input type="email" className="form-control mb-3 rounded-3" id="emailFormControlInput" placeholder="name@example.com"/>
            <input type="email" className="form-control mb-3 rounded-3" id="passwordFormControlInput" placeholder="Password"/>
            <button className="form-control-sm rounded-3 w-75 mb-3"
                    onClick={() => handleClick(
                        document.getElementById("emailFormControlInput").value,
                        document.getElementById("passwordFormControlInput").value,
                    )}> Next </button>
        </div>
    );
}
export default Register;
