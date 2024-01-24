import { Component } from 'react';
import Logo from './Logo';
import Carro from './Carro';

const styles = { 
  navbar: { 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 50px',
    height: '80px',
    position: 'relative',
    boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
  }
}


class Navbar extends Component {
  render(){
    const { carro, esCarroVisible, carroVisible } = this.props;
    return(
      <nav style={styles.navbar}>
        <Logo /> 
        <Carro esCarroVisible={esCarroVisible} carroVisible={carroVisible} carro={carro}/> 
      </nav>
    )
  }
}

export default Navbar;