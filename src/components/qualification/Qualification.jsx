import { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div
                        className={
                            toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__section">
                    <div
                        className={
                            toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Informatics</h3>
                                <span className="qualification__subtitle">Universitas Pembangunan Jaya</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineering</h3>
                                <span className="qualification__subtitle">SMK Letris Indonesia 2</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={
                            toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Database Assistant Lecturer</h3>
                                <span className="qualification__subtitle">Contract</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">JSDP Verifier and Validator Team</h3>
                                <span className="qualification__subtitle">Internship</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Jan 2024 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Multimedia Team</h3>
                                <span className="qualification__subtitle">Freelance</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Oct 2023 - Jan 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Contributing Writer</h3>
                                <span className="qualification__subtitle">Freelance</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Apr 2023 - Nov 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Archive Administrator</h3>
                                <span className="qualification__subtitle">Internship</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb 2023 - Jun 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Voice Talent</h3>
                                <span className="qualification__subtitle">Freelance</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Dec 2020 - Jan 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;