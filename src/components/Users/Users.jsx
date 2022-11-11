import React from 'react';

let users = (props) => {
    return <div>
        {
            props.users.map(u => <div key = {u.id}>
                <span>
                    <div>
                        <img />
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>

                    <span>
                        <div>{u.location.counter}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
                )
        }
    </div>
};

export default users;