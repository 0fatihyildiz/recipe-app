import { Outlet } from "react-router-dom";
import Header from "../components/layout/header";

export default function Root() {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
