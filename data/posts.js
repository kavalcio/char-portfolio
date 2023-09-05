// TODO: fill this in with real data
export const ORDERED_POST_IDS = [
  'the-last-lightkeeper',
  'one-to-five',
  // 'wuthering-heights-2',
];

// todo: add year for films
export const POST_DICTIONARY = {
  'the-last-lightkeeper': {
    slug: 'the-last-lightkeeper',
    title: 'The Last Lightkeeper',
    subtitle: '2023',
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
    coverImage: '/assets/images/onetofive/onetofive-6.png',
    contents: [
      {
        type: 'text',
        text: `**Director:** Kelsea Mackay  
          **Costumer Designers:** Charlotte Claytor & Shira Yavor  
          **Writer:** Jennifer Sidoriak  
          **Production Company:** Kai Productions
        `,
      },
      // {
      //   type: 'text',
      //   text: 'Costumer Designers: Charlotte Claytor & Shira Yavor',
      // },
      // {
      //   type: 'text',
      //   text: 'Writer: Jennifer Sidoriak',
      // },
      // {
      //   type: 'text',
      //   text: 'Production Company: Kai Productions',
      // },
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
  // 'wuthering-heights-2': {
  //   slug: 'wuthering-heights-2',
  //   title: 'Wuthering Heights 2',
  //   coverImage: '/assets/blog/hello-world/cover.jpg',
  //   contents: [
  //     {
  //       type: 'image',
  //       source: '/assets/blog/hello-world/cover.jpg',
  //     },
  //     {
  //       type: 'image',
  //       source: '/assets/blog/hello-world/cover.jpg',
  //     },
  //     {
  //       type: 'image',
  //       source: '/assets/blog/hello-world/cover.jpg',
  //     },
  //   ],
  // },
};

export const getOrderedPosts = () => {
  return ORDERED_POST_IDS.map((id) => POST_DICTIONARY[id]);
};
