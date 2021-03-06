import React from "react";
import { Route } from "react-router-dom";

import QuestionAllListContainer from "../contact/container/QuestionAllListContainer";
import InfoListContainer from "../admin/container/info/InfoListContainer";
import InfoDetailContainer from "../admin/container/info/InfoDetailContainer";
import InfoEditContainer from "../admin/container/info/InfoEditContainer";
import ReportBoardContainer from "../admin/container/report/ReportBoardContainer";
import InquiryContainer from "../admin/container/inquiry/InquiryContainer";
import MemberMngContainer from "../admin/container/member/MemberMngContainer";


const AdminRoutes = ({ match }) => {

  return (
    <>
      <Route exact path={`${match.url}`} component={MemberMngContainer} />
      <Route exact path={`${match.url}/member`} component={MemberMngContainer} />
      <Route exact path={`${match.url}/qna-all`} component={QuestionAllListContainer} />
      <Route exact path={`${match.url}/info-list`} component={InfoListContainer} />
      <Route exact path={`${match.url}/info-write`} component={InfoEditContainer} />
      <Route exact path={`${match.url}/info-detail`} component={InfoDetailContainer} />
      <Route exact path={`${match.url}/inquiry`} component={InquiryContainer} />
      <Route exact path={`${match.url}/report`} component={ReportBoardContainer} />
    </>
  );
};
export default AdminRoutes;