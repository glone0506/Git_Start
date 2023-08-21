
import Main_Page from "views/examples/Main_Page.js";
import User_Management_Page from "views/examples/User_Management";
import Beacon_Data_Page from "views/examples/Beacon_Data.js";
import Tracking_Page from "views/examples/Tracking.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Setting_Page from "views/examples/Setting.js";

var routes = [
  {
    path: "/main",
    name: "Main Page",
    icon: "ni ni-world text-red",
    component: <Main_Page />,
    layout: "/admin",
  },
  {
    path: "/user_management",
    name: "User Management",
    icon: "ni ni-single-02 text-orange",
    component: <User_Management_Page />,
    layout: "/admin",
  },
  {
    path: "/beacon_data",
    name: "Beacon Data",
    icon: "ni ni-bullet-list-67 text-yellow",
    component: <Beacon_Data_Page />,
    layout: "/admin",
  },
  {
    path: "/tracking",
    name: "Tracking",
    icon: "ni ni-bullet-list-67 text-green",
    component: <Tracking_Page />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-blue",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/setting",
    name: "Setting",
    icon: "ni ni-settings-gear-65 text-gray",
    component: <Setting_Page />,
    layout: "/auth",
  },
];
export default routes;
