import { Component } from 'react';

const styles={
  logo:{
    fontSize: '2rem',
    fontWeight: '700',
  }
}

class Logo extends Component {
  render(){
    return(
      <div style={styles.logo}>
        Shop
      </div>
    )
  }
}

export default Logo;