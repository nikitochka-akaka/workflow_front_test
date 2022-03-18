import React from 'react';
import './Modal.css';






class Modal extends React.Component{
    state ={
        isOpen: false
    }
    render(){
        return(
            <React.Fragment>
                <button className='modal-btn' onClick={() => this.setState({isOpen:true})}>Open modal window</button>
                {this.state.isOpen && <div className='modal' >
                    <div className='modal-body'>
                        <h1> New window </h1>
                        <p>Heeeey, it's looking nice!)</p>
                        <img style={{width: '50%', height: '40%'}} src={require('./images/yakubovich.webp')} />
                        <button className='modal-btn' onClick={() => this.setState({isOpen:false})}> Close </button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }

}

export default Modal