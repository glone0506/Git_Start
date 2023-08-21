import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "900px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/traffic_light.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">SafeLight</h1>
              <p className="text-white mt-0 mb-5">
                시각장애인의 안전한 보행을 약속합니다.
              </p>
              <Button
                target="_blank"
                color="info"
                onClick={() => {
                  window.location.href = "https://apps.apple.com/kr/app/%EC%84%B8%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B4%ED%8A%B8/id6444276334";
                }}
              >
                앱 다운 바로가기
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
