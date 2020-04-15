import React, {useEffect} from 'react'
import AddTodoContainer from '../../containers/AddTodoContainer'
import FiltersContainer from '../../containers/FiltersContainer'
import TodoListContainer from '../../containers/TodoListContainer'
import app from '../../base'

import { useDispatch } from 'react-redux';
import { readJson } from '../../actions/actions'

import styled from 'styled-components'

const Button = styled.button`
  width: 6rem;
  margin: 0.5rem;
  color:rgb(255,255,255);
  padding: 0.2rem 0;
  background-color: rgb(80,157,164);
  cursor:pointer;
`;
const Home = ({match}) => {
  const dispatch = useDispatch();
  let userId = match.params.userid; //передати в readJson(userId)
  console.log(userId);
  useEffect(() => dispatch( readJson() ));
    return (
      <>
        <Button onClick={()=> { app.auth().signOut() }}>
            Sign out
        </Button>
        <AddTodoContainer />
        <FiltersContainer /> 
        <TodoListContainer />
      </>
    )
}
export default Home