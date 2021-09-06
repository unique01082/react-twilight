import React from 'react'
import { Button, Table } from 'antd'
import Column from 'antd/lib/table/Column'
import kebabCase from 'lodash/kebabCase'
import { ThemeConsumer } from 'react-twilight'

import { useAppContext } from './context'

const PropsTable = () => (
  <Table dataSource={useAppContext().styledFns} size='small' pagination={false}>
    <Column
      title='Prop Names'
      dataIndex='propNames'
      key='propNames'
      render={(propNames) => propNames.join(', ')}
    />
    <Column
      title='CSS Properties'
      dataIndex='properties'
      key='properties'
      render={(properties) => properties.join(' and ')}
    />
    <Column
      title='CSS Properties'
      dataIndex='properties'
      key='properties'
      render={(properties) => properties.map(kebabCase).join(' and ')}
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

export default PropsTable
