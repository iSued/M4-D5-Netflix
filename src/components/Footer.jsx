import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../style/footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from "@material-ui/icons/Instagram";
import { green, red, blue } from '@material-ui/core/colors';

export default function Footer() {
  return (
    <div className="footer__container">
      <Container className="px-4">
        <Row>
          <Col className="mb-3">
            <div className="d-flex">
                <FacebookIcon className="mr-3" style={{ color: green[200] }, { fontSize: 35 }} />
                <InstagramIcon className="mr-3" style={{ color: green[200] }, { fontSize: 35 }} />
                <YouTubeIcon className="mr-3" style={{ color: green[200] }, { fontSize: 35 }} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="mb-3">Audio and Subtitles</h5>
            <h5 className="mb-3">Media Center</h5>
            <h5 className="mb-3">Privacy</h5>
            <h5 className="mb-3">Contact Us</h5>
          </Col>
          <Col>
            <h5 className="mb-3">Audio Description</h5>
            <h5 className="mb-3">Investor Relations</h5>
            <h5 className="mb-3">Legal Notices</h5>
          </Col>
          <Col>
            <h5 className="mb-3">Help Center</h5>
            <h5 className="mb-3">Jobs</h5>
            <h5 className="mb-3">Cookie Preferences</h5>
          </Col>
          <Col>
            <h5 className="mb-3">Gift Cards</h5>
            <h5 className="mb-3">Terms of Use</h5>
            <h5 className="mb-3">Corporate Information</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
