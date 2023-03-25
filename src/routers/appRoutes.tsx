// import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../container/dashboard";
// import { LoginPage } from "containers/auth";
// import { ListDataset } from "containers/dataset";
// import { CreateDataset } from "containers/dataset";
// import { ListFeatureGroup } from "containers/featureGroup";
// import { CreateFeatureGroup } from "containers/featureGroup";
// import { Listsyntheticdataset } from "containers/syntheticDataset";
// import { Createsyntheticdataset } from "containers/syntheticDataset";
// import { ExportData } from "containers/exportData";
// import Dashboard from "containers/dashboard";
// import FeatureStore from "containers/featureStore";
// import PrivacyPolicy from "containers/privacyPolicy";
// import Unauthorized from "containers/unauthorized";
// import store from "store";
// import { Redirect } from "react-router-dom";
// import ForgotPasswordPage from "containers/auth/ForgotPasswordPage";
// import RegisterPage from "containers/auth/RegisterPage";
// import ResetPasswordPage from "containers/auth/ResetPasswordPage";
// import UserProfile from "containers/userProfile";
// import ModMarket from "containers/modMarket";
// import ModMarketSideNavIcon from "containers/modMarket/icons/ModMarketSideNavIcon";
// import PathFinder from "containers/modMarket/pathfinder";
// import ModMarketTags from "containers/modMarket/ModMarketTags";
// import FilteredModels from "containers/modMarket/FilteredModels";
// import UsersSideNavIcon from "containers/users/icons/UsersSideNavIcon";
// import Users from "containers/users";
// import userGroupSIdeNavIcon from "containers/userGroup/icons/userGroupSIdeNavIcon";
// import UserGroup from "containers/userGroup";
// import DataCatalogue from "containers/datacatalogue";
// import Databricks from "containers/databricks";
// import PowerBI from "containers/powerbi";
// import ExecutiveDash from "containers/executivedash";

// const ModStorePage = React.lazy(() => import("containers/modstore"));


// const DefaultRoute = () =>
//   store.getState().auth.access ? (
//     // <Redirect to="/dashboard" />
//     redirect("/dashboard");
//   ) : (
//     redirect("/login");
//   );

// export const Roles = {
//   SUPERUSER: "is_superuser",
// };

// const appRoutes = [
//   {
//     name: "Login",
//     path: "/login",
//     component: LoginPage,
//     protected: false,
//     isNavMenu: false,
//     permission: [],
//   },
//   {
//     name: "ForgotPassword",
//     path: "/forgot-password",
//     component: ForgotPasswordPage,
//     protected: false,
//     isNavMenu: false,
//     permission: [],
//   },
//   {
//     name: "ResetPassword",
//     path: "/reset-password/:uid/:token",
//     component: ResetPasswordPage,
//     protected: false,
//     isNavMenu: false,
//     permission: [],
//   },
//   {
//     name: "Register",
//     path: "/register",
//     component: RegisterPage,
//     protected: false,
//     isNavMenu: false,
//     permission: [],
//   },
//   {
//     name: "Privacy Policy",
//     path: "/privacypolicy",
//     component: PrivacyPolicy,
//     protected: false,
//     isNavMenu: false,
//     icon: "trending_up",
//     permission: [],
//   },
//   {
//     name: "Unauthorized",
//     path: "/unauthorized",
//     component: Unauthorized,
//     protected: false,
//     isNavMenu: false,
//     icon: "trending_up",
//     permission: [],
//   },
//   {
//     name: "Dashboard",
//     path: "/dashboard",
//     component: Dashboard,
//     protected: true,
//     isNavMenu: true,
//     icon: "desktop_mac", // DesktopMac
//     permission: [],
//   },
//   {
//     name: "default",
//     path: "/",
//     protected: false,
//     component: DefaultRoute,
//     permission: [],
//   },
// ];

// export default appRoutes;

// const Dashboard = () => {
//   return <><p>Dashboard</p></>
// }

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Dashboard />
  },
  {
    path: "/forgot-password",
    element: <Dashboard />
  },
  {
    path: "/privacypolicy",
    element: <Dashboard />
  },
  {
    path: "/unauthorized",
    element: <Dashboard />
  },
]);
