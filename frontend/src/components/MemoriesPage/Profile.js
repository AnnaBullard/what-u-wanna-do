import {useSelector} from 'react-redux';

export default function Profile () {
    const user = useSelector(state => state.session.user);

    return !!user && <div className="profile-grid">
        <p><strong>Username: </strong>{user.username}</p>
        <p><strong>Email: </strong>{user.email}</p>
    </div>
}