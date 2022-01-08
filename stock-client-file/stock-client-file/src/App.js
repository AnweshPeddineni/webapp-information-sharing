import React, { useEffect, Suspense } from "react";
import { lazily } from "react-lazily";
import { Switch, withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./api/auth";
import { LoadingOutlined } from "@ant-design/icons";
import NewBlog from "./views/admin/blog/NewBlog";
import AllBlogs from "./views/admin/blog/AllBlogs";
import UpdateBlog from "./views/admin/blog/UpdateBlog";
import ReactGA from "react-ga";

const {
  Login,
  Register,
  Home,
  IndianStockPortfolio,
  UsStockPortfolio,
  Faq,
  Brokerage,
  Contact,
  Approach,
  RegisterComplete,
  ForgotPassword,
  History,
  Password,
  Wishlist,
  AdminDashboard,
  UpdateStock,
  AdminBuy,
  TermsConditions,
  PrivacyPolicy,
  RefundPolicy,
  ConsolidatePortfolio,
  BuyPreviousMonth,
  BuyIndCurrentMon,
  BuyUsCurrentMon,
  AdminBuyUS,
  BuyPreviousMonthUS,
  UserConsolidatePortfolio,
  UserConsolidatePortfolioUs,
  BuyIndPreviousMon,
  BuyUsPreviousMon,
  Blog,
  UsBlogs,
  ConsolidatePortfolioUs,
  CreateStockForTransaction,
  CreateStockForPortfolio,
  updateTransaction,
} = lazily(() => import("./views"));

const { Route, UserRoute, AdminRoute, SideDrawer } = lazily(() =>
  import("./components")
);

const { MainLayout, DashboardLayout, UserDashboard } = lazily(() =>
  import("./layouts")
);

ReactGA.initialize("UA-209784762-1");

const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                role: res.data.role,
                token: idTokenResult.token,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });

    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div className="col text-center p-5 h1">
          __ ST
          <LoadingOutlined />
          CK_
        </div>
      }
    >
      <ToastContainer />
      <SideDrawer />
      <Switch>
        {/* auth routes */}
        <Route exact path="/" component={Home} layout={MainLayout} />
        <Route exact path="/login" component={Login} layout={MainLayout} />
        <Route
          exact
          path="/register"
          component={Register}
          layout={MainLayout}
        />
        <Route
          exact
          path="/register/complete"
          component={RegisterComplete}
          layout={MainLayout}
        />
        <Route
          exact
          path="/forgot/password"
          component={ForgotPassword}
          layout={MainLayout}
        />
        {/* user routes */}
        <UserRoute
          exact
          path="/user/history"
          component={History}
          layout={UserDashboard}
        />
        <UserRoute
          exact
          path="/user/password"
          component={Password}
          layout={UserDashboard}
        />

        <UserRoute
          exact
          path="/user/buy-ind-this-month"
          component={BuyIndCurrentMon}
          layout={UserDashboard}
        />
        <UserRoute
          exact
          path="/user/buy-ind-previous-month"
          component={BuyIndPreviousMon}
          layout={UserDashboard}
        />
        <UserRoute
          exact
          path="/user/consolidate-portfolio-indian"
          component={UserConsolidatePortfolio}
          layout={UserDashboard}
        />
        <UserRoute
          exact
          path="/user/consolidate-portfolio-us"
          component={UserConsolidatePortfolioUs}
          layout={UserDashboard}
        />
        <UserRoute
          exact
          path="/user/buy-us-this-month"
          component={BuyUsCurrentMon}
          layout={UserDashboard}
        />
        <UserRoute
          exact
          path="/user/buy-us-previous-month"
          component={BuyUsPreviousMon}
          layout={UserDashboard}
        />
        <UserRoute
          exact
          path="/user/blogs-indian"
          component={Blog}
          layout={UserDashboard}
        />
        <UserRoute
          exact
          path="/user/blogs-us"
          component={UsBlogs}
          layout={UserDashboard}
        />

        <UserRoute
          exact
          path="/user/wishlist"
          component={Wishlist}
          layout={UserDashboard}
        />

        {/* admin routes */}
        <AdminRoute
          exact
          path="/admin/dashboard"
          component={AdminDashboard}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/admin/create-stock"
          component={CreateStockForPortfolio}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/admin/create-new-transaction"
          component={CreateStockForTransaction}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/admin/current-month-transaction"
          component={AdminBuy}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/admin/current-month-transaction/us"
          component={AdminBuyUS}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/admin/consolidate-portfolio"
          component={ConsolidatePortfolio}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/admin/consolidate-portfolio-us"
          component={ConsolidatePortfolioUs}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/admin/previous-month-buy"
          component={BuyPreviousMonth}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/admin/previous-month-buy/US"
          component={BuyPreviousMonthUS}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/stock/edit/:id"
          component={UpdateStock}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/transaction/edit/:id"
          component={updateTransaction}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/admin/create-blog"
          component={NewBlog}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/admin/all-blog"
          component={AllBlogs}
          layout={DashboardLayout}
        />
        <AdminRoute
          exact
          path="/admin/blog/edit/:id"
          component={UpdateBlog}
          layout={DashboardLayout}
        />

        <Route
          exact
          path="/indian-stock-portfolio"
          component={IndianStockPortfolio}
          layout={MainLayout}
        />
        <Route
          exact
          path="/us-stock-portfolio"
          component={UsStockPortfolio}
          layout={MainLayout}
        />
        <Route exact path="/faqs" component={Faq} layout={MainLayout} />
        <Route
          exact
          path="/brokerage"
          component={Brokerage}
          layout={MainLayout}
        />
        <Route exact path="/contact" component={Contact} layout={MainLayout} />
        <Route
          exact
          path="/approach"
          component={Approach}
          layout={MainLayout}
        />
        <Route
          exact
          path="/terms-and-conditions"
          component={TermsConditions}
          layout={MainLayout}
        />
        <Route
          exact
          path="/privacy-policy"
          component={PrivacyPolicy}
          layout={MainLayout}
        />
        <Route
          exact
          path="/refund-policy"
          component={RefundPolicy}
          layout={MainLayout}
        />
      </Switch>
    </Suspense>
  );
};

export default withRouter(App);
