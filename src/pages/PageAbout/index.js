import React, { useEffect } from 'react';

// context
// import FlashContext from '../../components/FlashContext';

// The simplest way to define a component is to write a JavaScript function.
// We call such components “functional” because they are literally JavaScript
// functions. They can also accept a single “props” (which stands for
// properties) object argument with data.

// NOTE: Always start component names with a capital letter. React treats
// components starting with lowercase letters as DOM tags.

const About = () => {
  // Set the page title using the useEffect hook
  useEffect(() => {
    document.title = `Verite Data Science • About`;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  });

  // const { setMessage } = useContext(FlashContext);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1 className="display-4 mb-3 text-primary">About Us</h1>
          <p className="lead">
            We were formed to help businesses with very specific challenges in
            today&#39;s world. There are three specific challenges that many
            companies face.
          </p>
          <p className="lead">
            Most companies have realized the economics of leveraging cloud
            infrastructure providers such as Amazon Web Services (AWS)
            Google&#39;s Cloud Platform (GCP) and Micrsoft Azure. However,
            vendor lock-in is one concern as this migration occurs. Businesses
            are exploring how to leverage containers and container orchestration
            to allow workloads to be shared more easily across cloud providers
            and to avoid vendor lock-in. The industry has put momentum behind
            Kubernetes to perform this role. We understand the new ways of
            leveraging continuous integration directly into a container and then
            to a canary deployment.
          </p>
          <p className="lead">
            Second, companies struggle with employee mobility and the new
            digital workplace. Businesses are realizing that{' '}
            <strong>identity</strong> is the new perimiter. Liberating identity
            is the first step to liberating employees. Liberating documents and
            files is the next step. How do you do this securely, and manage the
            process through the transition?
          </p>
          <p className="lead">
            Finally, big data is big money. We began with the process of
            inspecting, cleansing, transforming, and modeling data with the goal
            of discovering useful information, informing conclusions, and
            supporting decision-making. That is traditional data analysis.
          </p>
          <p className="lead">
            Now we are using data mining and predictive analytics. Data mining
            focuses on modeling and knowledge discovery for predictive rather
            than purely descriptive purposes. For example, data mining helps the
            financial industry and banking specifically by utilizing historical
            data to identify potential credit risks and to tailor loan packages
            to individual needs.
          </p>
          <p className="lead">
            Predictive analytics focuses on application of statistical models
            for predictive forecasting. An example is buiding predictive models
            that can analyze credit card transations and identify possible
            fraudm or retention risk.
          </p>
        </div>
      </div>
      {/* <button
        className="btn btn-danger"
        onClick={() => setMessage('Hi there loser!', 'success')}
      >
        Button
      </button> */}
    </div>
  );
};

export default About;
