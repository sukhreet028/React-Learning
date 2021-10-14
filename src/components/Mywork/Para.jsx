
const Para= (s) => {
  const { Numbers } = s;
  let myArray = [];
  if (Numbers > 0) {
    for (let i = 0; i <Numbers; i++) {
      myArray.push(i);
    }
  }

  return (
    <div>
      {myArray.map((xyz) => (
          <p key={xyz}>
            React class based components are the bread and butter of most mode
            price ever!
          </p>
      ))}
    </div>
  );
};
export default Para;