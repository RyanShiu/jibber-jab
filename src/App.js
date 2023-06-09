import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const projectID="38dbaa08-ee50-4407-b54c-042329966b3c"

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

      
  

  return (
    
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    
  );
}

export default App;