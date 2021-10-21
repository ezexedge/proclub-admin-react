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

const menuItems = [
  {
    heading: 'Usuarios',
    items: [
      
      {
        name: 'Usuarios',
        icon: PeopleAltIcon,
        link: '/preview/dashboards/healthcare',
        items: [
          {
            name: 'Doctors Page',
            badge: 'Hot',
            link: '/preview/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital Overview',
            link: '/preview/dashboards/healthcare/hospital'
          }
        ]
      },
      {
        name: 'Notificaciones',
        icon: NotificationsActiveIcon,
        link: '/preview/dashboards/healthcare',
        items: [
          {
            name: 'Doctors Page',
            badge: 'Hot',
            link: '/preview/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital Overview',
            link: '/preview/dashboards/healthcare/hospital'
          }
        ]
      },
      {
        name: 'Turnos',
        icon: CalendarTodayIcon,
        link: '/preview/dashboards/healthcare',
        items: [
          {
            name: 'Doctors Page',
            badge: 'Hot',
            link: '/preview/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital Overview',
            link: '/preview/dashboards/healthcare/hospital'
          }
        ]
      },
      {
        name: 'Ingresos',
        icon: TouchAppIcon,
        link: '/preview/dashboards/healthcare',
        items: [
          {
            name: 'Doctors Page',
            badge: 'Hot',
            link: '/preview/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital Overview',
            link: '/preview/dashboards/healthcare/hospital'
          }
        ]
      },
      {
        name: 'Espacios',
        icon: SportsSoccerIcon,
        link: '/preview/dashboards/healthcare',
        items: [
          {
            name: 'Doctors Page',
            badge: 'Hot',
            link: '/preview/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital Overview',
            link: '/preview/dashboards/healthcare/hospital'
          }
        ]
      },
      {
        name: 'Documentación',
        icon: GetAppIcon,
        link: '/preview/dashboards/healthcare',
        items: [
          {
            name: 'Doctors Page',
            badge: 'Hot',
            link: '/preview/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital Overview',
            link: '/preview/dashboards/healthcare/hospital'
          }
        ]
      },
      {
        name: 'Beneficios',
        icon: CardGiftcardIcon,
        link: '/preview/dashboards/healthcare',
        items: [
          {
            name: 'Doctors Page',
            badge: 'Hot',
            link: '/preview/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital Overview',
            link: '/preview/dashboards/healthcare/hospital'
          }
        ]
      },
      {
        name: 'Info Útil',
        icon: InfoIcon,
        link: '/preview/dashboards/healthcare',
        items: [
          {
            name: 'Doctors Page',
            badge: 'Hot',
            link: '/preview/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital Overview',
            link: '/preview/dashboards/healthcare/hospital'
          }
        ]
      },{
        name: 'Reportes',
        icon: EqualizerIcon,
        link: '/preview/dashboards/healthcare',
        items: [
          {
            name: 'Doctors Page',
            badge: 'Hot',
            link: '/preview/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital Overview',
            link: '/preview/dashboards/healthcare/hospital'
          }
        ]
      }
    ]
  },
];

export default menuItems;