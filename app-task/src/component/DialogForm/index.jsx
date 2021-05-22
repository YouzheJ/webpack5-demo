import { Form, Input, Button } from 'antd';
import React, { useEffect } from 'react';
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
    // console.log('Success:', values);
    typeof onSubmit === 'function' && onSubmit(values);
    
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
      label="任务"
      name="name"
      rules={[{ required: true, message: '请输入任务' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="时间"
      name="time"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="详情"
      name="detail"
    >
      <Input />
    </Form.Item>


    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        新建
      </Button>
    </Form.Item>
  </Form>
};

export default DialogForm;
