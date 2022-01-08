import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getStocks, removeStock } from "../../../api/stock";
import StockTable from "../../../components/table/StockTable";
import { Col, Container, Row, Table } from "react-bootstrap";

const CreateStock = ({ history }) => {
  const [stocks, setStocks] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadStocks(user._id);
  }, []);

  const loadStocks = (id) => {
    getStocks(id)
      .then((res) => {
        setStocks(res.data);
      })
      .catch((err) => {
        toast.error("Some error in fetching the data");
      });
  };

  const handleRemove = (id) => {
    if (window.confirm("Delete?")) {
      removeStock(user.token, id)
        .then((res) => {
          toast.success(`"${res.data.stock_name}" is deleted`);
          loadStocks(user._id);
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    }
  };
  console.log(stocks);

  return (
    <div className="col text-center">
      <Container>
        <div className="stock-section">
          <h2>India Stocks - Consolidate Portfolio</h2>
        </div>
        <Row className="align-items-center">
          <Col md={12} sm={12}>
            <div className="react-form-container" style={{ width: "100%" }}>
              <Table responsive>
                <thead>
                  <tr style={{ backgroundColor: "rgb(61, 133, 198)" }}>
                    {/* <th scope="col"></th> */}
                    <th scope="col">Stock Name</th>
                    <th scope="col">Last Buy Date</th>
                    <th scope="col">Avg. Buy Price</th>
                    <th scope="col">Current Price</th>
                    <th scope="col">Gain/Loss</th>
                    <th scope="col">Allocation</th>
                    <th scope="col">Entry Status</th>
                    <th scope="col">Notes</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {stocks && stocks.length
                    ? stocks
                        .filter((each) => each.country == "Indian")
                        .map((each) => {
                          return (
                            <>
                              <StockTable
                                key={each._id}
                                eachStock={each}
                                handleRemove={handleRemove}
                              />
                            </>
                          );
                        })
                    : ""}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateStock;
