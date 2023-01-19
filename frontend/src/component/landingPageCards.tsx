import "../pages/LandingPage/index.css";
import { Card, Col, Row } from "antd";
import { Progress } from "antd";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  BarsOutlined,
  HddOutlined,
  MoneyCollectOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { IStockDetails } from "../interfaces/stockInterfaces";

interface Props {
  data: IStockDetails[];
  equity: string;
  isMutualFund: boolean;
}

export const LandingPageCards: React.FC<Props> = ({
  data,
  equity,
  isMutualFund,
}) => {
  const stockData = data.reduce(function (
    previousValue: IStockDetails,
    currentValue: IStockDetails
  ) {
    return {
      id: 1,
      name: " ",
      quantity: parseFloat(
        (previousValue.quantity + currentValue.quantity).toFixed(2)
      ),
      price: parseFloat((previousValue.price + currentValue.price).toFixed(2)),
      avg_cost: parseFloat(
        (previousValue.avg_cost + currentValue.avg_cost).toFixed(2)
      ),
      invested_amount: parseFloat(
        (previousValue.invested_amount + currentValue.invested_amount).toFixed(
          2
        )
      ),
      portfolio_percent: parseFloat(
        (
          previousValue.portfolio_percent + currentValue.portfolio_percent
        ).toFixed(2)
      ),
      unrealized_return: parseFloat(
        (
          previousValue.unrealized_return + currentValue.unrealized_return
        ).toFixed(2)
      ),
      return: parseFloat(
        (previousValue.return + currentValue.return).toFixed(2)
      ),
    };
  });

  return (
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
              <div className="equity">{equity}</div>
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
            <div className="cost">{stockData.quantity}</div>
          </div>
          <div className="quantity">
            <div>
              <span className="quantity-icon">
                <MoneyCollectOutlined />
              </span>
              <span>Avg.cost</span>
            </div>
            <div className="cost">${stockData.avg_cost}</div>
          </div>
          <div className="quantity">
            <div>
              <span className="quantity-icon">
                <DollarOutlined />
              </span>
              <span>Invested Amt</span>
            </div>
            <div className="cost">${stockData.invested_amount}</div>
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
            <div>$9542.234</div>
          </div>
          <div className="portfolio-value">
            <div>%portfolio Value</div>
            <div className="portfolio-percent">
              %{stockData.portfolio_percent}
            </div>
          </div>
          <div>
            <Progress
              percent={stockData.portfolio_percent}
              showInfo={false}
              strokeColor="green"
            />
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
            <div>${stockData.unrealized_return}</div>
          </div>
          <div className="portfolio-value">
            <div>% return</div>
            <div className="portfolio-percent">
              {" "}
              <span>
                {isMutualFund ? (
                  <CaretUpOutlined style={{ color: "green" }} />
                ) : (
                  <CaretDownOutlined style={{ color: "red" }} />
                )}
              </span>
              <span>{stockData.return}%</span>
            </div>
          </div>
          <div>
            <Progress
              percent={stockData.return}
              showInfo={false}
              strokeColor="green"
            />
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
  );
};
