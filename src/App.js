import { ChatEngine } from 'react-chat-engine'; 
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  if(!localStorage.getItem('userName')) return <LoginForm />
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="cfb9cb3e-4135-4603-9569-25ae07e2e4cf"
        userName='selva'
        userSecret='123456789'
        renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
      />
    </div>
  );
}

export default App;
