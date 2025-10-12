import CurrentlyRunning from '../ui/CurrentlyRunning'
import FrontendSkills from '../ui/FrontendSkills'

const Skills = ({id}) => {
  return (
    <div id={id}>
        <FrontendSkills />
        <CurrentlyRunning />
    </div>
  )
}

export default Skills