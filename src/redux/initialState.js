export const initialState = {
  // posts: {
  //   data: {},
  cathegories: [
    { id: 'pills', name: 'Pills' },
    { id: 'ecstasy', name: 'Ecstasy' },
    { id: 'cannabis', name: 'Cannabis' },
    // { id: 'amphetamines', name: 'Amphetamines' },
    // { id: 'premium', name: 'Premium' },
  ],
  drugs: {
    data: [
      {
        _id: '1',
        name: 'pills_hand',
        image: 'https://unsplash.com/photos/Dhrg4GtSojU',
        description: '',
        price: 25,
        rate: 4,
        cathegory: 'Pills',
        options: [
          { option1: '' },
          { option2: '' },
          { option3: '' },
        ],
      },
      {
        _id: '2',
        name: 'pills_hand',
        image: 'https://unsplash.com/photos/tLQRMO33DeI',
        description: '',
        price: 25,
        rate: 4,
        cathegory: 'Pills',
        options: [
          { option1: '' },
          { option2: '' },
          { option3: '' },
        ],
      },
      {
        _id: '2',
        name: 'pills_hand',
        image: 'https://unsplash.com/photos/FEPfs43yiPE',
        description: '',
        price: 25,
        rate: 4,
        cathegory: 'Pills',
        options: [
          { option1: '' },
          { option2: '' },
          { option3: '' },
        ],
      },

    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
