import { Component } from "react";
import Button from './Button';

const styles= {
  producto: {
    backgroundColor: 'papayawhip',
    border: "1px solid #eee",
    boxShadow: "0 5px 5px rgb(0, 0, 0, 0.2)",
    padding: '10px 15px',
    borderRadius: '8px'
  }

}

class Producto extends Component{
    render(){
        const { producto, agregarAlCarro } = this.props;
        console.log(this.props);
        return(
            <div style={styles.producto}>
                <img alt={producto.name} src={producto.img} />
                <h2>{producto.name}</h2>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                  Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto;