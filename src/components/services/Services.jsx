import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'
import Image4 from '../../assets/service-4.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "SIEM & Log Analysis",
        description:
            "Expert in threat detection, log analysis, and incident response using ELK, Wazuh, Splunk, and FortiSIEM",
    },
    {
        id: 2,
        image: Image2,
        title: "Endpoint Security & Threat Hunting",
        description:
            "Proficient in endpoint security and malware analysis with SentinelOne, enhancing proactive threat hunting",
    },
    {
        id: 3,
        image: Image3,
        title: "Incident Response & Red Teaming",
        description:
            "Conducting Atomic Red Teaming exercises to simulate attacks and improve detection capabilities",
    },
    {
        id: 4,
        image: Image4,
        title: "Fortinet & Network Security",
        description:
            "Certified Fortinet Firewall (FCA) professional, experienced in firewall policies, VPNs, and securing network infrastructure.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services