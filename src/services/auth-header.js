function AuthHeader() {
    const jwt = JSON.parse(localStorage.getItem('user')).token
    return jwt ? { Authorization: 'Bearer ' + jwt } : {};
}

export default AuthHeader;