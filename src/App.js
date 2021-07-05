// import logo from './logo.svg';
// import './App.css';
// import Greet from './1. components/1. functional/Greet'
// import {Named} from './1. components/1. functional/Named'
// import Functional from './1. components/1. functional/Functional'
// import Functional1 from './1. components/1. functional/Functional1'
// import Welcome from './1. components/1. class/Welcome'
// import Hello from './2. jsx/Hello';
// import Greetings from './3. props/Greetings';
// import Welcome from './3. props/Welcome';
// import Counter from './4. states/Counter';
// import Message from './4. states/Message';
// import Person from './4. states/Person';
// import FunctionClick from './5. event-handling/FunctionClick';
// import ClassClick from './5. event-handling/ClassClick';
// import EventBind from './5. event-handling/EventBind';
// import Parent from './5. event-handling/parent-child/Parent';
// import UserGreeting from './conditional-rendering/UserGreeting';
// import UserGreetingTwo from './conditional-rendering/UserGreetingTwo';
// import UserThree from './conditional-rendering/UserThree';
import Namelist from './7.list-rendering/Namelist';
import ListTwo from './7.list-rendering/ListTwo';
import ListThree from './7.list-rendering/ListThree';
import ListFour from './7.list-rendering/ListFour';
import Stylesheet from './8. styling/Stylesheet';

function Home()
{
  return <h1>This is a Home component</h1>
}

const About = () => <h1>This is About Component</h1>
const Contact = () => <h1>This is Contact Component</h1>

function App() {
  return (
    <div className="container">
      {/* <Stylesheet/> */}
      <Namelist/><hr /><hr />
      {/* <ListTwo /><hr /><hr />
      <ListThree /><hr /><hr /> */}
      <ListFour />
      {/* <UserGreeting />
      <UserGreetingTwo />
      <UserThree /> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Person /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <h1>Welcome Developers !!!</h1> */}
      {/* <Hello /> */}
      {/* <h1>This is using Function Component</h1>
      <Greetings name="Rohan" skill="C++">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
        </Greetings>
      <Greetings name="Scott" skill="ScrumMaster">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
      </Greetings>
      <Greetings name="John" skill="Business Analyst">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
      </Greetings>
      <Greetings name="Mike" skill="Tech Lead">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
      </Greetings>

      <br/><br/>

      <h1>This is using Class Component</h1>
      <Welcome name="Rohan" skill="C++">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
       </Welcome>
      <Welcome name="Scott" skill="ScrumMaster">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
      </Welcome>
      <Welcome name="John" skill="Business Analyst">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
      </Welcome>
      <Welcome name="Mike" skill="Tech Lead">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
      </Welcome> */}
      {/* <Greet />
      <Welcome />
      <Home />
      <About />
      <Contact />
       <Named />
      <Functional />
      <Functional1 />
      */}
    </div>

  );
}
export default App;