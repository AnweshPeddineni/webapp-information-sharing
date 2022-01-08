import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const { Sider, Content, Header } = Layout;
const { SubMenu } = Menu;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
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
        theme="light"
        breakpoint="md"
        collapsedWidth="0"
        width="250px"
      >
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/admin/dashboard" className="nav-link">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="23" icon={<PlusOutlined />}>
            <Link to="/admin/create-stock" className="nav-link">
              Create New Stock
            </Link>
          </Menu.Item>
          <Menu.Item key="22" icon={<PlusOutlined />}>
            <Link to="/admin/create-new-transaction" className="nav-link">
              Create New Transaction
            </Link>
          </Menu.Item>

          <SubMenu key="sub1" title="India stock portfolio">
            <Menu.Item key="10" icon={<UserOutlined />}>
              <Link to="/admin/consolidate-portfolio" className="nav-link">
                Consolidate Portfolio
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="2">
              <Link to="/admin/current-month-transaction" className="nav-link">
                Current month transactions
              </Link>
            </Menu.Item> */}
            <Menu.Item key="6">
              <Link to="/admin/previous-month-buy" className="nav-link">
                Month Wise Transcations
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="US stock portfolio">
            <Menu.Item key="13" icon={<UserOutlined />}>
              <Link to="/admin/consolidate-portfolio-us" className="nav-link">
                Consolidate Portfolio
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="18">
              <Link
                to="/admin/current-month-transaction/us"
                className="nav-link"
              >
                Current Month Transaction
              </Link>
            </Menu.Item> */}
            <Menu.Item key="7">
              <Link to="/admin/previous-month-buy/US" className="nav-link">
                Month Wise Transactions
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="11">
            <Link to="/admin/all-blog" className="nav-link">
              All Blogs
            </Link>
          </Menu.Item>
          <Menu.Item key="12">
            <Link to="/admin/create-blog" className="nav-link">
              Create Blog
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="d-flex">
          <div className="logo text-center py-3">
            <span className="navbar-brand">{HomeIcon()}</span>
          </div>
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
            margin: "24px 0px",
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
