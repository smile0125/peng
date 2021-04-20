// import AsyncComponent from "./component/AsyncComponents/index";
import LazyComponent from './utils/lazy';
export default [
  {
    name: "index",
    path: "/",
    exact: true,
    component: LazyComponent(() =>
      import(/*webpackChunkName: "index"*/ "./pages/index/index.jsx")
    ),
  },{
    name: "detail",
    path: "/detail",
    exact: true,
    component: LazyComponent(() =>
      import(/*webpackChunkName: "detail"*/ "./pages/Detail/index.jsx")
    ),
  },
];
