import {
  ContactsFilled,
  DatabaseFilled,
  HomeFilled,
  MenuFoldOutlined,
  MoneyCollectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./styles/dashboard.css";
import { Button, Card, Col, Divider, Layout, Menu, Row, Space, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
const { Text, Link } = Typography;

const DashBoard = () => {
  const [collasped, setCollasped] = useState<any>();

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
          <Row gutter= {10}>
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
          </Row>
          <Row>
            <Col span={18}>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default DashBoard;
