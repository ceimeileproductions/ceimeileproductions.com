import React from "react";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;

export default () => {
    return (
        <>
            <Row className="tagline-row">
                <Col span={12}>
                    <Title className="tagline-col-text" level={2}>NEW THEATRE.</Title>
                </Col>
                <Col span={12}>
                    <Title className="tagline-col-text" level={2}>NEW EXPERIENCES.</Title>
                </Col>
            </Row>
            <Row>
                <Col span={8} offset={8}>
                    <Title className="coming-soon-text" level={3}>coming soon</Title>
                </Col>
            </Row>
        </>
    )
}