import React, {Component} from 'react';
class Images extends Component {
    render () {
        return(
            <img src = {this.props.srcGambar} 
            width= "200px" height = "100px"/>
            
        ) 
            
        }
    }
    export default Images;