import { useAuth } from "@/contexts/AuthContext";
import { Button, Card, CardContent, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ id , setId ] = useState("");
    const [ name , setName ] = useState("");

    const handleLogin = () => {
        const user = {
            id : id,
            name : name,
            email : email,
        }
        login(user);
        navigate("/");
    };

    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <Card className="p-6 w-full max-w-md">
                <CardContent>
                    <h2 className="text-xl font-bold mb-4">Login</h2>
                    <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal"/>
                    <TextField fullWidth label="Password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal"/>
                    <TextField fullWidth label="Id" value={id} onChange={(e) => setId(e.target.value)} margin="normal"/>
                    <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} margin="normal"/>                        
                    <Button className="w-full mt-4" onClick={handleLogin}>Login</Button>    
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;