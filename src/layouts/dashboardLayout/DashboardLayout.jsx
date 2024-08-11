import React from "react";
import "./dashboardLayout.css";
import { Outlet } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatList from "../../components/chatList/ChatList";
const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navi = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navi("/sign-in");
    }
  }, [isLoaded, userId, navi]);
  if (!isLoaded) {
    return "Loading..."
    
  }

  return (
    <div className="dashboardLayout">
      <div className="menu">MENU<ChatList/></div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
