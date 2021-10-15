
function List2(prop){
const {myBar,classType}=prop
return(
    <div>
        <nav>
            <ul className={classType}>
            {myBar.map((data,index)=>(
            <li key={index}>
                <a href="#">{data}</a>
            </li>
            ))}

            </ul>
        </nav>
    </div>
)
}
export default List2;