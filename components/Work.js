import WorkItem from './WorkItem'
const Work = ({projects}) => {
  return (
    <div className="mt-40  ">
      <h4 className="text-5xl font-NTR text-primary-pink">
        <span className="text-lg text-primary-secondary">&lt;h1&gt;</span>
        Mi Work
        <span className="text-lg text-primary-secondary">&lt;/h1&gt;</span>
      </h4>
      <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => {
          return (
             <WorkItem key={project.id} project={project} />
          )
        })}
      </div>
    </div>
  );
}

export default Work
