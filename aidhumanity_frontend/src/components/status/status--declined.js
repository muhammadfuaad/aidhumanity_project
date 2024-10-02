function Status_declined() {
  return (
    <div className='status status--pink'>
      <img src="./icons/payment-declined.svg" className='left' alt=""></img>
      <div className='right'>
        <h3>Oh no, your Payment Failed!</h3>
        <p>Please contact us directly so we can put this right without delay. 
          We appreciate your patience.
        </p>
      </div>
    </div>
  );
}
export default Status_declined;