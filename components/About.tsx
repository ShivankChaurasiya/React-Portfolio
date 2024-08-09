import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Website Design"
                        icon="/icons/design.svg"
                        description="I have also created websites, including a food delivery website and other portfolios."
                        projects={3} />
                
                    <AboutCard
                        title="Projects based on javaScript"
                        icon="/icons/phone.svg"
                        description="I develop some other projects based on JavaScript."
                        projects={2} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Shivank Chaurasiya</h1>
                    <h3 className="white">Design is not just what it looks like. Design is how it works!</h3>
                    <p className="gray">As a fresh web development student, focus on building a strong foundation in HTML, CSS, and JavaScript, and then explore popular frameworks like React, Angular, or Vue.js. Practice building projects and contributing to open-source code to gain hands-on experience and build your portfolio. Stay up-to-date with industry trends and best practices to increase your chances of landing a job or attracting clients.<br/><br/>
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>
                </div>
            </div>

           
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}