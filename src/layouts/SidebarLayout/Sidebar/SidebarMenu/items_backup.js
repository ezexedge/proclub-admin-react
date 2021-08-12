import HealthAndSafetyTwoToneIcon from '@material-ui/icons/HealthAndSafetyTwoTone';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import GetAppIcon from '@material-ui/icons/GetApp';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import InfoIcon from '@material-ui/icons/Info';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import CropFreeIcon from '@material-ui/icons/CropFree';

const menuItems = [
  {
    heading: 'Usuarios',
    items: [
      {
        name: 'Usuarios',
        icon: EqualizerIcon,
        link: '/admin/dashboard/usuario',
      },
      
      {
        name: 'Notificaciones',
        icon: NotificationsActiveIcon,
        link: '/admin/dashboard/notificacion',
      },
      {
        name: 'Turnos',
        icon: CalendarTodayIcon,
        link: '/admin/dashboard/turno',
      },
      {
        name: 'Documentacion',
        icon: GetAppIcon,
        link: '/admin/dashboard/documentacion',
      },
      {
        name: 'Info util',
        icon: NewReleasesIcon,
        link: '/admin/dashboard/info',
      },
      {
        name: 'Beneficios',
        icon: CardGiftcardIcon,
        link: '/admin/dashboard/beneficio',
     
      },
      {
        name: '',
        icon: '',
        link: '',
     
      },
      {
        name: '',
        icon: '',
        link: '',
     
      },
      {
        name: 'Deportes',
        icon:  SportsSoccerIcon,
        link: '/admin/dashboard/deporte',
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
        name: 'Ingresos espacios',
        icon: CropFreeIcon,
        link: '/admin/dashboard/espacio',
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
        name: '',
        icon: '',
        link: '',
     
      },
      {
        name: '',
        icon: '',
        link: '',
     
      },
      {
        name: '',
        icon: '',
        link: '',
     
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
      },
     
      
    ]
  },
];


export default menuItems;
