import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />


  return (
    <ChatEngine
      height="100vh"
      projectID="38dbaa08-ee50-4407-b54c-042329966b3c"
      userName="YinBob"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
    />
  );
}

export default App;