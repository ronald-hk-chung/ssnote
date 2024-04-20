import Container from "react-bootstrap/Container";
import image from "./assets/ssnote_study.jpg";

function Home() {
  return (
    <Container>
      <h1 className="h2">Learn PyTorch by Self Studying</h1>
      <img src={image} className="img-fluid"></img>
      <br />
      <br />
      <h3 className="h4">What is Self Study Note?</h3>
      <p>Well, it is a collection of notes collected through self studying??</p>
      <p>
        Self-Study-Note <b>SSNote</b> is a collection of notebook that I have
        created throughout my self-study journey on Machine Learning. While the
        main purpose of the notebook is to self-enforce for my deep-learning
        process, which covers a number of subjects including Computer Vision,
        Large Language Model as well as Generative AI from multiple resources
        that I have studied.
      </p>
      <br />
      <h3 className="h4">How to use this book?</h3>
      <p>
        Setup is not required as all notebooks included in SSNote are uploaded
        in Github and can be used with Google Colab.
      </p>
      <br />
      <h3 className="h4">Where are the materials coming from?</h3>
      <p>
        There are many resources that is being included in SSNote. References
        would be made carefully throughout the materials. I have also included a
        list of most useful resources in the Resources Page.
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
        Email: {"\t"}{" "}
        <a href="mailto:hoi.k.chung@gmail.com">hoi.k.chung@gmail.com</a>
        <br />
        Linkined:
        <a
          href="https://www.linkedin.com/in/hoi-kei-ronald-chung-41820045/"
          target="_blank"
        >
          {"\t"}linkedin.com/in/hoi-kei-ronald-chung-41820045
        </a>
      </p>
    </Container>
  );
}

export default Home;
