export const getToken = () => {
    return sessionStorage.getItem('userToken');
}
export const removeToken = () => {
    sessionStorage.removeItem('userToken');
}
export const setToken = (token: string) => {
    sessionStorage.setItem('userToken', token);
}