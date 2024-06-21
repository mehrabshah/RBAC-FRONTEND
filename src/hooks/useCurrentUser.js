
export const useCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem('User'));
    if (!user) {
        return { isLoading: true, isAuthenticated: null, role: null };
    }

    const isAuthenticated = user.token;
    const role = user.role;

    return { isLoading: false, isAuthenticated, role };
}
