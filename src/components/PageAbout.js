import React from 'react';

const About = () => {
  return (
    <main className="bd-masthead" id="content" role="main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 mb-3 bd-text-purple-bright">About Us</h1>
            <p className="lead">We were formed to help businesses with very specific challenges in today's world. There are three specific challenges that many companies face.</p>
            <p className="lead">Most companies have realized the economics of leveraging cloud infrastructure providers such as Amazon Web Services (AWS) Google's Cloud Platform (GCP) and Micrsoft Azure. However vendor lock-in is one concern as this migration occurs. Businesses are exploring how to leverage containers and container orchestration to allow workloads to be shared more easily across cloud providers and to avoid vendor lock-in.  The industry has put momentum behind Kubernetes to perform this role.  We understand the new ways of leveraging continuous integration directly into a container and then to a canary deployment.</p>
            <p className="lead">Second, companies struggle with employee mobility and te new digital workplace. Businesses are realizing that <strong>identity</strong> is the new perimiter. Liberating identity is the first step to liberating employees. Liberating documents and files is the next step.  How do you do this securely, and manage the process through the transition?</p>
            <p className="lead">Finally, big data is big money.  We began with the process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making. That is traditional data analysis.</p>
            <p className="lead">Now we are using data mining and predictive analytics. Data mining focuses on modeling and knowledge discovery for predictive rather than purely descriptive purposes. For example, data mining helps the financial industry and banking specifically by utilizing historical data to identify potential credit risks and to tailor loan packages to individual needs.</p>
            <p className="lead">Predictive analytics focuses on application of statistical models for predictive forecasting. An example is buiding predictive models that can analyze credit card transations and identify possible fraudm or retention risk.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About;