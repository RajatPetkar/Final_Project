import './css/Home.css'
import NewComponent from './NewComponent'
import Chatbot from '../chatbot/Chatbot'



function Home() {
    return (
        <div className="App">
            <Chatbot/>
            <NewComponent/>
        </div>
    );
}

export default Home;
