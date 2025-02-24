import { Button } from "@/components/ui/button";
import { useBlogStore } from "@/store/useBlogStore";
import { Card, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { blogs , fetchBlog , setSelectedBlog } = useBlogStore();
    const navigate = useNavigate();

    useEffect(() => {
        fetchBlog();
    },[fetchBlog]);

    return(
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">Blogs</h1>
                <Button onClick={() => navigate("/create")}>Create Blog</Button>
            </div>
            <div className="grid gap-4">
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <Card key={blog.id} className="cursor-pointer" onClick={()=>{setSelectedBlog(blog); navigate(`/blog/${blog.id}`)}}>
                            <CardContent>
                                <Typography variant="h5">{blog.title}</Typography>
                                <Typography variant="body2" className="text-gray-500">{blog.content.substring(0,100)}...</Typography>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p>No Blogs Found</p>
                )}
            </div>
        </div>
    )
}

export default Home;