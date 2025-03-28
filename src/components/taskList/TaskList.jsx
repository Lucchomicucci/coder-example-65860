/* eslint-disable react/prop-types */
const TaskList = ({ tasks }) => {
  return(
      <ul>
          {tasks.map((task) => {
              return(
                  <li key={task.id}>{task.title}</li>
              )
          })}
      </ul>
  )
}

export default TaskList