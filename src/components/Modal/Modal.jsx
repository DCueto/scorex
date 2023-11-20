import './Modal.css';

const Modal = ({setModalState, children}) => {

  return (
    <div className="modal">
      <div className="modalContainer">
        <button className='modalCloseBtn' onClick={ () => setModalState(false) }>X</button>
        <section className="modalContent">
          {children}
        </section>
      </div>
      <div className="modalBg" onClick={() => setModalState(false)}>
      </div>
    </div>
  )
}

export default Modal;