import HealthAndSafetyTwoToneIcon from '@material-ui/icons/HealthAndSafetyTwoTone';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import GetAppIcon from '@material-ui/icons/GetApp';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import InfoIcon from '@material-ui/icons/Info';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import PeopleIcon from '@material-ui/icons/People';
const menuItems = [
  {
    heading: 'Usuarios',
    items: [
      {
        name: 'Usuarios',
        icon: PeopleIcon,
        link: '/superadmin/dashboard/usuario'
      },
      {
        name: 'Club',
        icon: EmojiEventsIcon,
        link: '/superadmin/dashboard/club',
     /*   items: [
          {
            name: 'Añadir nuevo',
            link: '/admin/dashboard/crear'
          },
          {
            name: 'Ver todos',
            link: '/admin/dashboard/club'
          }
        ]
        */
      },
      {
        name: 'Deportes',
        icon: GolfCourseIcon,
        link: '/superadmin/dashboard/deporte',
       /* items: [
          {
            name: 'Añadir nuevo',
            link: '/preview/dashboards/healthcare/doctor'
          },
          {
            name: 'Ver todos',
            link: '/preview/dashboards/healthcare/hospital'
          }
        ]
        */
      },
      {
        name: 'Notificaciones',
        icon: NotificationsActiveIcon,
        link: '/superadmin/dashboard/notificacion',
        items: [
          {
            name: 'Notificaciones',
            link: '/superadmin/dashboard/notificacion'
          },
          {
            name: 'Encuestas',
            link: '/superadmin/dashboard/encuesta'
          }
        ]
      },
      {
        name: 'Beneficios',
        icon: CardGiftcardIcon,
        link: '/superadmin/dashboard/beneficio',
     
      },
       {
        name: 'Reportes',
        icon: EqualizerIcon,
        link: '/preview/dashboards/healthcare',
         items: [
          {
            name: 'Añadir nuevo',
            link: '/preview/dashboards/healthcare/doctor'
          },
          {
            name: 'Ver todos',
            link: '/preview/dashboards/healthcare/hospital'
          }
        ]
      }
   
      
    ]
  },
];

export default menuItems;

