import { Card, CardContent, TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "./ui/button";

const BlogForm = ({ onSubmit } : { onSubmit : ( data : {
    title : string , content : string
}) => void }) => {
    const [ title , setTitle ] = useState("");
    const [ content , setContent ] = useState("");

    const handleSubmit = () => {
        onSubmit({ title , content });
        setTitle("");
        setContent("");
    };

    return (
        <Card className="p-4 w-full max-w-lg">
            <CardContent>
                <TextField fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} margin="normal"/>
                <TextField fullWidth multiline rows={4} label="Content" value={content} onChange={(e) => setContent(e.target.value)} margin="normal"/>
                <Button className="w-full mt-4" onClick={handleSubmit}>Submit</Button>
            </CardContent>
        </Card>
    );
};

export default BlogForm;