import { Button } from "@/components/ui/button";
import { useBlogStore } from "@/store/useBlogStore";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { blogs , removeBlog , setSelectedBlog } = useBlogStore();
    const blog = blogs.find((b) => b.id === id);

    if(!blog) return <p className="text-center mt-10">Blog Not Found</p>

    return (
        <div className="container mx-auto p-6">
            <Card>
                <CardContent>
                    <Typography variant="h4" className="font-bold">{blog.title}</Typography>
                    <Typography variant="body1" className="mt-2">{blog.content}</Typography>
                    <div className="mt-4 flex gap-4">
                        <Button onClick={() => {
                            setSelectedBlog(blog);
                            navigate("/create");
                        }}>Edit</Button>
                        <Button variant="destructive" onClick={() => {
                            removeBlog(blog.id);
                            navigate("/");
                        }}></Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default BlogDetail;