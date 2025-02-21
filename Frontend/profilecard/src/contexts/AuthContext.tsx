import { createContext, ReactNode, useContext, useState } from "react";

type UserRole = "admin" | "user";

type AuthContextType = {
    role : UserRole;
    setRole : (role : UserRole) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children } : { children : ReactNode }) => {
    const [ role , setRole ] = useState<UserRole>("user");
    
    return (
        <AuthContext.Provider value={{ role , setRole}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}


