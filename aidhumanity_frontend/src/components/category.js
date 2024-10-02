function Category(props) {
  return (
    <div className="bg-amber rounded-full w-8 h-8 flex justify-center items-center">
      <p className="text-[1rem] font-bold text-black">{props.category}</p>
    </div>
  )
}
export default Category;