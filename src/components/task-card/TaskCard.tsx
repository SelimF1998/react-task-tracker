import React from 'react';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import Avatar from '../avatar/Avatar';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import './TaskCard.scss';
import { DvrOutlined } from '@mui/icons-material';

export const TaskCard = () => {
    const users = [
        {
          id: 1,
          name: "Selim Ferroukhi",
          email: "selim.ferroukhi7@gmail.com",
          profileImg:
            "https://cdn.sortiraparis.com/images/80/104172/981129-le-musee-de-la-marine-a-paris-et-ses-collections-permanentes-tour-eiffel-trocadero.jpg",
        },
        {
          id: 2,
          name: "Emily Johnson",
          email: "emily.johnson@example.com",
          profileImg:
            "",
        },
        {
          id: 3,
          name: "John Doe",
          email: "john.doe@example.com",
          profileImg:
            "",
        },
        {
          id: 4,
          name: "Maria Garcia",
          email: "maria.garcia@example.com",
          profileImg:
            "",
        },
      ];

  return (
    <div className="task-card" >
        <div className='task-card__header' >
            <div className='task-card__header__field' >
                <div className='task-card__header__field__icon' ><SpaceDashboardOutlinedIcon style={{ fontSize: "16px", color: "#4D38B2" }} /></div>
                <div className='task-card__header__field__label' >Dashboard</div>
            </div>
            <div className='task-card__header__status' >
                <div className='task-card__header__status__icon' ></div>
                <div className='task-card__header__status__label' >Medium</div>  
            </div>
        </div>

        <div className='task-card__title' >Employee Details</div>

        <div className='task-card__description' >Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

        <div className='task-card__bar' ></div>

        <div className='task-card__footer' >
            <div className='task-card__footer__left' >
                {users.map((user, index) => (
                    <div key={index}  className='task-card__footer__left__avatar' ><Avatar user={user} /></div>
                ))}
               

            </div>
            <div className='task-card__footer__right' >
                <div className='task-card__footer__right__attachements' >
                    <div className='task-card__footer__right__attachements__icon' >< AttachFileOutlinedIcon style={{ fontSize: "16px", color: "#9090A1" }} /></div>
                    <div className='task-card__footer__right__attachements__value' >3</div>
                </div>
                <div className='task-card__footer__right__messages' >
                    <div className='task-card__footer__right__messages__icon' ><ChatBubbleOutlineOutlinedIcon style={{ fontSize: "16px", color: "#9090A1" }} /> </div>
                    <div className='task-card__footer__right__messages__value' >2</div>
                </div>
            </div>
        </div>
    </div>
  )
}
