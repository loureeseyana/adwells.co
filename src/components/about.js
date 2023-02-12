import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons'



export default class About extends Component {
    render() {
return (
    <section id="aboutUs">
<div className="inner_wrapper aboutUs-container fadeInLeft animated wow">
  <div className="container">
    <h2>About Me</h2>
	<h6>Learn more about my story and my career</h6>
    <div className="inner_section"> 
	  <div className="row">
						<div className="col-lg-12 about-us">
							<div className="row">
								<div className="col-md-6">
									<h3>Where tech and magic meet</h3>
									<p>
										 I started coding in middle school. While my classmates were learning to type, I was learning hacking and basic front end technologies. By highschool, I could write bash scripts, simple websites and learned C++ and Visual Basic. 
									</p>
                  <br />

									<p>
										 The rest is history.
									</p>
                  <br />
                  <br />

									<ul className="about-us-list">
										<li><FontAwesomeIcon icon={faCodeCommit}/> full stack engineer, with preference for backend</li>
										<li><FontAwesomeIcon icon={faCodeCommit}/> other technologies: Java, Python, AWS, Postgres, MongoDB, etc </li>
										<li><FontAwesomeIcon icon={faCodeCommit}/> proven track record of improving traffic to sites and social media profiles</li>
                    <li><FontAwesomeIcon icon={faCodeCommit}/> willing to speak to/mentor future engineers and other STEM professionals </li>
									</ul>
								</div>
								
							<div className="col-md-6">
  {" "}
  <br />
  <p>
  Here are a few of the languages I specalize in. 
  This is not an exhaustive list. These are where I currently like to work. 
  Open to learning new languages.
  </p>
  <br />
  <br />
  <div className="barWrapper">
    <span className="progressText">
      <b>Node.js</b>
    </span>
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={85}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{width:'85%'}}

      >
       {"85%"}
      </div>
    </div>
    <div className="barWrapper">
      <span className="progressText">
        <b>React</b>
      </span>
      <div className="progress ">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={75}
          aria-valuemin={10}
          aria-valuemax={100}
          style={{width:'75%'}}
        >
            {"75%"}
        </div>
      </div>
    </div>
    <div className="barWrapper">
      <span className="progressText">
        <b>Java</b>
      </span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={70}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{width:'70%'}}

        >{"70%"}
        </div>
      </div>
    </div>
    <div className="barWrapper">
      <span className="progressText">
        <b>Typescript</b>
      </span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={65}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{width:'65%'}}

        >{"65%"}
        </div>
      </div>
    </div>
  </div>
</div>
							</div>
							</div>
						</div>
					</div>
      
    </div>
  </div> 
</section>
)
    }
};