
import crearTarea from "./tareaFunction";
import { Button } from "./Button";
import { ListTitle } from "./ListTitle";
import { Input } from "./input";
import { Container } from "./Container";
import { InputContainer } from "./InputContainer";
import { Fragment } from "react";


function ToDoList() {
  return (
    <Fragment>
      <ListTitle>Lista de tareas</ListTitle>
      <Container id="container">
        <InputContainer>
          <Input type="text" id="inputText" />
          <label htmlFor="inputText">Ingrese una Tarea</label>
        </InputContainer>
        <ul id="lista"></ul>
        <Button onClick={crearTarea}>Agregar Tarea</Button>
      </Container>
    </Fragment>
  );

}

export default ToDoList;
