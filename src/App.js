import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='logo192.png'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Setting</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='logo192.png'/>
                </div>
                <div>ava + description</div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
