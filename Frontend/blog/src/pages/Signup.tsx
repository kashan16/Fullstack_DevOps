import { Button } from "@/components/ui/button";
import { Card, CardContent, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ name , setName ] = useState("");
    const [ id , setId ] = useState("");

    const handleSignUp = () => {
        alert("Account Created!!! Please Login");
        navigate("/login");
    };

    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <Card className="p-6 w-full max-w-md">
                <CardContent>
                    <h2 className="text-xl font-bold mb-4">SignUp</h2>
                    <TextField fullWidth margin="normal" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField fullWidth margin="normal" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <TextField fullWidth margin="normal" label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <TextField fullWidth margin="normal" label="Id" value={id} onChange={(e) => setId(e.target.value)}/>
                    <Button className="w-full mt-4" onClick={handleSignUp}>SignUp</Button>    
                </CardContent>
            </Card>
        </div>
    );
};

export default SignUp;