import React from "react";
import { Card, Col, Row } from "antd";
import "./index.css";
import { Progress, Space } from "antd";
import {
  CaretUpOutlined,
  BarsOutlined,
  HddOutlined,
  MoneyCollectOutlined,
  DollarOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

export const LandingPage: React.FC = () => {
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={18}>
        <Row gutter={16}>
          <Col span={7}>
            <Card className="heading-card">
              <div className="heading">
                <div className="heading-icon">
                  <BarsOutlined />
                </div>
                <div className="itot">
                  <div className="itot-heading">ITOT</div>
                  <div className="itot-count">$283</div>
                </div>
                <div className="ishares-body">
                  <div>
                    <div className="ishares">iShares</div>
                    <div className="ishares-by">by fintech</div>
                  </div>

                  <div className="sp-index">S&P 500 Index</div>
                  <div className="equity">US Equity</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={5} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Card
              className="quantity-card"
              bodyStyle={{ height: "100%" }}
              style={{ height: "100%" }}
            >
              <div className="quantity">
                <div>
                  <span className="quantity-icon">
                    <HddOutlined />
                  </span>
                  <span>Quantity</span>
                </div>
                <div className="cost">150</div>
              </div>
              <div className="quantity">
                <div>
                  <span className="quantity-icon">
                    <MoneyCollectOutlined />
                  </span>
                  <span>Avg.cost</span>
                </div>
                <div className="cost">150</div>
              </div>
              <div className="quantity">
                <div>
                  <span className="quantity-icon">
                    <DollarOutlined />
                  </span>
                  <span>Invested Amt</span>
                </div>
                <div className="cost">150</div>
              </div>
            </Card>
          </Col>
          <Col span={5} style={{ paddingRight: "0px" }}>
            <Card
              className="quantity-card"
              bodyStyle={{ height: "100%" }}
              style={{ height: "100%" }}
            >
              <div className="market-value">
                <div>Market Value</div>
                <div>$1234.234</div>
              </div>
              <div className="portfolio-value">
                <div>%portfolio Value</div>
                <div className="portfolio-percent">40%</div>
              </div>
              <div>
                <Progress percent={50} showInfo={false} strokeColor="green" />
              </div>
            </Card>
          </Col>
          <Col span={5} style={{ paddingRight: "0px" }}>
            <Card
              className="quantity-card"
              bodyStyle={{ height: "100%" }}
              style={{ height: "100%" }}
            >
              <div className="market-value">
                <div>Unrealized P/L</div>
                <div>$1234.234</div>
              </div>
              <div className="portfolio-value">
                <div>% return</div>
                <div className="portfolio-percent">
                  {" "}
                  <span>
                    <CaretUpOutlined style={{ color: "green" }} />
                  </span>
                  <span>40%</span>
                </div>
              </div>
              <div>
                <Progress percent={50} showInfo={false} strokeColor="green" />
              </div>
            </Card>
          </Col>
          <Col span={2}>
            <Card className="buy-card " style={{ height: "45%" }}>
              Buy
            </Card>
            <Card className="sell-card" style={{ height: "45%" }}>
              Sell
            </Card>
          </Col>
        </Row>
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
            <div>Portfolio</div>
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
