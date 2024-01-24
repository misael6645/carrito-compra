import { Component } from "react";
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    productos: [
      { name: "Tomates", price: 1500, img: "productos/tomate.jpg"},
      { name: "Lechuga", price: 1500, img: "productos/lechuga.jpg"},
      { name: "Arbejas", price: 2500, img: "productos/arbejas.jpg"},
    ],
    carro: [
     /* { name: 'Tomate', price: 1500, img: "productos/tomate.jpg", amount: 1} */
    ],
    carroVisible : false
  }

  agregarAlCarro = (producto) => { 
    const { carro } = this.state;
    if( carro.find( x => x.name === producto.name) ){
      const newCarro = carro.map( x => x.name === producto.name ? ({
            ...x,
            amount : x.amount + 1
        }): x
      )
      return this.setState({
        carro: newCarro,
      })
    }
    return this.setState({
      carro : this.state.carro.concat({
        ...producto,
        amount : 1,
      })
    })
  }
  
  esCarroVisible = () => {
    if(this.state.carro.length === 0 )return;
    this.setState({carroVisible : !this.state.carroVisible});
  }

  render(){
  console.log(this.state.carro);
  const { carroVisible } = this.state;
  return(
      <div>
        <Navbar esCarroVisible={this.esCarroVisible} carroVisible={carroVisible} carro={this.state.carro} />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro} 
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
