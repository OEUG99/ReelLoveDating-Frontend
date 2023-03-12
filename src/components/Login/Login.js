import './Login.css';


async function handleClick(email, password) {
    console.log(`Button was pressed! - ${email} & ${password}`)
}

function Login() {
    return (
        <div className="container text-center w-25 px-5 ">
            <label htmlFor="emailFormControlInput" className="form-label ">Login</label>
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
export default Login;
