import React from "react";
import { Table, Container, Row, Col, Image } from "react-bootstrap";
import "./main.css";
export default class Publications extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Container
      style={{ height: "100%", width: "90%", verticalAlign: "middle" }}
    >
      <Row>
        <Table responsive variant="dark" striped bordered hover>
          <thead>
            <tr>
              <th> </th>
              <th>Publication</th>
              <th>Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td> Automated detection of Diabetic Retinopathy using weighted Support Vector Machines</td>
              <td> December, 2017 </td>
              <td> <a href="https://link.springer.com/chapter/10.1007/978-3-319-76348-4_35">→</a></td>
            </tr>

            <tr>
              <td>2</td>
              <td> Retinal Vessel Extraction and Fovea Detection Using Morphological Processing</td>
              <td> May, 2017 </td>
              <td> <a href="https://link.springer.com/chapter/10.1007/978-981-10-7871-2_30">→</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td> Image Segmentation Using Region Derived Triple Thresholding</td>
              <td> March, 2016 </td>
              <td> <a href="https://link.springer.com/chapter/10.1007/978-3-319-76348-4_35">→</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td> Automated Threshold Driven Edge Detection Using 2-way Difference Calculation and Neighborhood Comparison</td>
              <td> October, 2015 </td>
              <td> <a href="https://ieeexplore.ieee.org/document/7489553">→</a></td>
            </tr>

          </tbody>
        </Table>


      </Row>
    </Container>);
  }
}
