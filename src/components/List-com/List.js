import './List.css';
function List(props) {
  const { navData, classType } = props;
  return (
    <div>
      <nav>
        <ul className = {classType}>
          {navData.map((data, index) => (
            <li key={index}>
              <a href="#">{data}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default List;
