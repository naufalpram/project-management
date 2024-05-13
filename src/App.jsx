import Base from "./components/Base";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { ProjectProvider } from "./store/project-task";

function App() {
  return (
    <ProjectProvider>
      <Main>
        <Sidebar />
        <Base />
      </Main>
    </ProjectProvider>
  );
}

export default App;
