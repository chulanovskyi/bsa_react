const initState = {
    countId: 1,
    users: [],
    filterPattern: '',
};

function userReducer(state = initState, action) {
      switch (action.type) {
        case 'ADD': {
            let name = action.username;
            if (state.users.filter(u => u.username === name).length > 0){
                alert('User already exists');
                return state
            }
            let users = [...state.users];
            let user = {
                userId: state.countId,
                username: action.username,
                show: true,
            };
            let newId = state.countId + 1;
            users.push(user);
            let newState = {...state, users, countId: newId};
            console.log(newState);
            return newState
        }
        case 'DELETE': {
            let { user } = action;
            return {...state, user}
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