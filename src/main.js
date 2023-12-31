import React from "react";
import linkedIn from "../src/assets/images/icons/pngwing.com.png"
function Summary() {
    return (
        <main className="main-content-block">
                <div className="three-quarters-block padd-eff-1rem">
                    <h3 className="size-1-05-rem">About me</h3>
                    <p>
                        Vignesh loves programming, gaming, travelling and listening to music. He feels awkward about talking about himself in third person.
                        He works as a Software Engineer, involved simultaneously in Full stack development, QA Automation and Selenium Load testing during
                        his first two years of his career is intrigued in Java Spring Boot based development although his current mid term goal is to become 
                        a Data Engineer he is hopeful about to work as a Java full stack developer before becoming a Data engineer.
                    </p>
                </div>
                <div className="one-quarter-block padd-eff-1rem">
                    <h3 className="size-1-05-rem">Contact</h3>
                    <div className="social linkedIn">
                        <a href="https://www.linkedin.com/in/vignesh-a-fsd/"><img className="social-image" src={linkedIn} alt="linkedIn"></img>LinkedIn</a>
                    </div>
                </div>
        </main>
    );
}

export default function MainContent() {
    return (
        <Summary />
    );
}