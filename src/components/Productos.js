import { Component } from "react";
import Producto from "./Producto";

const styles={
  productos: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  }
}

class Productos extends Component {
    render(){
    const { productos, agregarAlCarro } = this.props
      return(
        <div style={styles.productos}>
          { productos.map( producto =>
            <Producto
              agregarAlCarro={agregarAlCarro}
              key={producto.name}
              producto={producto}
            />   
          )}
        </div>
      )
    }
}

export default Productos;