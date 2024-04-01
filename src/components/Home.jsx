import Container from "react-bootstrap/Container";

function Home() {
  return (
    <Container>
      <h1 className="h2">Learn PyTorch by Self Studying</h1>
      <img src="/ssnote_study.JPG" className="img-fluid"></img>
      <br />
      <br />
      <h3 className="h4">What is Self Study Note?</h3>
      <p>Well, it is a collection of notes collected through self studying??</p>
      <p>
        Self-Study Note [SSNote] is a self-study netbook that contains Jupiter
        notebooks for self-studying in PyTorch deep learning model. SSNote
        covers a wide variety of subjects including fundamentals in Python,
        PyTorch and specialization fields such as Computer Vision and Large
        Language Model that I have studied throughout my journey in picking up
        Machine Learning.
      </p>
      <br />
      <h3 className="h4">How to use this book?</h3>
      <p>
        Setup is not required as all notebook included in the netbook are
        uploaded in Github and can be used with Google Colab that allows you to
        write and execute Python in your browser with zero configuration
        required where free GPUs are accessible.
      </p>
      <br />
      <h3 className="h4">Where are the materials coming from?</h3>
      <p>
        Resources in this netbook are mainly from multiple reference books under
        Reference Session and Online materials that will be referenced
        throughout individual notebooks.
      </p>
      <br />
      <h3 className="h4">Who am I?</h3>
      <p>
        My Name is Ronald Chung. I am an enthusiast in Python and PyTorch who
        got fascinated in Artificial Intelligence recently. As the best way to
        learn is to share your knowledge, I decided to create my self-study note
        inspired by Daniel Bourke -
        <a href="https://www.mrdbourke.com/startaiml/">
          I want to learn Artificial Intelligence and Machine Learning. Where
          can I start?
        </a>
        . Hope you enjoy my sharing, Happy Learning!!!
      </p>
      <br />
      <h3 className="h4">How to contact me?</h3>
      <p>
        Feel Free to contact me on below: <br />
        email: <a href="mailto:hoi.k.chung@gmail.com">
          hoi.k.chung@gmail.com
        </a>{" "}
        <br />
        Or find me through{" "}
        <a
          href="https://www.linkedin.com/in/hoi-kei-ronald-chung-41820045/"
          target="_blank"
        >
          Linkedin
        </a>
      </p>
    </Container>
  );
}

export default Home;
