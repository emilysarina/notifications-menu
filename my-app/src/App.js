import style from './App.module.css';
import Title from './components/title/Title';
import MarkAsRead from './components/markAsRead/MarkAsRead';
import MessagePreview from './components/messagePreview/MessagePreview';

function App() {
  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <p>
          Notification Challenge (Web developer mentor)
        </p>
      </header>
      <div className={style.notificationBox}> 
      <Title/>
      <MarkAsRead/>
      <MessagePreview/>
      </div>
    </div>
  );
}

export default App;
