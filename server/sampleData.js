// ! here we have 2 array, Projects and clients;
// *Each project per client 

//? Projects
const projects = [
  {
    id: '1',
    clientId: '1',
    name: 'eCommerce Website',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '2',
    clientId: '2',
    name: 'Dating App',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '3',
    clientId: '3',
    name: 'SEO Project',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '4',
    clientId: '4',
    name: 'Design Prototype',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'Done',
  },
  {
    id: '5',
    clientId: '5',
    name: 'Auction Website',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
];

//? Clients
const clients = [
  {
    id: '1',
    name: 'Rose Welch',
    email: 'arafewwit@dih.ca',
    phone: '343-567-4333',
  },
  {
    id: '2',
    name: 'Jane Gilbert',
    email: 'waabubub@big.fk',
    phone: '223-567-3322',
  },
  {
    id: '3',
    name: 'Victor Franklin',
    email: 'veclelot@vopha.gi',
    phone: '324-331-4333',
  },
  {
    id: '4',
    name: 'Charlie Jefferson',
    email: 'vufuh@tucif.sz',
    phone: '344-562-6787',
  },
  {
    id: '5',
    name: 'Violet Larson',
    email: 'gavo@wogja.kw',
    phone: '321-468-8887',
  },
];

module.exports = { projects, clients };