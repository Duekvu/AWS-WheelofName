import React from 'react';

import './wheel.css';
import Modal from 'react-bootstrap/Modal'; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Wheel extends React.Component {

  state = { selectedItem: null, currItems: this.props.items, modalShow: false};
  componentDidMount= () => {
   
  }

   selectItem = () => {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.state.currItems.length);
      this.setState({ selectedItem });
      console.log(selectedItem);
      this.showModal();
    }
  }

  handleCloseThenDelete = () => {
      const currItems = this.state.currItems.filter(item => item !== this.state.currItems[this.state.selectedItem]);
      this.setState({selectedItem:null, currItems, modalShow:false});
  } 

  handleClose = () => {
    this.setState({selectedItem:null, modalShow:false});
  }
  
  showModal = () => {
    setTimeout( () => {
      this.setState({modalShow:true})
    }, 5000); 
  }

  render() {
    const { selectedItem, currItems } = this.state;
    const wheelVars = {
      '--nb-item': currItems.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    return (
        <div>
            <div className="wheel-container">
              <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
                {currItems.map((item, index) => (
                  <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Modal 
            show={this.state.modalShow} 
            onHide={this.handleClose} 
            backdrop="static" 
            keyboard="false"  >
              <Modal.Header closeButton>
                <Modal.Title> And the Winner is: </Modal.Title>
              </Modal.Header>
                <Modal.Body> Congratulation to {this.state.currItems[selectedItem]}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="secondary" onClick={this.handleCloseThenDelete}>
                  Delete
                </Button>
                
              </Modal.Footer>
            </Modal>
      </div>
      
    );
  }
}
