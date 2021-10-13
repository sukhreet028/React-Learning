const buttons = (props) => {
    const {name, buttonType , classStyle , func} = props;
    return (
        <button type={buttonType} onClick={()=> func()}  className={classStyle}>
            {name}
        </button>
    );
};

export default buttons;