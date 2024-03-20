import { PageContent, PageListContent } from "~/pages"
import { ItemProps, Link, Text } from "~/components"

export default function AboutPage() {
    const links: ItemProps[] = [{
        title: "LinkedIn",
        children: <Link to="https://www.linkedin.com/in/harsewaksingh">LinkedIn</Link>
    }, {
        title: "Github",
        children: <Link to="https://github.com/harsewaksingh13">Github</Link>
    }, {
        title: "Stackoverflow",
        children: <Link to="https://stackoverflow.com/users/2636618/turbandroid">Stackoverflow</Link>
    }, {
        title: "Email",
        children: <Link to="mailto:harkhattra@gmail.com">Email</Link>
    }]
    return (
        <PageListContent title="About" itemsTitle="Connect" items={links}>
            <div className="text-secondaryText overflow-y-hidden">
                <div className="container mx-auto px-1">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                        <p className="text-lg">I am a skilled software developer specializing in mobile app development with a focus on Android, iOS, and React Native. With hands-on experience in React, TypeScript, JavaScript, and Node.js, I bring a wealth of expertise to the table.</p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Experience</h2>
                        <p className="text-lg">Having dedicated years to mastering my craft, I possess a deep understanding of the nuances involved in mobile app development. My proficiency in Android and iOS development allows me to create seamless and intuitive experiences for users on different platforms. Whether it's crafting native apps tailored for specific platforms or utilizing the flexibility of React Native for cross-platform development, I excel at delivering top-notch solutions tailored to each project's unique requirements.</p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Skills</h2>
                        <p className="text-lg">My strength lies in my mastery of various programming languages and frameworks. My fluency in React, TypeScript, and JavaScript enables me to build dynamic and responsive user interfaces. Meanwhile, my expertise in Node.js empowers me to develop robust backend systems to support mobile applications.</p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Passion</h2>
                        <p className="text-lg">What sets me apart is not just my technical skills, but also my passion for innovation and problem-solving. I approach each project with a creative mindset, constantly exploring new technologies and methodologies to enhance efficiency and user experience. Whether it's optimizing performance, implementing cutting-edge features, or tackling complex challenges, I am always up for the task.</p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Collaboration</h2>
                        <p className="text-lg">In addition to my technical prowess, I am an effective communicator and collaborator. I excel at translating complex technical concepts into clear and concise language, fostering productive communication within interdisciplinary teams. My ability to work closely with designers, product managers, and other stakeholders ensures that project goals are met effectively and efficiently.</p>
                    </section>
                </div>
                <div className="text-left m-1 rounded bg-primary text-primaryText p-6">
                    <p className="text-lg">Overall, I am a dedicated and versatile software developer with a proven track record of delivering exceptional results in mobile app development. With my extensive knowledge, practical experience, and passion for innovation, I am poised to make significant contributions to any project or team I join.</p>
                    <p className="text-center"><br></br> Email me at <a href="mailto:harkhattra@gmail.com" className="underline">harkhattra@gmail.com</a> and let's talk about your project!</p>
                </div>
            </div>
        </PageListContent>
    )
}