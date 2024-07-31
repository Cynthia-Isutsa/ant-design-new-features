import {
  ContactsFilled,
  DatabaseFilled,
  HomeFilled,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./styles/dashboard.css";
import { Card, Layout, Menu, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

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
          <Card>
            <Typography.Title>Sales Department</Typography.Title>
            <Typography.Paragraph>
              This example demonstrates the basic structure and functionality
              for a CRUD application in React. You have components for creating,
              reading (listing), updating, and deleting files, with the main
              state management handled in the App component. This is a simple
              example and can be extended with more complex state management,
              validation, and styles as needed.
            </Typography.Paragraph>
          </Card>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default DashBoard;
