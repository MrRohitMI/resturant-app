import ItemsList from "./ItemsList";

const ResturantCategory = ({ data, showCategory, handleClick, index }) => {
  return (
    <>
      <div className="bg-gray-200 mx-auto my-3 w-11/12 p-2 shadow sm:w-8/12 lg:w-6/12 xl:6/12">
        <div
          className="flex justify-between items-center"
          onClick={() => {
            handleClick(index);
          }}
        >
          <div className="font-bold">
            {data.title}({data.itemCards.length})
          </div>
          <button
            className="font-bold text-blue-950 px-2 py-1 border 
            hover:bg-blue-950 hover:text-white rounded-sm disabled:opacity-50"
            disabled={showCategory}
          >
            {showCategory ? "-" : "+"}
          </button>
        </div>
        {showCategory && (
          <div>
            {data.itemCards.map((item) => (
              <ItemsList key={item?.card?.info?.id} item={item?.card?.info} page="menu"/>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default ResturantCategory;
