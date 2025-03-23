// Importing a named export of the Card component
// import {Card} from './components/Card'

// Importing a default export from the Card component
import Button from "./components/Button";
import Card from "./components/Card";
import Section from "./components/Section";
import TodoList from "./components/TodoList";
import { cards } from "./variables";

function App() {
  return (
    <div>
      <h1>React Fundamentals</h1>
      <Section>
        <Button />
      </Section>
      <Section>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Section>
      <Section>
        <TodoList />
      </Section>
    </div>
  );
}

export default App;
