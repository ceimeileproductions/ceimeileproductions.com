import React from "react";
import { Route, Link, withRouter, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Team from "./containers/team/Team";
import Artists from "./containers/artists/Artists";
import WorkWithUs from "./containers/work-with-us/WorkWithUs";
import { Layout, Menu } from "antd";
import {
  TeamOutlined,
  HomeOutlined,
  UserOutlined,
  BulbOutlined,
  ExportOutlined
} from "@ant-design/icons";
import "./App.css";
import DefaultPage from './containers/default-page/DefaultPage';

const { Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu theme="dark" selectedKeys={[window.location.pathname]} defaultSelectedKeys={["/"]} mode="inline">
          <Menu.Item key="/">
            <Link to="/">
              <HomeOutlined />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://blog.ceimeileproductions.com">
              <span>
                <ExportOutlined />
                <span>News</span>
              </span>
            </a>
          </Menu.Item>
          <Menu.Item key="/team">
            <Link to="/team">
              <span>
                <TeamOutlined />
                <span>Team Céim Eile</span>
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/artists">
            <Link to="/artists">
              <span>
                <UserOutlined />
                <span>Associate Artists</span>
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/work-with-us">
            <Link to="/work-with-us">
              <BulbOutlined />
              <span>Work with us</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "10px 16px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            <Route path="/artists" component={Artists} />
            <Route path="/work-with-us" component={WorkWithUs} />
            <Route component={DefaultPage} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Céim Eile Productions © 2020
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withRouter(App);
