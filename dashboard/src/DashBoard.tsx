import { ContactsFilled, DatabaseFilled, HomeFilled, UserOutlined } from "@ant-design/icons";
import "./styles/dashboard.css";
import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

const DashBoard = () => {
  return (
    <Layout className="container">
      <Header style={{backgroundColor: "white"}}>
        <div className="brand">
          Cool-Dashboard
        </div>
      </Header>
      <Layout>
        <Sider theme="light">
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
                icon: <ContactsFilled />
                },
                {
                  label: "Users",
                  key: "users",
                  icon: <UserOutlined />
                }
              ]
            },
            {
              label: "About us",
              key: "aboutus",
              icon: <DatabaseFilled />
            },
          ]}/>
        </Sider>
        <Content>
          <h1>Content</h1>
        </Content>
      </Layout>
      <Footer>
        Footer
    </Footer>
    </Layout>
  );
};

export default DashBoard;
