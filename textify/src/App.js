import Auth from "./components/Auth";
import TaskManager from "./components/TaskManager";

const App = () => {
  return (
    <div>
      <h1>AI Task Manager</h1>
      <Auth />
      <TaskManager />
    </div>
  );
};

export default App;
