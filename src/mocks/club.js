import mock from 'src/utils/mock';

let users = [
  {
    id: '1',
    name: 'Rafael Kunde',
    deporte: 'Tenis',
    avatar: '/static/images/placeholders/covers/sports_tennis.png',
    logoBota: '/static/images/placeholders/covers/7.png',
    
    email: 'Monte.Auer31@yahoo.com',
    jobtitle: 'Product Infrastructure Associate',
    username: 'Delphia22',
    location: 'Gislasonchester',
    role: 'admin',
    coverImg: '/static/images/placeholders/covers/1.jpg',
    followers: '667',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, sit amet eleifend.',
    posts: '8'
  },
  {
    id: '2',
    deporte: 'Basket',
    name: 'Madeline Pagac',
    avatar: '/static/images/placeholders/covers/sports_basketball.png',
    logoBota: '/static/images/placeholders/covers/7.png',
    
    email: 'Francis64@gmail.com',
    jobtitle: 'Internal Configuration Planner',
    username: 'Odessa_Goodwin38',
    location: 'Flaviomouth',
    role: 'subscriber',
    coverImg: '/static/images/placeholders/covers/2.jpg',
    followers: '375',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    posts: '11'
  },
  {
    id: '3',
    name: 'Okey Turner V',
    deporte: 'Rugby',
    avatar: '/static/images/placeholders/covers/sports_football.png',
    logoBota: '/static/images/placeholders/covers/7.png',
    email: 'Alexys.Frami91@hotmail.com',
    jobtitle: 'Regional Division Analyst',
    username: 'Ross_Reichert',
    location: 'Derekmouth',
    role: 'customer',
    coverImg: '/static/images/placeholders/covers/3.jpg',
    followers: '6333',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    posts: '23'
  }
];

mock.onGet('/api/deportes').reply(() => {
  return [200, { users }];
});

mock.onGet('/api/deporte').reply((config) => {
  const { userId } = config.params;
  const user = users.find((_user) => _user.id === userId);

  return [200, { user }];
});
