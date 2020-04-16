import React from "react";
import MailingListInput from "../../components/mailing-list/MailingListInput";
import Banner from "../../components/Banner/Banner";
import { Col, Row } from "antd";
import "./Home.css"

export default () => {
  return (
    <>
      <Banner />
      <Row>
        <Col span={8} offset={8}>
          <MailingListInput />
        </Col>
      </Row>
    </>
  );
};
