// TODO: fill this in with real data
export const ORDERED_POST_IDS = [
  'hello-world',
  'wuthering-heights',
  'wuthering-heights-2',
];

export const POST_DICTIONARY = {
  'hello-world': {
    slug: 'hello-world',
    title: 'The Great Gatsby',
    coverImage: '/assets/blog/hello-world/cover.jpg',
    contents: [
      {
        type: 'text',
        text: 'Hello world, my name is Charlotte. Bingo bango \n oh no, I am a robot.'
      },
      {
        type: 'image',
        source: '/assets/blog/hello-world/cover.jpg',
      },
      {
        type: 'image',
        source: '/assets/blog/hello-world/cover.jpg',
      },
      {
        type: 'image',
        source: '/assets/blog/hello-world/cover.jpg',
      },
    ],
  },
  'wuthering-heights': {
    slug: 'wuthering-heights',
    title: 'Wuthering Heights',
    coverImage: '/assets/blog/hello-world/cover.jpg',
    contents: [
      {
        type: 'image',
        source: '/assets/blog/hello-world/cover.jpg',
      },
      {
        type: 'text',
        text: 'Aaaaa yes'
      },
      {
        type: 'image',
        source: '/assets/blog/hello-world/cover.jpg',
      },
    ],
  },
  'wuthering-heights-2': {
    slug: 'wuthering-heights-2',
    title: 'Wuthering Heights 2',
    coverImage: '/assets/blog/hello-world/cover.jpg',
    contents: [
      {
        type: 'image',
        source: '/assets/blog/hello-world/cover.jpg',
      },
      {
        type: 'image',
        source: '/assets/blog/hello-world/cover.jpg',
      },
      {
        type: 'image',
        source: '/assets/blog/hello-world/cover.jpg',
      },
    ],
  },
};

export const getOrderedPosts = () => {
  return ORDERED_POST_IDS.map((id) => POST_DICTIONARY[id]);
};
