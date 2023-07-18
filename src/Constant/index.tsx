export const LoginCredential = {
  email: 'shiyamraju1999@gmail.com',
  password: '12345678',
};

export const HEADER_VARIANT = {
  JOB_TAB: 'JOB_TAB',
  EDIT_TAB: 'EDIT_TAB',
};

export const LISTING_CARD = [
  {
    id: 1,
    userName: 'bm2011-david paul',
    industry: 'Starks industries - Trade',
    purpose: 'Trade',
    documentType: 'Lead',
    date: '21,Jan 2023',
    location: '59 Walwyn Rd, Chatto,TD% OQT,United Kingdom',
  },
  {
    id: 2,
    userName: 'bm2011-david paul',
    industry: 'Starks industries - Trade',
    purpose: 'Trade',
    documentType: 'Invoce',
    date: '21,Jan 2023',
    location: '59 Walwyn Rd, Chatto,TD% OQT,United Kingdom',
    invoice: 'INVI2112',
  },
  {
    id: 3,
    userName: 'bm2011-david paul',
    industry: 'Starks industries - Trade',
    purpose: 'Trade',
    documentType: 'Lead',
    date: '21,Jan 2023',
    location: '59 Walwyn Rd, Chatto,TD% OQT,United Kingdom',
  },
  {
    id: 4,
    userName: 'bm2011-david paul',
    industry: 'Starks industries - Trade',
    purpose: 'Trade',
    documentType: 'Lead',
    date: '21,Jan 2023',
    location: '59 Walwyn Rd, Chatto,TD% OQT,United Kingdom',
  },
  {
    id: 5,
    userName: 'bm2011-david paul',
    industry: 'Starks industries - Trade',
    purpose: 'Trade',
    documentType: 'Lead',
    date: '21,Jan 2023',
    location: '59 Walwyn Rd, Chatto,TD% OQT,United Kingdom',
  },
  {
    id: 6,
    userName: 'bm2011-david paul',
    industry: 'Starks industries - Trade',
    purpose: 'Trade',
    documentType: 'Lead',
    date: '21,Jan 2023',
    location: '59 Walwyn Rd, Chatto,TD% OQT,United Kingdom',
  },
  {
    id: 7,
    userName: 'bm2011-david paul',
    industry: 'Starks industries - Trade',
    purpose: 'Trade',
    documentType: 'Lead',
    date: '21,Jan 2023',
    location: '59 Walwyn Rd, Chatto,TD% OQT,United Kingdom',
  },
  {
    id: 8,
    userName: 'bm2011-david paul',
    industry: 'Starks industries - Trade',
    purpose: 'Trade',
    documentType: 'Lead',
    date: '21,Jan 2023',
    location: '59 Walwyn Rd, Chatto,TD% OQT,United Kingdom',
  },
];

export const EDIT_LISTING = [
  {
    id: 1,
    title: 'Roller(Decora)',
    description: 'Kitchen,%00mm,800mm,Acasia,White,etc....',
    quantity: '03',
    price: '$489.21',
    net: '$465.72',
    vot: '$23.49',
    imageUrl: 'https://m.media-amazon.com/images/I/71X7KCliODL.jpg',
  },
  {
    id: 2,
    title: 'Roller(Decora)',
    description: 'Kitchen,%00mm,800mm,Acasia,White,etc....',
    quantity: '03',
    price: '$489.21',
    net: '$465.72',
    vot: '$23.49',
    imageUrl:
      'https://t4.ftcdn.net/jpg/01/75/20/13/240_F_175201361_KV5YFFoob3T8kCMMo3ypj6L6gqHlQHWb.jpg',
  },
];

export const getShrinkTitle = (data: string) => {
  const response = data.substring(0, 10) + '...';
  return response;
};

export const getShrinkDescription = (data: string) => {
  const response = data.substring(0, 100) + '...';
  return response;
};
