import '../../pages/Profile/Profile.sass';

function ProfileServices(props) {
    const s = props.service;
    return (
        <div key={s.id}><p className="service_one">{s.name} <u>{s.date} в {s.time}</u>.</p></div>
    )

}
export default ProfileServices;