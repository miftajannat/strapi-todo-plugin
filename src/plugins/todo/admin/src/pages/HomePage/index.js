

import React, {memo, useState} from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import {
   Layout,
BaseHeaderLayout,
ContentLayout
 } from '@strapi/design-system';
 import { EmptyStateLayout } from '@strapi/design-system';
 import { Button } from '@strapi/design-system';
  import { Plus } from '@strapi/icons';
import { Illo } from '../../components/Illo';
import TodoModal from '../../components/TodoModal';
import TodoCount from '../../components/TodoCount';
import TodoTable from '../../components/TodoTable';


const HomePage = () => {
  const [todoData, setTodoData] = React.useState([  ]);
  const [showModal, setShowModal] = React.useState(false);

  async function addTodo (data) {
    setTodoData ([ ...todoData, {...data, id: nanoid(), isDone: false}]);
  }

  async function toggleTodo (data) {
    alert('Add toggle Todo in API');
  }

  async function deleteTodo (data) {
    alert('Add delete Todo in API');
  }

  async function editTodo (data) {
    alert('Add edit Todo in API');
  }


  return (
    <Layout>
      <BaseHeaderLayout
        title='Todo Plugin'
        subtitle='This is the todo plugin homepage'
       as = 'h2'
      />
      <ContentLayout>
        {
          todoData.length === 0 ? (
          <EmptyStateLayout
          icon= {<Illo />}
          content = 'You don t have any todos yet'
          action = {
            <Button
            onClick = {() => setShowModal(true)}
            variant = 'secondary'
            startIcon = {<Plus />}
            >
              Add a todo
            </Button>
          }
          /> 
          ): (
            <>
            <TodoCount count={todoData.length}/>
            <TodoTable
            todoData={todoData}
            setShowModal={setShowModal}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            />
            </>
        )
        }
      </ContentLayout>
      {showModal && 
      <TodoModal setShowModal={setShowModal} addTodo={addTodo} />
      }
    </Layout>
  );
};

export default memo(HomePage);
