import React from 'react';
import ReactDOM from 'react-dom';


const Modal = props => {

  return ReactDOM.createPortal(
    <div onClick className="ui dimmer modals visible active">
      <div className="ui standart modal visible active">
        <div className="header">Edit Movie Details</div>
        <div className="content">
          <p>Title <input type="text" value={props.title}></input></p>
          <p>Year <input type="text" value="my title"></input></p>
          <p>Runtime <input type="text" value="my title"></input></p>
          <p>Genre <input type="text" value="my title"></input></p>
          <p>Director <input type="text" value="my title"></input></p>
        </div>
        <div className="actions">
          <button className="ui button primary">Edit</button>
          <button className="ui button red">Delete</button>
          <button className="ui button alert grey">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;