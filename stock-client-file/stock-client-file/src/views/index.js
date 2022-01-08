// auth views
export { default as Login } from "./auth/Login";
export { default as Register } from "./auth/Register";
export { default as RegisterComplete } from "./auth/RegisterComplete";
export { default as ForgotPassword } from "./auth/ForgotPassword";

// common views
export { default as Home } from "./Home";
export { default as Product } from "./Product";
export { default as CategoryHome } from "./category/CategoryHome";
export { default as SubcategoryHome } from "./subcategory/SubcategoryHome";
export { default as Shop } from "./Shop";
export { default as Cart } from "./Cart";
export { default as IndianStockPortfolio } from "./IndianStockPortfolio";
export { default as UsStockPortfolio } from "./UsStockPortfolio";
export { default as Faq } from "./Faq";
export { default as Brokerage } from "./Brokerage.js";
export { default as Approach } from "./Approach.js";
export { default as Contact } from "./Contact.js";
export { default as TermsConditions } from "./TermsConditions.js";
export { default as PrivacyPolicy } from "./PrivacyPolicy.js";
export { default as RefundPolicy } from "./RefundPolicy.js";

// user views
export { default as History } from "./user/History";
export { default as BuyIndCurrentMon } from "./user/navComp/BuyIndCurrentMon";
export { default as BuyUsCurrentMon } from "./user/navComp/BuyUsCurrentMon";
export { default as BuyIndPreviousMon } from "./user/navComp/BuyIndPreviousMon";
export { default as BuyUsPreviousMon } from "./user/navComp/BuyUsPreviousMon";
export { default as UserConsolidatePortfolio } from "./user/navComp/ConsolidatePortfolio";
export { default as UserConsolidatePortfolioUs } from "./user/navComp/ConsolidatePortfolioUs";
export { default as Blog } from "./user/Blog";
export { default as UsBlogs } from "./user/UsBlogs";
export { default as Password } from "./user/Password";
export { default as Wishlist } from "./user/Wishlist";
export { default as Checkout } from "./Checkout";
export { default as Payment } from "./Payment";

// admin views
export { default as AdminDashboard } from "./admin/AdminDashboard";
export { default as AdminBuy } from "./admin/navcomp/AdminBuy";
export { default as AdminBuyUS } from "./admin/navcomp/AdminBuyUS";
export { default as BuyPreviousMonth } from "./admin/navcomp/BuyPreviousMonth";
export { default as BuyPreviousMonthUS } from "./admin/navcomp/BuyPreviousMonthUS";
export { default as ConsolidatePortfolio } from "./admin/navcomp/ConsolidatePortfolio";
export { default as ConsolidatePortfolioUs } from "./admin/navcomp/ConsolidatePortfolioUs";
export { default as CreateTransactionForPortfolio } from "./admin/navcomp/CreateStockForTransaction";
export { default as CreateStockForPortfolio } from "./admin/navcomp//CreateStockForPortfolio";
export { default as CreateStockForTransaction } from "./admin/navcomp/CreateStockForTransaction";

export { default as CategoryCreate } from "./admin/category/CategoryCreate";
export { default as CategoryUpdate } from "./admin/category/CategoryUpdate";
export { default as SubcategoryCreate } from "./admin/subcategory/SubcategoryCreate";
export { default as SubcategoryUpdate } from "./admin/subcategory/SubcategoryUpdate";
export { default as ProductCreate } from "./admin/product/ProductCreate";
export { default as AllProducts } from "./admin/product/AllProducts";
export { default as ProductUpdate } from "./admin/product/ProductUpdate";
export { default as CreateCoupon } from "./admin/coupons/CreateCoupon";

export { default as UpdateStock } from "./admin/stock/UpdateStock";
export { default as updateTransaction } from "./admin/stock/UpdateTransaction";
