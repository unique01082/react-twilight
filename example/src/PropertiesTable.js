import React, { useState } from 'react'
import { Table, Tag } from 'antd'
import Column from 'antd/lib/table/Column'

import { PROPERTY_STATUS_OS, values } from './db'
import { useMount, useRequest } from 'ahooks'

import EditButton from './EditButton'

const PropertiesTable = () => {
  const [data, setData] = useState()
  const { loading, run } = useRequest(() => values(PROPERTY_STATUS_OS), {
    manual: true
  })

  useMount(() => {
    run().then(setData)
  })

  return (
    <Table
      dataSource={data}
      size='small'
      loading={loading}
      rowClassName={({ coverage }) =>
        coverage ? 'coveraged' : 'not-coveraged'
      }
    >
      <Column title='Property' dataIndex='property' key='property' />
      <Column
        title='Coverage'
        dataIndex='coverage'
        key='coverage'
        render={(coverage) =>
          coverage ? (
            <Tag color='success'>Coverage</Tag>
          ) : (
            <Tag color='default'>Not Coverage</Tag>
          )
        }
      />
      <Column
        title='Coverage by'
        dataIndex='coverageBy'
        key='coverageBy'
        render={(coverageBy) => coverageBy?.join(', ')}
      />
      <Column
        title='URL'
        dataIndex='urls'
        key='url'
        render={(urls) => (
          <ul>
            {urls.map((url) => (
              <li>
                <a href={url} target='_blank' rel='noreferrer'>
                  {url}
                </a>
              </li>
            ))}
          </ul>
        )}
      />
      <Column
        title='Actions'
        dataIndex='property'
        key='actions'
        render={(property) => <EditButton property={property} />}
      />
    </Table>
  )
}

export default PropertiesTable
