function Cookie() {
  return (
    <div className='status cookie bg-white w-[33rem] h-[14rem] pr-28'>
      <img src="./icons/cookie.svg" className='left' alt=""></img>
      <div className='right'>
        <h3>Can we use Cookies?</h3>
        <p>They help our site run at 100% efficiency but you can opt out.</p>
        <button className="btn btn--primary mt-[1rem] text-[1.3rem]">Click Here</button>
      </div>
    </div>
  );
}
export default Cookie;