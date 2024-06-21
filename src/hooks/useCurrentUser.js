import { useAuth } from "../context/AuthContext";

export const useCurrentUser = () => {
    const { authState } = useAuth();
    
    if (!authState) {
        return { isLoading: true, isAuthenticated: null, role: null };
    }

    const isAuthenticated = !!authState.token;
    const role = authState.role;

    return { isLoading: false, isAuthenticated, role };
}
