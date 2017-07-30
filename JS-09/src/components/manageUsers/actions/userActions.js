export function addUser(username) {
    return {
        type: 'ADD',
        username
    }
}

export function deleteUser(user) {
    return {
        type: 'DELETE',
        user
    }
}

export function filterUser(pattern) {
    return {
        type: 'FILTER',
        pattern
    }
}