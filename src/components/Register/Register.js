import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()

    async function handleClick(email, password) {
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
                    "email": email,
                    "password": password,
                })

        }

        let response = await fetch("http://localhost:8000/api/auth/register", requestOptions);

        if (response.ok) {
            response.text().then(text => {
                console.log('Response text:', text);
                try {
                    let token = text

                    // saving JWT token to client
                    localStorage.setItem('jwtToken', token);
                    navigate('/');
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                }
            });
        } else {
            console.log("response not good (sometimes this is because email taken)");
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
