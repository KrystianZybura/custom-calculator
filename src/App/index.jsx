import { Button, Container, Numbers, ActionBar, Value } from "./styled";

function App() {
  return (
    <Container>
      <Value />
      <Numbers>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
      </Numbers>
      <ActionBar>
        <Button>+</Button>
        <Button>-</Button>
        <Button>/</Button>
        <Button>*</Button>
        <Button>=</Button>
      </ActionBar>
    </Container>
  );
}

export default App;
