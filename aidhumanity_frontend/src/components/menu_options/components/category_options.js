import Category from '../../category';
import Radio from "./radio";

function Category_options(props) {
  return (
    <div className="flex flex-col">
      < Category category={`${props.category}`} />
      <p>{props.title}</p>
      < Radio />
    </div>
  );
}
export default Category_options;