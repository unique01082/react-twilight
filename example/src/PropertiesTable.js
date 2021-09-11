import React, { useState } from 'react'
import { Table, Tag } from 'antd'
import Column from 'antd/lib/table/Column'
import { useMount, useRequest } from 'ahooks'
import { getTwilightMap } from 'react-twilight'
import kebabCase from 'lodash/kebabCase'

import { PROPERTY_STATUS_OS, values, clear, set } from './db'
import properties from './properties.json'
import PropsDetail from './PropsDetail'

const setup = () =>
  clear(PROPERTY_STATUS_OS)
    .then(() =>
      Promise.all(
        properties.map((property) =>
          set(PROPERTY_STATUS_OS, property.property, property)
        )
      )
    )
    .then(() => values(PROPERTY_STATUS_OS))

const getSupportedProperties = () => {
  const result = new Set()
  getTwilightMap().forEach((fn, key) => {
    if (fn._type === 'style') {
      fn.properties.forEach((r) => result.add(kebabCase(r)))
    }
  })

  return result
}

const PropertiesTable = () => {
  const [data, setData] = useState([])
  const [supportedProperties, setSupportedProperties] = useState([])
  const { loading, run } = useRequest(setup, { manual: true })

  useMount(() => {
    run().then(setData)
    setSupportedProperties(getSupportedProperties())
  })

  return (
    <Table
      dataSource={data}
      size='small'
      loading={loading}
      rowKey='property'
      rowClassName={({ property }) =>
        supportedProperties.has(property) ? 'coveraged' : 'not-coveraged'
      }
    >
      <Column title='Property' dataIndex='property' key='property' />
      <Column
        title='Coverage'
        dataIndex='property'
        key='coverage'
        render={(property) =>
          supportedProperties.has(property) ? (
            <Tag color='success'>Coverage</Tag>
          ) : (
            <Tag color='default'>Not Coverage</Tag>
          )
        }
      />
      <Column
        title='Coverage by'
        dataIndex='property'
        key='coverageBy'
        render={(property) => (
          <PropsDetail key={property} property={property} />
        )}
      />
      <Column
        title='URL'
        dataIndex='urls'
        key='url'
        render={(urls) => (
          <ul>
            {urls.map((url) => (
              <li key={url}>
                <a href={url} rel='noopener noreferrer' target='_blank'>
                  {url}
                </a>
              </li>
            ))}
          </ul>
        )}
      />
    </Table>
  )
}

export default PropertiesTable
