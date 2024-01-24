import { Component } from 'react';
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'
import '../App.css'

const styles = {
  carro: { 
    border: '1px solid',
    color: 'white',
    backgroundColor: 'purple',
    borderRadius: '15px',
    padding: '15px',
    cursor: 'pointer'
  },
  bubble: {
    left: 12,
    top: 20,
    position: 'relative',
  }
}

class Carro extends Component {
  render(){
    const { carro, esCarroVisible, carroVisible } = this.props;
    const amount = carro.reduce((cont, item) => cont + item.amount, 0);
    
    return(
      <div >
        <span style={styles.bubble}>
          {amount ? (
            <BubbleAlert value={amount}/>
          ): null }
        </span>
        <button onClick={esCarroVisible} style={styles.carro}>
          Carro
        </button>
        { carroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    )
  }
}

export default Carro;