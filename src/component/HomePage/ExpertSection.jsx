import React from "react";
import './LoanProcess.css'
import ExpertCard from "./ExpertCard";
import teamImage1 from "../../assets/ExpertImage/team-1.jpg"
import teamImage2 from "../../assets/ExpertImage/team-2.jpg"
import teamImage3 from "../../assets/ExpertImage/team-3.jpg"
import teamImage4 from "../../assets/ExpertImage/team-4.jpg"

const ExpertSection = () => {
  return (
    <div style={{ padding: "70px 0"}}>
      <div className="container">

        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title">
              <h2 className="poppins-semibold fs-1 title">
              Our Experts
              </h2>
              <p className="poppins-regular sub-title">
              Our lоаn specialists will wаlk уоu thrоugh the рrосеѕѕ offering undеrѕtаndіng and guidance thrоugh out.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
                <div className="col-lg-3 col-md-6">
                    <div className="single-team">
                        {/* <div class="team-thumb">
                            <img src="asset/img/team-1.jpg" alt=""/>
                            <div class="team-hover">
                                <div class="display-table">
                                    <div class="display-cell">
                                        <div class="team-hover-content">
                                            <div class="team-link">
                                                <a href="#"><i class="fa fa-facebook-f"></i></a>
                                                <a href="#"><i class="fa fa-twitter"></i></a>
                                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                            </div>
                                            <p>Vikas Sain achieve their financial aspirations with confidence and clarity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="team-content text-center">
                            <h4>JAHIDBHAI KARIMVHAI FAKIR</h4>
                            <p>CEO &amp; Founder</p>
                        </div> */}

                        <ExpertCard name={"JAHIDBHAI KARIMVHAI FAKIR"} profile={"CEO & Founder"} image={teamImage1}/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-team">
                        {/* <div className="team-thumb">
                            <img src="asset/img/team-2.jpg" alt=""/>
                            <div className="team-hover">
                                <div className="display-table">
                                    <div className="display-cell">
                                        <div class="team-hover-content">
                                            <div class="team-link">
                                                <a href="#"><i class="fa fa-facebook-f"></i></a>
                                                <a href="#"><i class="fa fa-twitter"></i></a>
                                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                            </div>
                                            <p>Avdhesh Sagar has Head of Operations to solve customer query in INFO RTS team.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="team-content text-center">
                            <h4>Avdhesh Sagar</h4>
                            <p>Head of Operations</p>
                        </div> */}

                        <ExpertCard name={'Avdhesh Sagar'} profile={'Head of Operations'} image={teamImage2}/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-team">
                        {/* <div className="team-thumb">
                            <img src="asset/img/team-3.jpg" alt=""/>
                            <div class="team-hover">
                                <div class="display-table">
                                    <div class="display-cell">
                                        <div class="team-hover-content">
                                            <div class="team-link">
                                                <a href="#"><i class="fa fa-facebook-f"></i></a>
                                                <a href="#"><i class="fa fa-twitter"></i></a>
                                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                            </div>
                                            <p>Vrati  has Manager to manage team and company growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="team-content text-center">
                            <h4>Vrati</h4>
                            <p>Manager</p>
                        </div> */}

                        <ExpertCard name={'Vrati'} profile={'Manager'} image={teamImage3}/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-team">
                        {/* <div className="team-thumb">
                            <img src="asset/img/team-4.jpg" alt=""/>
                            <div class="team-hover">
                                <div class="display-table">
                                    <div class="display-cell">
                                        <div class="team-hover-content">
                                            <div class="team-link">
                                                <a href="#"><i class="fa fa-facebook-f"></i></a>
                                                <a href="#"><i class="fa fa-twitter"></i></a>
                                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                            </div>
                                            <p>Deepak Gothwal has Customer Relations to solve customer query in Info RTS team.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="team-content text-center">
                            <h4>Deepak Gothwal</h4>
                            <p>Customer Relations</p>
                        </div> */}

                        <ExpertCard name={'Deepak Gothwal'} profile={'Customer Relations'} image={teamImage4}/>
                    </div>
                </div>
            </div>

      </div>
    </div>
  );
};

export default ExpertSection;
