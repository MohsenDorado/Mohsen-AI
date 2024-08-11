import React from "react";
import "./rootLayout.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Mohsen AI</span>
        </Link>
        <div className="user">USER</div>
        <header>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
