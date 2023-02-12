import React, { Component } from 'react' 

//https://drive.google.com/file/d/155vLVDkx1Jx-uRmEZwaGc15CfSTwTxgZ/view?usp=share_link

export default class Timeline extends Component {

render () {
    return (
        <section id="experience" className="timeline">
  <div className="container">
    <h2>Experience</h2>
    <h6>
      A brief timeline of my work experience. Please see my <a href="https://drive.google.com/file/d/155vLVDkx1Jx-uRmEZwaGc15CfSTwTxgZ/view?usp=share_link"> resume</a> for more
    </h6>
    <div className="qa-message-list" id="wallmessages">
    <div className="message-item" id="m16">
        <div className="message-inner">
          <div className="message-head clearfix">
            <div className="user-detail">
              <h5 className="handle">Reese Lightning Technologies</h5>
              <div className="post-meta">
                <div className="asker-meta">
                  <span className="qa-message-what" />
                    <span className="qa-message-when-data">July 2018 - Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="message-item" id="m9">
        <div className="message-inner">
          <div className="message-head clearfix">
            <div className="user-detail">
              <h5 className="handle">Eaze Technologies</h5>
              <div className="post-meta">
                <div className="asker-meta">
                  <span className="qa-message-what" />
                  <span className="qa-message-when">
                    <span className="qa-message-when-data">September 2020 - September 2022</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="message-item" id="m7">
        <div className="message-inner">
          <div className="message-head clearfix">
            <div className="user-detail">
              <h5 className="handle">Whetstone Education</h5>
              <div className="post-meta">
                <div className="asker-meta">
                  <span className="qa-message-what" />
                  <span className="qa-message-when">
                    <span className="qa-message-when-data">April 2017 - July 2018</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="message-item" id="m6">
        <div className="message-inner">
          <div className="message-head clearfix">
            <div className="user-detail">
              <h5 className="handle">BAE Systems</h5>
              <div className="post-meta">
                <div className="asker-meta">
                  <span className="qa-message-what" />
                  <span className="qa-message-when">
                    <span className="qa-message-when-data">August 2014 - December 2016</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="message-item" id="m5">
        <div className="message-inner">
          <div className="message-head clearfix">
            <div className="user-detail">
              <h5 className="handle">The Boeing Company</h5>
              <div className="post-meta">
                <div className="asker-meta">
                  <span className="qa-message-what" />
                  <span className="qa-message-when">
                    <span className="qa-message-when-data">June 2012 - August 2014</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}
};