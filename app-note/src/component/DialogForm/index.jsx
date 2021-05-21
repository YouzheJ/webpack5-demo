import { Form, Input, Button } from 'antd';
import React, { useEffect } from 'react';
import model from '../../model'
import './index.scss';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 18,
  },
};

const DialogForm = ({ init, onSubmit }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    typeof onSubmit === 'function' && onSubmit(values);
    
    model.setInfo(values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    form.resetFields();
  }, [init]);

  return <Form
    {...layout}
    form={form}
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="标题"
      name="title"
      rules={[{ required: true, message: '请输入标题' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="类型"
      name="type"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="内容"
      name="content"
    >
      <Input />
    </Form.Item>


    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form.Item>
  </Form>
};

export default DialogForm;
