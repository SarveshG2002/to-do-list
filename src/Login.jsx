import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        if(email=="admin@gmail.com" && password == "1234"){
            console.log("Login Successsfull");
            navigate('/dashboard');
        }else{
            console.log("Username Or Password Wrong")

        }
    }


    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="remember" />
                                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
