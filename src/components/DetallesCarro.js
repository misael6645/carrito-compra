import { Component } from 'react'
import '../App.css'

const styles = {
  detalles: {
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: 20,
    right: 50,
    boxShadow: '5px 5px 10px rgb(0,0,0,0.5)',
    borderRadius: '8px',
    width: '300px',
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  item: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 25px',
    borderBottom: 'solid 1px #aaa'
  }
}

class DetallesCarro extends Component {
  render(){
    const { carro } = this.props;

    return(
      <div style={styles.detalles} >
        <ul style={styles.ul}>
          { carro.map( item => 
            <li style={styles.item} key={item.name}>
              <img alt={item.name} src={item.img} width='50' height='32' />
              {item.name}<span>{item.amount}</span>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default DetallesCarro;