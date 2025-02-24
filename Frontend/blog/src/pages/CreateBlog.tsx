import BlogForm from "@/components/BlogForm";
import { useBlogStore } from "@/store/useBlogStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const { selectedBlog , addBlog , editBlog } = useBlogStore();
    const navigate = useNavigate();
    const [ title , setTitle ] = useState("");
    const [ content , setContent ] = useState("");

    useEffect(() => {
        if(selectedBlog) {
            setTitle(selectedBlog.title);
            setContent(selectedBlog.content);
        }
    },[selectedBlog]);

    const handleSubmit = async () => {
        if(selectedBlog) {
            await editBlog(selectedBlog.id,title,content);
        } else {
            await addBlog(title,content);
        }
        navigate("/");
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">{selectedBlog ? "Edit Blog" : "Create Blog"}</h1>
            <BlogForm onSubmit={handleSubmit}/>
        </div>
    )
}

export default CreateBlog