// TODO: fill this in with real data
export const ORDERED_POST_IDS = [
  'the-last-lightkeeper',
  'one-to-five',
  'anne-with-an-e',
];

// todo: add year for films
export const POST_DICTIONARY = {
  'the-last-lightkeeper': {
    slug: 'the-last-lightkeeper',
    title: 'The Last Lightkeeper',
    // subtitle: '2023',
    coverImage: '/assets/images/lightkeeper/lightkeeper-3.jpeg',
    contents: [
      {
        type: 'text',
        text: `**Director:** Sofia Simanovich  
          **Writer:** Sofia Simanovich  
          **Costume Designer:** Charlotte Claytor  
          **Production Company:** Karma Butterfly Productions
        `,
      },
      {
        type: 'image',
        source: '/assets/images/lightkeeper/lightkeeper-4.jpeg',
      },
      {
        type: 'image',
        source: '/assets/images/lightkeeper/lightkeeper-2.jpeg',
      },
      {
        type: 'image',
        source: '/assets/images/lightkeeper/lightkeeper-1.jpeg',
      },
      {
        type: 'image',
        source: '/assets/images/lightkeeper/lightkeeper-5.jpeg',
      },
      {
        type: 'image',
        source: '/assets/images/lightkeeper/lightkeeper-6.jpeg',
      },
      {
        type: 'image',
        source: '/assets/images/lightkeeper/lightkeeper-7.jpeg',
      },
    ],
  },
  'one-to-five': {
    slug: 'one-to-five',
    title: 'One to Five',
    // 2023
    coverImage: '/assets/images/onetofive/onetofive-6.png',
    contents: [
      {
        type: 'text',
        text: `**Director:** Kelsea Mackay  
          **Costume Designers:** Charlotte Claytor & Shira Yavor  
          **Writer:** Jennifer Sidoriak  
          **Production Company:** Kai Productions
        `,
      },
      {
        type: 'image',
        source: '/assets/images/onetofive/onetofive-6.png',
      },
      {
        type: 'image',
        source: '/assets/images/onetofive/onetofive-5.png',
      },
      {
        type: 'image',
        source: '/assets/images/onetofive/onetofive-4.png',
      },
      {
        type: 'image',
        source: '/assets/images/onetofive/onetofive-3.png',
      },
      {
        type: 'image',
        source: '/assets/images/onetofive/onetofive-2.png',
      },
      {
        type: 'image',
        source: '/assets/images/onetofive/onetofive-1.png',
      },
    ],
  },
  'anne-with-an-e': {
    slug: 'anne-with-an-e',
    title: 'Anne With An E - Season 3',
    // 2020
    coverImage: '/assets/images/anne/anne-7.jpg',
    contents: [
      {
        type: 'text',
        text: `**Creator:** Moira Walley-Beckett  
          **Costume Designer:** Alex Reda  
          **Costume Department Apprentice:** Charlotte Claytor  
          **Production Company:** Northwood Entertainment, CBC, Netflix
        `,
      },
      {
        type: 'image',
        source: '/assets/images/anne/anne-7.jpg',
      },
      {
        type: 'image',
        source: '/assets/images/anne/anne-6.jpg',
      },
      {
        type: 'image',
        source: '/assets/images/anne/anne-8.jpg',
      },
      {
        type: 'image',
        source: '/assets/images/anne/anne-1.jpg',
      },
      {
        type: 'image',
        source: '/assets/images/anne/anne-4.jpg',
      },
      {
        type: 'image',
        source: '/assets/images/anne/anne-5.jpg',
      },
      {
        type: 'image',
        source: '/assets/images/anne/anne-2.jpg',
      },
      {
        type: 'image',
        source: '/assets/images/anne/anne-3.jpg',
      },
    ],
  },
};

export const getOrderedPosts = () => {
  return ORDERED_POST_IDS.map((id) => POST_DICTIONARY[id]);
};
