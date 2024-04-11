import logo from "../../assets/misc/logo.png";
import error from "../../assets/misc/errorImage.png";
import { Section, Main, Button } from "./errorPageStyle";
import { goToHomePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <div className="container">
        <img className="logo" src={logo} alt="" />
      </div>
      <Main>
        <div>
          <h1>Error 404.</h1>
          <h2>We couldn't find what you're looking for.</h2>
          <Button onClick={() => goToHomePage(navigate)}>
            Back to the main page
          </Button>
        </div>
        <div className="ditto">
          <img src={error} alt="img" />
        </div>
      </Main>
    </Section>
  );
};

export default ErrorPage;
