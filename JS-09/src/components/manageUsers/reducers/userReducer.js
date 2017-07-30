const initState = {
    countId: 1,
    users: [],
    filterPattern: '',
};

function userReducer(state = initState, action) {
      switch (action.type) {
        case 'ADD': {
            let name = action.username;
            if (state.users.filter(u => u.username === name).length){
                alert('User already exists');
                return state
            }
            let users = [...state.users];
            let user = {
                userId: state.countId,
                username: name,
                show: true,
            };
            users.push(user);
            let nextId = state.countId + 1;
            return {...state, countId: nextId, users};
        }
        case 'DELETE': {
            let users = [...state.users];
            users = users.filter(u => u.userId !== action.user.userId);
            return {...state, users}
        }
        case 'FILTER': {
            let pattern = action.pattern.toLowerCase();
            let users = [...state.users];
            let filtered = users.map((u) => {
                u.show = u.username.toLowerCase().includes(pattern);
                return u
            });
            return {...state, users: filtered}
        }
        default:
            return state
    }
}

export default userReducer