function Radio_1() {
  return (
    <label className="relative inline-flex items-center gap-2 cursor-pointer">
      <input type="radio" value="mr" name="status" className="sr-only peer"></input>
      <div className="w-6 h-6 rounded-full border-2 border-platinum peer peer-checked:after:bg-gray
        after:content-[''] after:absolute  after:top-2 after:left-2 after:bg-platinum after:rounded-full after:h-2 after:w-2
        after:transition-all after:duration-500 peer-checked:border-body">
      </div>
    </label>    
  );
}
export default Radio_1;