import Layout from "../components/shared/Layout";
import HorizontalImage from "../asset/image/horizontalAbout.PNG";
import VerticalImage from "../asset/image/verticalAbout.PNG";

function About() {
  return (
    <Layout activeMenu="about">
      <h2>빅데이터로 살펴본 대선후보 지지율은?</h2>
      <h3 style={{ color: "#555" }}>배경</h3>
      <p>여러분들은 여론조사 전화를 받아보신 적이 있으신가요? </p>
      <p>
        이 프로젝트를 진행하게 된 이유는 '과연 대부분의 사람들이 길고 긴
        여론조사 전화를 끝까지 할까?'라는 의문에서 시작되었습니다. 여론조사는
        대부분 전화조사로 이루어진다고 하는데요. 요즘은 본인의 후보 지지를 그런
        조사기관에 보다는
        <b> 유튜브나 뉴스 기사 댓글, SNS</b>와 같은 곳에서 표출하고는 합니다.
      </p>
      <p>
        그중에서도 SNS로 살펴본 대선 후보들에 대한 민심은 어떤지 이번 프로젝트를
        통해 살펴보았습니다.
      </p>
      <br />
      <h3 style={{ color: "#555" }}>분석 방법</h3>
      <picture>
        <source
          srcSet={VerticalImage}
          width={"100%"}
          media="(max-width: 505px)"
        />
        <img src={HorizontalImage} loading="lazy" alt="프로젝트 설명 이미지" />
      </picture>
      <p>
        후보 이름을 언급한 트위터를 스크래핑하여 대선 후보 지지율을 알아보고자
        하였습니다. 트윗별로 어떤 후보를 지지하는지 여부를 확인하기 위해
        텍스트로 머신러닝을 통해 각 후보별 커뮤니티(디시인사이드 갤러리)에서
        지지자에 대한 텍스트를 추출하였습니다. 그리고 트위터별로 어떤 후보자를
        지지하는 지 예측을 시도하여 대선 후보 지지율을 예측해보았습니다.
      </p>
    </Layout>
  );
}
export default About;
