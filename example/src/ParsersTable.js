import React, { useState } from 'react'
import { Button, Table } from 'antd'
import Column from 'antd/lib/table/Column'
import kebabCase from 'lodash/kebabCase'
import { getTwilightMap, ThemeConsumer } from 'react-twilight'

import { useMount } from 'ahooks'

const PropsTable = () => {
  const [styleParsers, setStyleParsers] = useState([])
  const [selectorParsers, setSelectorParsers] = useState([])
  const [variantParsers, setVariantParsers] = useState([])
  useMount(() => {
    const p = new Set()
    getTwilightMap().forEach((v) => p.add(v))
    const parsers = Array.from(p)
    setStyleParsers(parsers.filter((parser) => parser._type === 'style'))
    setSelectorParsers(parsers.filter((parser) => parser._type === 'selector'))
    setVariantParsers(parsers.filter((parser) => parser._type === 'variant'))
  })

  return (
    <>
      <Table
        dataSource={styleParsers}
        size='small'
        pagination={false}
        rowKey='propNames'
      >
        <Column title='No.' key='No' render={(_, __, index) => index + 1} />
        <Column
          title='Prop Names'
          dataIndex='propNames'
          key='propNames'
          render={(propNames) => propNames.join(', ')}
        />
        <Column
          title='Properties'
          dataIndex='properties'
          key='properties'
          render={(properties) => properties?.join?.(' and ')}
        />
        <Column
          title='kebabCase(Properties)'
          dataIndex='properties'
          key='properties'
          render={(properties) => properties?.map(kebabCase).join(' and ')}
        />
        <Column title='Theme scale' dataIndex='scaleName' key='scaleName' />
        <Column
          title='Default scale'
          dataIndex='defaultScale'
          key='defaultScale'
          render={(defaultScale) =>
            defaultScale && <pre>{JSON.stringify(defaultScale, null, 2)}</pre>
          }
        />
        <Column
          title='Scale value'
          dataIndex='scaleName'
          key='scaleName'
          render={(scaleName) =>
            scaleName && (
              <ThemeConsumer>
                {(theme) => (
                  <Button onClick={() => console.log(theme?.[scaleName])}>
                    Log
                  </Button>
                )}
              </ThemeConsumer>
            )
          }
        />
        <Column title='Type' dataIndex='_type' key='_type' />
      </Table>
      <Table
        dataSource={selectorParsers}
        size='small'
        pagination={false}
        rowKey='propNames'
      >
        <Column title='No.' key='No' render={(_, __, index) => index + 1} />
        <Column
          title='Prop Names'
          dataIndex='propNames'
          key='propNames'
          render={(propNames) => propNames.join(', ')}
        />
        <Column
          title='Properties'
          dataIndex='properties'
          key='properties'
          render={(properties) => properties?.join?.(' and ')}
        />
        <Column title='Theme scale' dataIndex='scaleName' key='scaleName' />
        <Column title='Type' dataIndex='_type' key='_type' />
      </Table>
      <Table
        dataSource={variantParsers}
        size='small'
        pagination={false}
        rowKey='propNames'
      >
        <Column title='No.' key='No' render={(_, __, index) => index + 1} />
        <Column
          title='Prop Names'
          dataIndex='propNames'
          key='propNames'
          render={(propNames) => propNames.join(', ')}
        />
        <Column title='Theme scale' dataIndex='scaleName' key='scaleName' />
        <Column
          title='Default scale'
          dataIndex='defaultScale'
          key='defaultScale'
          render={(defaultScale) =>
            defaultScale && <pre>{JSON.stringify(defaultScale, null, 2)}</pre>
          }
        />
        <Column
          title='Scale value'
          dataIndex='scaleName'
          key='scaleName'
          render={(scaleName) =>
            scaleName && (
              <ThemeConsumer>
                {(theme) => (
                  <Button onClick={() => console.log(theme?.[scaleName])}>
                    Log
                  </Button>
                )}
              </ThemeConsumer>
            )
          }
        />
        <Column title='Type' dataIndex='_type' key='_type' />
      </Table>
    </>
  )
}

export default PropsTable
