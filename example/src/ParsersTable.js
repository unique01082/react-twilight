import React, { useState } from 'react'
import { Button, Table } from 'antd'
import Column from 'antd/lib/table/Column'
import kebabCase from 'lodash/kebabCase'
import { getTwilightMap, ThemeConsumer } from 'react-twilight'

import { useMount } from 'ahooks'

const PropsTable = () => {
  const [parsers, setParsers] = useState([])
  useMount(() => {
    const p = new Set()
    getTwilightMap().forEach((v) => p.add(v))
    setParsers(Array.from(p))
  })

  return (
    <Table
      dataSource={parsers}
      size='small'
      pagination={false}
      rowKey='propNames'
    >
      <Column title='Type' dataIndex='_type' key='_type' />
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
        render={(properties) => properties?.join(' and ')}
      />
      <Column
        title="CSS Properties (Properties's kebabCase)"
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
    </Table>
  )
}

export default PropsTable
