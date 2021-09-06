import React from 'react'
import { Button, Drawer, Input, Space, Form, Radio } from 'antd'
import {
  EditTwoTone,
  PlusOutlined,
  MinusCircleOutlined
} from '@ant-design/icons'
import { useMount, useToggle } from 'ahooks'

import { PROPERTY_STATUS_OS, get } from './db'

const EditButton = ({ property }) => {
  const [state, { setRight, setLeft }] = useToggle()
  const [form] = Form.useForm()

  useMount(() => {
    get(PROPERTY_STATUS_OS, property).then(form.setFieldsValue)
  })

  return (
    <>
      <Button onClick={setRight} icon={<EditTwoTone />}>
        Edit
      </Button>
      <Drawer
        title={property}
        width={720}
        onClose={setLeft}
        visible={state}
        bodyStyle={{ paddingBottom: 80 }}
        destroyOnClose
      >
        <Space>
          <Button onClick={setLeft}>Cancel</Button>
          <Button type='primary' htmlType='submit' form='edit'>
            Submit
          </Button>
        </Space>
        <Form
          name='basic'
          id='edit'
          form={form}
          layout='vertical'
          onFinish={console.log}
          onFinishFailed={console.log}
        >
          <Form.Item label='Property' name='property'>
            <Input disabled />
          </Form.Item>
          <Form.Item label='Status' name='status'>
            <Radio.Group>
              <Radio.Button>To do</Radio.Button>
              <Radio.Button value='processing'>Processing</Radio.Button>
              <Radio.Button value='done'>Done</Radio.Button>
              <Radio.Button value='wont_do'>Won't do</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label='URL'>
            <Form.List name='urls'>
              {(fields, { add, remove }) => (
                <Space direction='vertical' style={{ width: '100%' }}>
                  {fields.map((field, index) => (
                    <Form.Item
                      label={index === 0 ? 'Passengers' : ''}
                      key={field.key}
                      {...field}
                      noStyle
                    >
                      <Input
                        addonAfter={
                          <MinusCircleOutlined
                            onClick={() => remove(field.name)}
                          />
                        }
                      />
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type='dashed'
                      onClick={() => add()}
                      icon={<PlusOutlined />}
                      style={{ width: '100%' }}
                    >
                      Add field
                    </Button>
                  </Form.Item>
                </Space>
              )}
            </Form.List>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}

export default EditButton
