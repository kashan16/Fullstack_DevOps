import { useAuthStore } from "@/store/useAuthStore";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
    const { user , logout } = useAuthStore();

    return (
        <nav className="flex justify-between p-4 bg-gray-800 text-white">
            <Link to="/" className="text-xl font-bold">MyBlog</Link>
            <div>
                {user ? (
                    <>
                        <Link to="/dashboard" className="mr-4">Dashboard</Link>
                        <IconButton onClick={logout} color="error">
                            <LogoutIcon/>
                        </IconButton>
                    </>
                ):(
                <>
                    <Button asChild>
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link to="/signup">Signup</Link>
                    </Button>
                </>
            )}
            </div>
        </nav>
    );
};

export default Navbar;