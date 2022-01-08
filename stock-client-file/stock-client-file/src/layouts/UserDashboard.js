import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const { Sider, Content, Header } = Layout;
const DashboardLayout = ({ children }) => {
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const HomeIcon = () => (
    <Link to="/">
      <div className="px-5 small">Stock Anwesh Logo</div>
      {/* <img id="home-logo" style={{ width: "1.7rem" }} src={JI} alt="J.I" /> */}
    </Link>
  );

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sidebar"
        breakpoint="md"
        theme="light"
        collapsedWidth={0}
        width="280px"
      >
        <div className="logo text-center py-3">
          <span className="navbar-brand">{HomeIcon()}</span>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/user/history" className="nav-link">
              Dashboard
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" title="Indian Stock Portfolio">
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link
                to="/user/consolidate-portfolio-indian"
                className="nav-link"
              >
                Consolidate Portfolio
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="3">
              <Link to="/user/buy-ind-this-month" className="nav-link">
                Current Month Transaction
              </Link>
            </Menu.Item> */}
            <Menu.Item key="4">
              <Link to="/user/buy-ind-previous-month" className="nav-link">
                Month Wise Transaction
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/user/blogs-indian" className="nav-link">
                Blogs
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="US Stock Portfolio">
            <Menu.Item key="111" icon={<UserOutlined />}>
              <Link to="/user/consolidate-portfolio-us" className="nav-link">
                Consolidate Portfolio
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="7">
              <Link to="/user/buy-us-this-month" className="nav-link">
                Current Month Transaction
              </Link>
            </Menu.Item> */}
            <Menu.Item key="8">
              <Link to="/user/buy-us-previous-month" className="nav-link">
                Month Wise Transaction
              </Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to="/user/blogs-us" className="nav-link">
                Blogs
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="12">
            <Link to="/user/password" className="nav-link">
              Password
            </Link>
          </Menu.Item>
          <Menu.Item key="13">
            <Link to="/user/wishlist" className="nav-link">
              Wishlist
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="d-flex">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
