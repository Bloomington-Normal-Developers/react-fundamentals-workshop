// Importing a named export of the Card component
// import {Card} from './components/Card'

// Importing a default export from the Card component
import Card from "./components/Card";
import Section from "./components/Section";
import TodoList from "./components/TodoList";

function App() {
  const card = {
    src: "https://picsum.photos/200",
    title: "Lorem, Ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus veniam facilis optio rerum consequatur iure omnis velit. Optio, nobis!",
  };

  return (
    <div>
      <h1>React Fundamentals</h1>
      <Section>
        <Card card={card} backgroundColor="rebeccapurple" favorited={true} />
      </Section>
      <Section>
        <TodoList />
      </Section>
    </div>
  );
}

export default App;
