import {BrowserRouter as Router , Route, Switch} from "react-router-dom" ;
import NavabrComp from "./NavbarComp";
import HomeComp from "./HomeComp";
import AboutComp from "./AboutComp";
import FooterComp from "./FooterComp";
import FrequentlyComp from "./FrequentlyComp";
import DoctorsComp from "./DoctorsComp";
import SingleDocComp from "./SingleDocComp";
import PatientProfile from "./PatientProfile";
import SearchPage from "./SearchPage";
import Error from "./Error";
import DocDashboardProfile from "./DocDashboardProfile";
import DocDashboardAppointments from "./DocDashboardAppointments";
import AdminDachboard from "./AdminDachboard";
import AdminDachboardDoctors from "./AdminDachboardDoctors";
import AdminDachboardAppointments from "./AdminDachboardAppointments";
import AddDoc from "./AddDoc";

function App() {
  return (
    <Router>
      <div className="App">
        <NavabrComp />
        <Switch>
          <Route exact path="/">
            <HomeComp />
          </Route>

          <Route path="/AboutComp">
            <AboutComp />
          </Route>
          
          <Route path="/FrequentlyComp">
            <FrequentlyComp />
          </Route>
          
          <Route path="/DoctorsComp">
            <DoctorsComp />
          </Route>

          <Route path="/SearchPage">
            <SearchPage />
          </Route>

          <Route path="/AdminDachboardAppointments">
            <AdminDachboardAppointments />
          </Route>
          <Route path="/AdminDachboardDoctors">
            <AdminDachboardDoctors />
          </Route>
          <Route path="/AddDoc">
            <AddDoc />
          </Route>

          <Route path="*">
            <Error />
          </Route>

        </Switch>
        <SingleDocComp />
        <PatientProfile />
        <DocDashboardProfile />
        <DocDashboardAppointments />
        <AdminDachboard />
        <FooterComp />
      </div>
    </Router>
  );
}

export default App;
