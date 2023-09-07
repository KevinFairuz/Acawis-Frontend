// import Home from "./content/Home"
// import Login from "./login/login"
// import  Register from "./login/Register"
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/AllApps";
// import Analytics from "./pages/Analytics";
import BuatJanji from "./pages/BuatJanji";
import Build from "./pages/Build";
import Settings from "./pages/Pesanan";
import Stroage from "./pages/TesAkademik";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<AllApps />} />
        <Route path="/BuatJanji" element={<BuatJanji />} />
        <Route path="/TesAkademik" element={<Stroage />} />
        <Route path="/Pesanan" element={<Settings />} />
        <Route path="/build/:bID" element={<Build />} />
        {/* <Route path="/analytics/:aID" element={<Analytics />} /> */}
      </Routes>
    </RootLayout>
  );
};

export default App;
