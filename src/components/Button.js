import { Children, Component } from "react";

const styles={
  button:{
    cursor: 'pointer',
    padding: '8px 8px',
    borderRadius: '8px',
    backgroundColor: '#0A283E',
    color: 'white',
    border: 'none',
  } 
}

class Button extends Component{
  render(){
    return(
      <button style={styles.button} {...this.props}/>
    )
  }
}

export default Button;