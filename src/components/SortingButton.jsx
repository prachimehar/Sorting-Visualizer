const SortingButton = ({ onClick, disabled, isSorting }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-md text-white ${isSorting ? 'bg-gray-400' : 'bg-blue-500'} hover:bg-blue-600`}
        disabled={disabled}
      >
        {isSorting ? "Sorting..." : "Start Sorting"}
      </button>
    );
  };
  
  export default SortingButton;
  