
import React from "react";

import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import { rdx_addInfo } from "../../services/redux/action";

class Home extends React.Component {
    
    constructor (props) {
        super(props);
        
    };

    funcionAddRedux(){

        //CREAMOS UNA VARIABLE CON UN CONTENIDO A AÑADIR A REDUX. 
        let valorVariable = "GeeksHubs Academy Madrid";

        //llamamos a la funcion de redux addInfo, despachada en la accion de redux (action.js)
        // la hemos importado antes arriba con el código "import { rdx_addInfo } from "../../services/redux/action";"
        rdx_addInfo(valorVariable);
    }
    
    render() {
        return(
            <div>
                <pre>
                    {/* la etiqueta pre muestra texto preformateado, mostramos el valor de infoRedux que REDUX nos ha
                    guardado en las props. */}
                    {
                        JSON.stringify(this.props.infoRedux, null, 2)
                    }
                </pre>
                {/* al hacer click sobre este boton, llamamos a la funcion que ejecutará el dispatch de redux... */}
                <button onClick={()=>this.funcionAddRedux()}>AÑADE VALOR VARIABLE</button>
            </div>
        );
    };
    
    
};


const mapStateToProps = state => {
    // ese state es de redux

    return {
        //resultados de info desde redux, ahora disponibles en infoRedux que mostraremos en el render a tiempo real
        infoRedux: state.info
    };
};

export default connect(mapStateToProps)(withRouter(Home));