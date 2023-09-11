import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div style={{ position: "sticky", top: "0" }}>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
