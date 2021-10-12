import './Head.css';
const Head = (props) => {
  const { printNumbers, colors } = props;
  let printArray = [];
  if (printNumbers > 0) {
    for (let i = 0; i < printNumbers; i++) {
      printArray.push(i);
    }
  }

  return (
    <div>
      {printArray.map((data, index) => (
        <div className="head" key={data}>
          <h1 style={{ color: colors[index] }}>My Heading</h1>
          <p>
            React class based components are the bread and butter of most modern
            web apps built in ReactJS. These components are simple classes (made
            up of multiple functions that add functionality to the application).
            All class based components are child classes for the Component class
            of ReactJS. Example: Program to demonstrate the creation of
            class-based components. Create a React app and edit the App.js as:
            Hey geek! The constant emerging technologies in the world of web
            development always keeps the excitement for this subject through the
            roof. But before you tackle the big projects, we suggest you start
            by learning the basics. Kickstart your web development journey by
            learning JS concepts with our JavaScript Course. Now at it's lowest
            price ever!
          </p>
        </div>
      ))}
    </div>
  );
};
export default Head;
