import { useCreation, useToggle } from 'ahooks'
import { Button, Modal, Descriptions } from 'antd'
import React from 'react'
import { kebabCase, xor } from 'lodash'
import { ThemeConsumer } from 'react-twilight'

import { useAppContext } from './context'

const PropsDetail = ({ propNames = [] }) => {
  const [visible, { setLeft, setRight }] = useToggle()
  const { styledFns } = useAppContext()
  const styledFn = useCreation(() =>
    styledFns.find((sx) => xor(sx.propNames, propNames).length === 0)
  )

  if (!styledFn) {
    return propNames.join(', ')
  }

  return (
    <>
      <Button type='link' onClick={setRight}>
        {styledFn.propNames.join(', ')}
      </Button>
      <Modal
        title={styledFn.propNames.join(', ')}
        visible={visible}
        onOk={setLeft}
        onCancel={setLeft}
        destroyOnClose
        width='75%'
        footer={null}
      >
        <Descriptions bordered>
          <Descriptions.Item label='Prop Names'>
            {styledFn.propNames.join(', ')}
          </Descriptions.Item>
          <Descriptions.Item label='Properties'>
            {styledFn.properties.join(' and ')}
          </Descriptions.Item>
          <Descriptions.Item label='CSS Properties'>
            {styledFn.properties.map(kebabCase).join(' and ')}
          </Descriptions.Item>
          <Descriptions.Item label='Theme Scale'>
            {styledFn.scaleName}
          </Descriptions.Item>
          <Descriptions.Item label='Default Scale'>
            {styledFn.defaultScale && (
              <pre>{JSON.stringify(styledFn.defaultScale, null, 2)}</pre>
            )}
          </Descriptions.Item>
          <Descriptions.Item label='Scale Value'>
            <ThemeConsumer>
              {(theme) => (
                <Button
                  onClick={() => console.log(theme?.[styledFn.scaleName])}
                >
                  Log
                </Button>
              )}
            </ThemeConsumer>
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  )
}

export default PropsDetail
