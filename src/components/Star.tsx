type StarProps = {
  marked: boolean;
  starId: number;
  onClick: () => void;
};

const Star = ({ marked, starId, onClick }: StarProps) => {
  return (
    <span
      data-star-id={starId}
      className={`text-3xl cursor-pointer hover:text-yellow-500 ${ marked ? 'text-yellow-500' : '' } [&:hover~*]:text-yellow-500`}
      role="button"
      onClick={onClick}
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

Star.displayName = "Star";
export default Star;