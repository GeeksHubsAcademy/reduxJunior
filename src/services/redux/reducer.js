const reducer = (
	
	state = {
		info: "",
		usersGroup: ""
	},
	action
	
) => {
	
	switch (action.type) {

		//accion que añadiría info
		
		case "ADD_INFO":
		return {
			...state,
			info: action.payload
		};

		//otra acción, en este caso si la usamos podemos guardar en usersGroup datos de usuarios del backend.

		case "ADD_USERS_BACKEND":
		return {
			...state,
			usersGroup: action.payload
		}

		default:
		return state;
		
	};
	
};


export default reducer;