import React from 'react';
import {connect} from 'react-redux';
import Buy from '../pages/Buy';

class BuyContainer extends React.Component{
    render(){
        return(
            <Buy {...this.props}/>
        )
    }
}

export default connect((state) =>{
    console.log('BuyContainer'+JSON.stringify(state));

    return({
        BuyReducer:state.BuyReducer,
        })
})(BuyContainer);
