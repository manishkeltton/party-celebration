import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnniversaryIndoor from "../Anniversary/AnniversaryIndoor";
import AnniversaryOutdoor from "../Anniversary/AnniversaryOutdoor";
import BirthdayIndoor from "../Birthday/BirthdayIndoor";
import BirthdayOutdoor from "../Birthday/BirthdayOutdoor";
import DatingIndoor from "../Dating/DatingIndoor";
import DatingOutdoor from "../Dating/DatingOutdoor";
import NavBar from "../NavBar";
import ProposalIndoor from "../Proposal/ProposalIndoor";
import ProposalOutdoor from "../Proposal/ProposalOutdoor";
import SurprisesIndoor from "../Surprises/SurprisesIndoor";
import SurprisesOutdoor from "../Surprises/SurprisesOutdoor";
const RouteComponent = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/birthdayindoor">
            <BirthdayIndoor />
          </Route>
          <Route path="/birthdayoutdoor">
            <BirthdayOutdoor />
          </Route>
          <Route path="/anniversaryindoor">
            <AnniversaryIndoor />
          </Route>
          <Route path="/anniversaryoutdoor">
            <AnniversaryOutdoor />
          </Route>
          <Route path="/datingindoor">
            <DatingIndoor />
          </Route>
          <Route path="/datingoutdoor">
            <DatingOutdoor />
          </Route>
          <Route path="/proposalindoor">
            <ProposalIndoor />
          </Route>
          <Route path="/proposaloutdoor">
            <ProposalOutdoor />
          </Route>
          <Route path="/surprisesindoor">
            <SurprisesIndoor />
          </Route>
          <Route path="/surprisesoutdoor">
            <SurprisesOutdoor />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default RouteComponent;
