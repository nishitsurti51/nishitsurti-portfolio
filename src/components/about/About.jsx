import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/Nishit_Surti.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hello! I'm Nishit Surti, a cybersecurity enthusiast and SOC Analyst based in India. I have expertise in SIEM solutions, endpoint security, and threat intelligence. I hold a Fortinet Certified Associate in Cybersecurity and have hands-on experience with tools like Splunk, Wazuh, ELK, and SentinelOne.<br /><br />
                        Fast-forward to today, and I can confidently say my journey in cybersecurity has been both challenging and rewarding. My current focus is on expanding my expertise in incident response, threat detection, and security automation while also contributing to my organization by enhancing its security infrastructure.<br /><br />
                        Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>SIEM (Splunk, Wazuh, ELK, FortiSIEM)</li>
                            <li>EDR (SentinelOne, EndPoint Central)</li>
                            <li>Firewall Management (FortiGate)</li>
                            <li>Dark Web Monitoring</li>
                            <li>Incident Management & Response</li>
                            <li>Node.js</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About