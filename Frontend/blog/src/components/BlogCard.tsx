import { Button } from "@/components/ui/button";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Blog {
  id: string;
  title: string;
  content: string;
};

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Card className="mb-4">
      <CardContent>
        <Typography variant="h6">{blog.title}</Typography>
        <Typography variant="body2">{blog.content.substring(0, 100)}...</Typography>
        <Button asChild className="mt-2">
          <Link to={`/blogs/${blog.id}`}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
