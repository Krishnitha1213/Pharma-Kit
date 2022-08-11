import React, {Fragment, Component} from 'react';
import './Header.css';

// const Header = () => {
 class Header extends Component {

    constructor(){
        super()
        
        this.state ={
            title: 'Corona Kit',
            keyword: 'User Text Here'
        }

        //console.log("Inside constructor")
    }

    handleChange =(event) => {
        //console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:"User Text Here"})
        this.props.userInput(event.target.value);
    }

    render(){
        //console.log("inside header> render()")
        return(
            <Fragment>
                <header>
                    <div className= 'logo'>{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color: 'white',fontSize: '20px'}}>{this.state.keyword}</div>
                    </center>
                </header>    
                <hr/> 
            </Fragment>
        )
    }    
}

export default Header;

// const Component = document.getElementById("root");
// const root = ReactDOM.createRoot(Component);
// root.render(<Head/>)
