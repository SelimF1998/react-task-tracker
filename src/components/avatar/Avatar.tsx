import { useState, useEffect } from "react";
import { UserProps } from "./Avatar.interface";
import './Avatar.scss'

const Avatar: React.FC<UserProps> = ({ user }) =>  {
    const [userInitials, setUserInitials] = useState('');
    // const user: User = {
    //     id: 1,
    //     name: "Selim Ferroukhi",
    //     email: "selim.ferroukhi7@gmail.com",
    //     profileImg: ""
    // }

    const getInitials = (name: string) => {
    const nameParts = name.split(' ');

    const initials = nameParts.map(name => name.charAt(0).toUpperCase()).join('');

    return initials;
    }

    useEffect(() => {
        setUserInitials(getInitials(user.name)) 
    }, [])

  return (
    <div className="avatar" >
        {user.profileImg === '' && ( <div className="avatar__username" >
            <div className="avatar__username__initials" >{userInitials}</div>
        </div> )}

        {user.profileImg !== '' && ( <div className="avatar__image" >
            <img className="avatar__image__img" src={user.profileImg} />
        </div> ) }

        {/* {user.profileImg === '' ? ( <div className="avatar__initials">{userInitials}</div> ) : (
            <div className="avatar__image" >
                <img src={user.profileImg} />
            </div>
        )} */}

    </div>
  )
}

export default Avatar