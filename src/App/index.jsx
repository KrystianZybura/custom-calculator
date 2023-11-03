import { Button, Container, Numbers, Toolbar, Value } from "./styled";

function App() {
  return (
    <Container>
      <Value></Value>
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
      <Toolbar>
        <Button>+</Button>
        <Button>-</Button>
        <Button>/</Button>
        <Button>*</Button>
      </Toolbar>
    </Container>
  );
}

export default App;
