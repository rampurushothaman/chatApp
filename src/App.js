import { ChatEngine } from 'react-chat-engine'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="cfb9cb3e-4135-4603-9569-25ae07e2e4cf"
        userName='selva'
        userSecret='123456789'
      />
    </div>
  );
}

export default App;
