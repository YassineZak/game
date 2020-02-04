import React from 'react';

const ModalError = (props) => {
    console.log(props);
    
    return (
        <div id="modalError" className="modal fade" style={{display: 'none'}}>
        <div className="modal-dialog modal-confirm">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="icon-box">
                        <i className="material-icons"></i>
                    </div>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body text-center">
                    <h4>Ooops!</h4>	
                    <p>{props.error}</p>
                    <button className="btn btn-success" data-dismiss="modal">Try Again</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ModalError;