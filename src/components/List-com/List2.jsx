import './List.css'
import { Link, NavLink } from "react-router-dom";
function List2(prop){
const {myBar,classType}=prop
return(
    <div>
        <nav>
            <ul className={classType}>
            {myBar.map((data,index)=>(
            <li key={index}>
                <NavLink className={(data)=> data.isActive ? 'active' : 'notActive' } to={data.path}>{data.name}</NavLink>
                {/* <Link to={data.path}>{data.name}</Link> */}
            </li>
            ))}

            </ul>
        </nav>
    </div>
)
}
export default List2;