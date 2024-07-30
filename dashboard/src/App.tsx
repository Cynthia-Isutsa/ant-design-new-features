import { Button, Select, Radio,Checkbox, Input,ConfigProvider, Space, Table } from 'antd'
import {PageContainer} from '@ant-design/pro-components';


const App = () => {
  return (
    <PageContainer>
    <Space direction="vertical" size={12}>
      <Button type="primary">Theme Button</Button>
      <Radio>Radio</Radio>
      <Checkbox>Checkbox</Checkbox>
      <Checkbox>Checkbox 2</Checkbox>
      <Input placeholder='Type here ...' />
      <Select placeholder='Select Option' 
      options={[
        {
        label: "option1", value: 'option1',
        },
        {
          label: "option2", value: 'option2',
        }       
      ]}
      />
      <Table
       columns={[
        {title: 'Column1', dataIndex: 'Col'},
      ]}
      dataSource={[{Col: 'value1'}]}

      />
    </Space>
    </PageContainer>
  )
}

export default App