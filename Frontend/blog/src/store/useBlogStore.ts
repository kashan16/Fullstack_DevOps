import { createBlogs, deleteBlog, getBlogs, updateBlog } from "@/services/blogService";
import { create } from "zustand";

interface Blog {
    id : string;
    title : string;
    content : string;
}

interface BlogState {
    blogs : Blog[];
    selectedBlog : Blog | null;
    setSelectedBlog : ( blog : Blog | null ) => void;
    fetchBlog : () => Promise<void>;
    addBlog : ( title : string , content : string ) => Promise<void>;
    editBlog : ( id : string , title : string , content : string ) => Promise<void>;
    removeBlog : ( id : string ) => Promise<void>;
}

export const useBlogStore = create<BlogState>((set) => ({
    blogs : [],
    selectedBlog : null,
    setSelectedBlog : (blog) => set({ selectedBlog : blog }),

    fetchBlog : async () => {
        const blogs = await getBlogs();
        set({ blogs });
    },

    addBlog : async (title  : string , content : string) => {
        const newBlog = await createBlogs(title,content);
        set((state) => ({ blogs : [...state.blogs , newBlog]}));
    },

    editBlog : async (id : string, title : string ,content : string) => {
        const updatedBlog = await updateBlog(id,title,content);
        set((state) => ({
            blogs : state.blogs.map((blog) => (blog.id === id ? updatedBlog : blog)),
        }));
    },

    removeBlog : async (id : string) => {
        await deleteBlog(id);
        set((state) => ({ blogs : state.blogs.filter((blog) => blog.id !== id)}));
    },
}))