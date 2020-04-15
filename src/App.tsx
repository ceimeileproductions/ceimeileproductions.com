import React from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Team from "./containers/team/Team";
import Artists from "./containers/artists/Artists";
import WorkWithUs from "./containers/work-with-us/WorkWithUs";
import { Layout, Menu, Typography } from "antd";
import {
  TeamOutlined,
  HomeOutlined,
  ContactsOutlined,
  UserOutlined,
  BulbOutlined
} from "@ant-design/icons";
import "./App.css";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

function App() {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Link to="/">
              <HomeOutlined />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={
              <Link to="/about">
                <span>
                  <ContactsOutlined />
                  <span>About Us</span>
                </span>
              </Link>
            }
          >
            <Menu.Item key="6">
              <Link to="/team">
                <span>
                  <TeamOutlined />
                  <span>Team Céim Eile</span>
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/artists">
                <span>
                  <UserOutlined />
                  <span>Associate Artists</span>
                </span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Link to="/work-with-us">
              <BulbOutlined />
              <span>Work with us</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "10px 16px" }}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/artists" component={Artists} />
          <Route path="/work-with-us" component={WorkWithUs} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Céim Eile Productions © 2020
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withRouter(App);
