import './contact.css';
import { Link, useParams } from 'react-router-dom';
import ContactProfile from './contact-info/contact-profile';
function Contact(props) {
  let parms = useParams()?.id;

  console.log(parms);

  // useEffect(()=> {

  // },[parms])

//   const [contactProData, setContactProData] = useState();
let contactProData;

  const contactsData = [
    {
      id: 1,
      name: 'Sukhvir Singh',
      age: 28,
      phone: 5147777,
      address: '1112 rue 1st ave',
      postalCode: 'H9B2L4',
    },
    {
      id: 2,
      name: 'Gurpreet Singh',
      age: 29,
      phone: 5147777,
      address: '1112 rue 1st ave',
      postalCode: 'H9B2L4',
    },
    {
      id: 3,
      name: 'Ivana Sharam',
      age: 35,
      phone: 5147777,
      address: '1112 rue 1st ave',
      postalCode: 'H9B2L4',
    },
    {
      id: 4,
      name: 'Sukhreet kaur',
      age: 27,
      phone: 5147777,
      address: '1112 rue 1st ave',
      postalCode: 'H9B2L4',
    },
  ];

  if (parms) {
    contactProData = contactsData.find(data => data.id == parms);
  }

  return (
    <div>
      <h1>contact us page</h1>
      {!parms &&
        contactsData.map((data, index) => (
          <Link key={index} to={`/contact/${data.id}`}>
            <div className="card">
              <p>name: {data.name}</p>
              <p>phone: {data.phone}</p>
              <p>id: {data.id}</p>
            </div>
          </Link>
        ))}
      {parms &&  <ContactProfile name={contactProData.name} 
      age={contactProData.age}
      phone={contactProData.phone}
      address={contactProData.address}
      id={contactProData.id}
      />}
    </div>
  );
}

export default Contact;
