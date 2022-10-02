import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    let posts = [
        {id: 1, text: 'Hi. how are you?', likesCount: 10},
        {id: 2, text: 'It\'s my first post', likesCount: 15},
    ];

    let dialogs = [
        {id: 1, name: 'Duke'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Kate'},
        {id: 4, name: 'River'},
        {id: 5, name: 'Vitaly'},
        {id: 6, name: 'Valera'}
    ];

    let messages = [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Yo'},
    ];

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs dialogs={dialogs} messages={messages}/>}/>
                        <Route path="/profile" element={<Profile posts={posts}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
