import { createContext, ReactNode, useContext, useState } from "react";

interface Blog {
  id: string;
  title: string;
  content: string;
}

interface BlogContextType {
  blogs: Blog[];
  selectedBlog: Blog | null;
  setSelectedBlog: (blog: Blog | null) => void;
  addBlog: (blog: Omit<Blog, "id">) => void;
  updateBlog: (id: string, updatedBlog: Omit<Blog, "id">) => void;
  deleteBlog: (id: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const addBlog = (blog: Omit<Blog, "id">) => {
    const newBlog = { id: crypto.randomUUID(), ...blog };
    setBlogs((prev) => [...prev, newBlog]);
  };

  const updateBlog = (id: string, updatedBlog: Omit<Blog, "id">) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === id ? { id, ...updatedBlog } : blog))
    );
  };

  const deleteBlog = (id: string) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider
      value={{ blogs, selectedBlog, setSelectedBlog, addBlog, updateBlog, deleteBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("useBlog must be used within a BlogProvider");
  return context;
};
