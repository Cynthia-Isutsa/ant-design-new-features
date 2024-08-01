import {
  ContactsFilled,
  DatabaseFilled,
  HomeFilled,
  MenuFoldOutlined,
  MoneyCollectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./styles/dashboard.css";
import {
  Button,
  Card,
  Col,
  Layout,
  Menu,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
// import { useState } from "react";
import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import { Divider, Radio, Table } from "antd";
import type { TableColumnsType } from "antd";
import { Steps } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const { Text } = Typography;

const DashBoard = () => {
  const [collasped, setCollasped] = useState<any>();
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );

  const generateData = () => {
    const dat = [];

    for (let i = 0; i < 34; i++) {
      dat.push({
        id: faker.datatype.number(1000),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        status: Math.random() > 0.5 ? true : false,
      });
      return dat;
    }
  };

  const data = generateData();
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data1: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    // {
    //   key: "2",
    //   name: "Jim Green",
    //   age: 42,
    //   address: "London No. 1 Lake Park",
    // },
    // {
    //   key: "3",
    //   name: "Joe Black",
    //   age: 32,
    //   address: "Sydney No. 1 Lake Park",
    // },
    // {
    //   key: "4",
    //   name: "Disabled User",
    //   age: 99,
    //   address: "Sydney No. 1 Lake Park",
    // },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <Layout className="container">
      <Header style={{ backgroundColor: "white" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <MenuFoldOutlined
            onClick={() => setCollasped(!collasped)}
            size={27}
            style={{ marginRight: 20, fontSize: 27 }}
          />
          <div className="brand">Cool-Dashboard</div>
        </div>
      </Header>
      <Layout>
        <Sider theme="light" collapsed={collasped}>
          <Menu
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                icon: <HomeFilled />,
                children: [
                  {
                    label: "Profile",
                    key: "profile",
                    icon: <ContactsFilled />,
                  },
                  {
                    label: "Users",
                    key: "users",
                    icon: <UserOutlined />,
                  },
                ],
              },
              {
                label: "About us",
                key: "aboutus",
                icon: <DatabaseFilled />,
              },
            ]}
          />
        </Sider>
        <Content className="content">
          <Space direction="horizontal">
            {/* <Card>
            <Typography.Title level={1}>Sales Department</Typography.Title>
            <Typography.Paragraph>
              Typography is used when you need to display a title or paragraph
              contents in Articles/Blogs/Notes. can also be used When you need
              copyable/editable/ellipsis texts.
            </Typography.Paragraph>
            <Typography.Paragraph>
              In the process of internal desktop applications development, many
              different design specs and implementations would be involved,
              which might cause designers and developers difficulties and
              duplication and reduce the efficiency of development. After
              massive project practice and summaries, Ant Design, a design
              language for background applications, is refined by Ant UED Team,
              which aims to uniform the user interface specs for internal
              background projects, lower the unnecessary cost of design
              differences and implementation and liberate the resources of
              design and front-end development.
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Space direction="vertical">
                <Text>Ant Design (default Text)</Text>
                <Text type="secondary">Ant Design (secondary)</Text>
                <Text type="success">Ant Design (success)</Text>
                <Text type="warning">Ant Design (warning)</Text>
                <Text type="danger">Ant Design (danger)</Text>
                <Text disabled>Ant Design (disabled)</Text>
                <Text mark>Ant Design (mark)</Text>
                <Text code>Ant Design (code)</Text>
                <Text keyboard>Ant Design (keyboard)</Text>
                <Text underline>Ant Design (underline)</Text>
                <Text delete>Ant Design (delete)</Text>
                <Text strong>Ant Design (strong)</Text>
                <Text italic>Ant Design (italic)</Text>
                <Link href="https://ant.design" target="_blank">
                  Ant Design (Link)
                </Link>
              </Space>
            </Typography.Paragraph>
            <Typography.Paragraph
              copyable={{
                text: async () =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve("Request text");
                    }, 500);
                  }),
              }}
            >
              Request copy text.
            </Typography.Paragraph>
            
          </Card> */}
            <Card>
              <Typography.Title level={4}>Sales</Typography.Title>
              <Space direction="horizontal">
                <MoneyCollectOutlined />
                <Text strong>Total Sales</Text>
              </Space>
              <Typography.Title level={3}> $ 4,0000</Typography.Title>
            </Card>
            <Card>
              <Typography.Title level={4}>Sales</Typography.Title>
              <Space direction="horizontal">
                <MoneyCollectOutlined />
                <Text strong>Total Sales</Text>
              </Space>
              <Typography.Title level={3}> $ 4,0000</Typography.Title>
            </Card>
            <Card>
              <Typography.Title level={4}>Sales</Typography.Title>
              <Space direction="horizontal">
                <MoneyCollectOutlined />
                <Text strong>Total Sales</Text>
              </Space>
              <Typography.Title level={3}> $ 4,0000</Typography.Title>
            </Card>
            <Card>
              <Typography.Title level={4}>Sales</Typography.Title>
              <Space direction="horizontal">
                <MoneyCollectOutlined />
                <Text strong>Total Sales</Text>
              </Space>
              <Typography.Title level={3}> $ 4,0000</Typography.Title>
            </Card>
            <Card>
              <Typography.Title level={4}>Sales</Typography.Title>
              <Space direction="horizontal">
                <MoneyCollectOutlined />
                <Text strong>Total Sales</Text>
              </Space>
              <Typography.Title level={3}> $ 4,0000</Typography.Title>
            </Card>
          </Space>
          <Divider />
          <Card>
              <Steps
               current={1}
               size="small"
               items={[
                 {
                   title: 'Finished',
                   description: 'This is a description.',
                   icon: <UserOutlined />,
                 },
                 {
                   title: 'In Progress',
                   description : 'This is a description.',
                   subTitle: 'Left 00:00:08',
                 },
                 {
                   title: 'Waiting',
                   description: 'This is a description.',
                 },
               ]}
              />
                
            
          </Card>
          <Divider />
          {/* <Row gutter= {10}>
            <Col span={8}>
            <Card>
            <Typography.Title level={1}>Sales Department</Typography.Title>
            <Typography.Paragraph>
              Typography is used when you need to display a title or paragraph
              contents in Articles/Blogs/Notes. can also be used When you need
              copyable/editable/ellipsis texts.
            </Typography.Paragraph>
            </Card>
            </Col>
          </Row> */}
          <Row>
            <Col span={18}>
              <Table
                //style={{ height: 500 }}
                dataSource={data}
                columns={[
                  {
                    title: "ID",
                    dataIndex: "id",
                    key: "id",
                  },
                  {
                    title: "Name",
                    dataIndex: "name",
                    key: "name",
                  },
                  {
                    title: "E-mail",
                    dataIndex: "email",
                    key: "email",
                  },
                  {
                    title: "Status",
                    dataIndex: "status",
                    key: "status",
                    render: (_: any, val: any) =>
                      val ? (
                        <Tag color="red">YES</Tag>
                      ) : (
                        <Tag color="blue">NO</Tag>
                      ),
                  },
                ]}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span="17">
              <div>
                <Radio.Group
                  onChange={({ target: { value } }) => {
                    setSelectionType(value);
                  }}
                  value={selectionType}
                >
                  <Radio value="checkbox">Checkbox</Radio>
                  <Radio value="radio">radio</Radio>
                </Radio.Group>

                <Divider />

                <Table
                  rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                  }}
                  columns={columns}
                  dataSource={data1}
                />
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default DashBoard;
