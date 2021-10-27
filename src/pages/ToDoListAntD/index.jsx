import React, { useState, useMemo } from "react";
import { Form, Button, Input, Card } from "antd";
import TaskItem from "./TaskItem";
import { v4 as uuidV4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import {
  addToDoAction,
  deleteToDoAction,
  updateToDoAction,
} from "../../redux/actions/toDoList.actions";
const ToDoListPage = () => {
  const dispatch = useDispatch();
  const { tasksList } = useSelector((state) => state.toDoListReducer);

  const handleAddTask = (values) => {
    console.log(values);
    dispatch(
      addToDoAction({
        ...values,
        id: uuidV4(),
      })
    );
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteToDoAction({ id }));
  };

  const handleEditTask = (id, values) => {
    dispatch(updateToDoAction({ id, ...values }));
  };

  const renderTasksList = useMemo(() => {
    return tasksList.map((task, index) => (
      <TaskItem
        data={task}
        index={index}
        key={index}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
      />
    ));
  }, [tasksList]);

  return (
    <>
      <Card title="To Do List With Antd">
        <Form
          name="addToList"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{
            title: "Tiêu đề",
          }}
          onFinish={handleAddTask}
        >
          <Form.Item
            label="Tiêu đề"
            name="title"
            rules={[
              {
                required: true,
                message: "Hay điền tiêu đề vào đây",
              },
              {
                min: 6,
                message: "Tiêu đề ít nhất 6 kí tự",
              },
            ]}
          >
            <Input placeholder="Tiêu đề" />
          </Form.Item>
          <Form.Item
            label="Nội dung"
            name="content"
            rules={[
              {
                required: true,
                message: "Hay điền nội dung vào đây",
              },
              {
                min: 6,
                message: "Nội dung phải ít nhất 6 kí tự",
              },
            ]}
          >
            <Input placeholder="Nội dung" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Button type="primary" htmlType="submit" block>
              Thêm task
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {renderTasksList}
    </>
  );
};

export default ToDoListPage;
