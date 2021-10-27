import React, { useState, useMemo } from "react";
import { Card, Button, Row, Form, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
const TaskItem = ({ data, index, handleDeleteTask, handleEditTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [formEdit] = Form.useForm();
  const renderTaskItemView = useMemo(() => {
    return (
      <>
        <p>Tiêu đề: {data.title}</p>
        <p>Nội dung: {data.content}</p>
      </>
    );
  }, [data]);
  const renderTaskItemEdit = useMemo(() => {
    return (
      <Form
        name={`formEdit-${index}`}
        form={formEdit}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={(values) => {
          handleEditTask(data.id, values);
        }}
        initialValues={{
          title: data.title,
          content: data.content,
        }}
      >
        <Form.Item
          label="Tiêu đề:"
          name="title"
          validateFirst
          rules={[
            { required: true, message: "Làm ơn điền tiêu đề vào dùm" },
            { min: 6, message: "Tiêu đề ít nhất 6 ki tự cha nội ơi" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nội dung:"
          name="content"
          validateFirst
          rules={[
            { required: true, message: "Làm ơn điền nội dung vào dùm" },
            { min: 6, message: "Nội dung ít nhất 6 ki tự cha nội ơi" },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    );
  }, [data]);
  return (
    <Card
      style={{ marginTop: 16 }}
      title={isEdit ? "Edit Task" : "View Task"}
      extra={
        !isEdit ? (
          <>
            <Button
              onClick={() => {
                setIsEdit(true);
              }}
              type="primary"
              ghost
              style={{ marginRight: "8px" }}
            >
              Sửa
            </Button>
            <Button
              onClick={() => {
                handleDeleteTask(data.id);
              }}
              danger
            >
              Xoá
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                formEdit.submit();
                setIsEdit(false);
              }}
              type="primary"
              style={{ marginRight: "8px" }}
            >
              Xác nhận
            </Button>
            <Button
              onClick={() => {
                setIsEdit(false);
              }}
              style={{ marginRight: "8px" }}
              type="primary"
              ghost
            >
              Huỷ
            </Button>
            <Button
              style={{ marginRight: "8px" }}
              onClick={() => {
                handleDeleteTask(index);
              }}
              danger
            >
              Xoá
            </Button>
          </>
        )
      }
    >
      {isEdit ? renderTaskItemEdit : renderTaskItemView}
    </Card>
  );
};

export default TaskItem;
