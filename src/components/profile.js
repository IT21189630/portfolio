import React from "react";
import profile from '../resources/images/profile.png'

const ProfileSection = () => {
    return(
        <div className="profile-container" id="profile">
            <div className="image-prof">
                <img className="prof-img" src={profile} alt="" />
            </div>
            <div className="content-prof">
                "I am an undergraduate student pursuing a software engineering degree at SLIIT (Sri Lanka Institute of Information Technology). Passionate about software development and web development, I am eager to build a career in these dynamic fields. With a thirst for knowledge and a keen interest in exploring new technologies, I continuously strive to expand my skillset. One of my strengths lies in recreating captivating user interfaces that I come across while browsing the internet. I enjoy embracing challenges and pushing my boundaries to deliver exceptional results. Currently, I am actively seeking an internship position to gain valuable real-world experience and contribute to innovative projects. I am excited to embark on this journey of professional growth and make a meaningful impact in the software development industry."
            </div>
        </div>
    )
}

export default ProfileSection