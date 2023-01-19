import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row, Progress, Space, Spin } from "antd";
import "./index.css";
import { CaretDownOutlined } from "@ant-design/icons";
import { LandingPageCards } from "../../component/index";
import { getAllStockInfo } from "./slices/listingSlice";
import { RootState } from "../../store";

export const LandingPage: React.FC = () => {
  const dispatch = useDispatch<any>();
  useMemo(() => {
    dispatch(getAllStockInfo());
  }, []);

  const { isProcessingRequest, data } = useSelector(
    (state: RootState) => state?.stockDetails
  );

  const MFdata = data.filter(
    (a) =>
      a.name === "ADR" ||
      a.name === "MFEM" ||
      a.name === "JPEM" ||
      a.name === "KEMQ"
  );
  const ETFData = data.filter((a) => a.name === "KLDW" || a.name === "KOIN");

  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={18}>
        {isProcessingRequest ? (
          <Spin/>
        ) : (
          <>
            <LandingPageCards
              data={MFdata}
              equity="US Equity"
              isMutualFund={true}
            />
            <LandingPageCards
              isMutualFund={false}
              data={ETFData}
              equity="Developed Market Equity"
            />
          </>
        )}
      </Col>
      <Col
        className="gutter-row"
        span={6}
        style={{ paddingRight: "0px", paddingLeft: "0px" }}
      >
        <Card
          className="portfolio-card"
          bodyStyle={{ height: "100%" }}
          style={{ height: "100%" }}
        >
          <div className="portfolio">
            <div className="heading-portfolio">Portfolio</div>
            <div>
              Asset wise <CaretDownOutlined />
            </div>
          </div>
          <div className="graph">
            <div>
              <Space wrap>
                <Progress
                  percent={40}
                  showInfo={false}
                  strokeColor={{
                    "0%": "orange",
                    "100%": "orange",
                  }}
                  width={170}
                  trailColor="blue"
                  type="circle"
                />
              </Space>
            </div>
            <div className="mt">
              <div className="legends">
                <span>
                  <div className="square mutual"></div>
                </span>
                <span>Mutual funds</span>
              </div>
              <div className="legends">
                <span>
                  <div className="square etf"></div>
                </span>
                <span>ETFS</span>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
