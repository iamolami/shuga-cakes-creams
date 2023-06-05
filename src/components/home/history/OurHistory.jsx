import React from "react";
import FirstYear from "./FirstYear";
import SecondYear from "./SecondYear";
import FourthYear from "./FourthYear";
import ThirdYear from "./ThirdYear";

const OurHistory = () => {
    return (
        <div className="mkdf-history">
            <div className="mkdf-history__container">
                <div className="mkdf-history__container-inner">
                    <div className="mkdf-history__container-heading">
                        <h1 className="mkdf-history__container-heading-title">
                            Our History
                        </h1>
                    </div>
                    <div className="mkdf-history__workflow">
                        <span className="mkdf-history__workflow-alt-line"></span>
                        <span className="mkdf-history__workflow-main-line"></span>
                        <FirstYear />
                        <SecondYear />
                        <ThirdYear />
                        <FourthYear />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurHistory;
