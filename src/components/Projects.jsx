

const projects = [
    {
        title: 'Project One',
        description: 'A simple web application built using React and Node.js',
        link: '#'
    },
    {
        title: 'Project Two',
        description: 'A eCommerce platform built using Python and Django',
        link: '#'
    }
]

function Projects() {

    return <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects'>
            {projects.map((project, index) => (
                <div key={index} className='project'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link}>View Project</a>
                </div>
            ))}
        </div>
    </section>;
}

export default Projects;