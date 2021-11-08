const Buttons = (props) => {
  const { name, buttonType, classStyle, func, buttonId, id } = props;
  return (
    <button
      type={buttonType}
      onClick={() => func()}
      disabled={
        id !== null && id !== undefined && id === buttonId ? true : false
      }
      className={classStyle}
    >
      {name}
    </button>
  );
};

export default Buttons;
