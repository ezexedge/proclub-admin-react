import mock from 'src/utils/mock';
import { subDays } from 'date-fns';

let projects = [
  {
    id: '1',
    name: 'Cebus apella',
    screenshot: '/static/images/placeholders/fitness/1.jpg',
    description: 'Proin interdum mauris non ligula pellentesque ultrices.',
    tags: ['Software'],
    startDate: subDays(new Date(), 1).getTime(),
    dueDate: subDays(new Date(), 3).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      },
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 56,
    status: 'completed'
  },
  {
    id: '2',
    name: 'Macropus agilis',
    screenshot: '/static/images/placeholders/fitness/2.jpg',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    tags: ['Backend'],
    startDate: subDays(new Date(), 2).getTime(),
    dueDate: subDays(new Date(), 5).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    progress: 45,
    status: 'not_started'
  }
];

mock.onGet('/api/projects').reply(() => {
  return [200, { projects }];
});
