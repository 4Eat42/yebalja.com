import React from "react";
import styles from './Team.module.css';
import classNames from 'classnames';

export default function Team() {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
            <div className="row">
              <div className={classNames({[styles.flex_center]: true, [styles.sm_no_flex]: true})}>

                
                <div className="col-md-8">
                  <div className={classNames({[styles.pull_right]: true, [styles.sm_no_float]: true})}>
                    <ul className={styles.team_members}>

                      <li className="clearfix">

                        <div className={styles.member_details}>
                          <div>
                            <img src={require('../src/image/cut_mihykim.png')} alt="mihykim" />
                            <div className={styles.member_info}>
                              <h3>김미혜/mihykim</h3>
                              <p>Front-End<br />
                                <img alt="github" src={require('../src/image/link_github.png')}/>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className={styles.member_details}>
                          <div>
                            <img src={require('../src/image/cut_secho.png')} alt="secho" />
                            <div className={styles.member_info}>
                              <h3>조성상/secho</h3>
                              <p>Back-End<br />
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/SeongsangCHO">
                                  <img alt="github" src={require('../src/image/link_github.png')}/></a>
                                  &nbsp;
                                <a target="_blank" rel="noopener noreferrer" href="https://velog.io/@secho">
                                  <img alt="velog" src={require('../src/image/link_velog.png')}/></a>
                              </p>
                            </div>
                          </div>
                        </div>

                    </li>


                    <li className="clearfix">

                      <div className={styles.member_details}>
                          <div>
                            <img src={require('../src/image/cut_taelee.png')} alt="taelee" />
                            <div className={styles.member_info}>
                                <h3>이태혁/taelee</h3>
                                <p>Back-End<br />
                                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/taelee42">
                                    <img alt="github" src={require('../src/image/link_github.png')}/></a>
                                    &nbsp;
                                  <a target="_blank" rel="noopener noreferrer" href="https://velog.io/@taelee">
                                    <img alt="velog" src={require('../src/image/link_velog.png')}/></a>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className={styles.member_details}>
                          <div>
                            <img src={require('../src/image/cut_jehong.png')} alt="jehong" />
                            <div className={styles.member_info}>
                                <h3>홍정아/jehong</h3>
                                <p>Front-End<br />
                                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/kirrikirri42">
                                    <img alt="github" src={require('../src/image/link_github.png')}/></a>
                                    &nbsp;
                                  <a target="_blank" rel="noopener noreferrer" href="https://velog.io/@jehjong">
                                    <img alt="velog" src={require('../src/image/link_velog.png')}/></a>
                              </p>
                            </div>
                          </div>
                        </div>
                        
                      </li>


                      <li className="clearfix">

                        <div className={styles.member_details}>
                          <div>
                            <img src={require('../src/image/cut_daelee.png')} alt="daelee" />
                            <div className={styles.member_info}>
                              <h3>이대현/daelee</h3>
                              <p>Front-End<br />
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/hidaehyunlee">
                                  <img alt="github" src={require('../src/image/link_github.png')}/></a>
                                  &nbsp;
                                <a target="_blank" rel="noopener noreferrer" href="https://velog.io/@hidaehyunlee">
                                  <img alt="velog" src={require('../src/image/link_velog.png')}/></a>
                              </p>
                            </div>
                          </div>
                        </div>

                      </li>
                
                    </ul>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className={classNames({[styles.pull_left]: true, [styles.sm_text_center]: true})}>
                    <div className={styles.team_overview}>
                      <h2>Who Are We?</h2>
                      <a href="#">그들의 개발 히스토리</a>
                      <p><div>솔직히 저희도 이렇게 잘 될줄 몰랐어요</div></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </section>
    </>
);
}