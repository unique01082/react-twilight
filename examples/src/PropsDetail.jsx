import { useMount, useToggle } from 'ahooks'
import { Button, Modal, Descriptions } from 'antd'
import React, { useState } from 'react'
import { kebabCase } from 'lodash'
import { ThemeConsumer, parsersManager } from 'react-twilight'

const getParser = (property) => {
  const parsers = new Set()
  parsersManager.forEach((parser) => {
    if (
      parser._type === 'style' &&
      parser.properties.map(kebabCase).includes(property)
    ) {
      parsers.add(parser)
    }
  })

  return Array.from(parsers)
}

const PropsDetail = ({ property }) => {
  const [visible, { setLeft, setRight }] = useToggle()
  const [parsers, setParsers] = useState([])
  useMount(() => {
    setParsers(getParser(property))
  })

  if (!parsers.length) {
    return <span>Not supported</span>
  }

  return (
    <>
      <span onClick={setRight} style={{ color: '#096dd9', cursor: 'pointer' }}>
        {parsers
          .reduce((acc, parser) => acc.concat(parser.propNames), [])
          .join(', ')}
      </span>
      <Modal
        title={parsers
          .reduce((acc, parser) => acc.concat(parser.propNames), [])
          .join(', ')}
        visible={visible}
        onOk={setLeft}
        onCancel={setLeft}
        destroyOnClose
        width='75%'
        footer={null}
      >
        {parsers.map((parser) => (
          <Descriptions bordered>
            <Descriptions.Item label='Prop Names'>
              {parser.propNames.join(', ')}
            </Descriptions.Item>
            <Descriptions.Item label='Properties'>
              {parser.properties.join(' and ')}
            </Descriptions.Item>
            <Descriptions.Item label='CSS Properties'>
              {parser.properties.map(kebabCase).join(' and ')}
            </Descriptions.Item>
            <Descriptions.Item label='Theme Scale'>
              {parser.scaleName}
            </Descriptions.Item>
            <Descriptions.Item label='Default Scale'>
              {parser.defaultScale && (
                <pre>{JSON.stringify(parser.defaultScale, null, 2)}</pre>
              )}
            </Descriptions.Item>
            <Descriptions.Item label='Scale Value'>
              <ThemeConsumer>
                {(theme) => (
                  <Button
                    onClick={() => console.log(theme?.[parser.scaleName])}
                  >
                    Log
                  </Button>
                )}
              </ThemeConsumer>
            </Descriptions.Item>
          </Descriptions>
        ))}
      </Modal>
    </>
  )
}

export default PropsDetail
