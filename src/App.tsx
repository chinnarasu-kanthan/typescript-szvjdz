import React from "react";
import "./styles/_app.scss";
import { router } from "./routers/appRoutes";
// import PublicRouteComponent from "./routers/publicRouteComponent";
// import ProtectedRouteComponent from "./routers/index";
import { RouterProvider } from "react-router-dom";
// import { syncHistoryWithStore } from "react-router-redux";
// import { Provider } from "react-redux";
// import store, { browserHistory, persistor } from "./store";
// import { PersistGate } from "redux-persist/integration/react";
// import Snackbar from "./components/reduxSnackbar/Snackbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Dashboard from './container/dashboard';

const theme = createTheme({
  palette: {
    primary: {
      light: '#1A3D67',
      main: '#1A3D67',
      dark: '#1A3D67',
      contrastText: '#fff',
    },
    secondary: {
      light: '#D5D5D5',
      main: '#D5D5D5',
      dark: '#D5D5D5',
      contrastText: '#000',
    },
    success: {
      light: '#4CAF50',
      main: '#4CAF50',
      dark: '#4CAF50',
      contrastText: '#fff',
    },
    error: {
      light: '#F44336',
      main: '#F44336',
      dark: '#F44336',
      contrastText: '#fff',
    },
    warning: {
      light: '#ff9800',
      main: '#ff9800',
      dark: '#ff9800',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      light: '#3399FF',
      main: '#3399FF',
      dark: '#1976d2',
      contrastText: '#fff',
    }
  },
})

// const routes: any = [];

// const protectedRoutes = appRoutes.filter((it) => it.protected);
// const publicRoutes = appRoutes.filter((it) => !it.protected);

// protectedRoutes.forEach((protectedRouteObj: any) => {
//   if (
//     protectedRouteObj.childMenu &&
//     Array.isArray(protectedRouteObj.childMenu) &&
//     protectedRouteObj.childMenu.length > 0
//   ) {
//     const parentPath = protectedRouteObj.path;
//     protectedRouteObj.childMenu.forEach((childMenu: any) => {
//       routes.push(
//         <ProtectedRouteComponent
//           {...childMenu}
//           key={childMenu.name}
//           path={`${parentPath}${childMenu.path}`}
//           component={childMenu.component}
//         />
//       );
//     });
//   } else {
//     routes.push(
//       <ProtectedRouteComponent
//         {...protectedRouteObj}
//         key={protectedRouteObj.name}
//         path={protectedRouteObj.path}
//         component={protectedRouteObj.component}
//       />
//     );
//   }
// });

// publicRoutes.forEach((publicRouteObj) => {
//   routes.push(
//     <PublicRouteComponent
//       key={publicRouteObj.name}
//       path={publicRouteObj.path}
//       component={publicRouteObj.component}
//     />
//   );
// });

// export const history = syncHistoryWithStore(browserHistory, store);

function App() {
  return (
    <Dashboard />
  );
}

export default App;
