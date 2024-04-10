import { Container } from '../Footer/footerStyle';

const Footer = () => {
  return (
    <Container>
      <div>
        <p>
          <i class="fa fa-code" aria-hidden="true" /> Developped by: Henrique
          Louback
        </p>
        <span>
          <a className="black" href="https://github.com/henriquelbk">
            <i class="fa fa-github" aria-hidden="true" />
          </a>
          <a className="blue" href="https://www.linkedin.com/in/henriquelouback/">
            <i class="fa fa-linkedin-square" aria-hidden="true" />
          </a>
        </span>
      </div>
    </Container>
  );
};
