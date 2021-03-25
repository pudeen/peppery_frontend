const host = 'http://127.0.0.1:8000';

const getUsername = () => {
    return localStorage.getItem('username');
}

const getToken = () => {
    return localStorage.getItem('token');
}

const getSkills = () => {
    let skills = localStorage.getItem('skills');
    return skills.split(',');
}

const clearLocalStorage = () => {
    localStorage.clear('username');
    localStorage.clear('email');
    localStorage.clear('token');
    localStorage.clear('skills');
}

export { host, 
    getUsername, 
    clearLocalStorage,
    getToken,
    getSkills,
};