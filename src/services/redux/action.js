import store from "./store";


//acción que se exporta como función rdx_addInfo, encargada de despachar/añadir el contenido
//del argumento info a través del payload. esta es la función que se ejecuta cuando se
//importa desde home.
export const rdx_addInfo = (info) => {
	store.dispatch({
		type: 'ADD_INFO',
		payload: info
	})
};