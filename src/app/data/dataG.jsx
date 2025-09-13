import { FormatListBulleted_Icon, Favorite_Icon, Bookmark_Icon, PlayArrow_Icon } from "../assests/icons";
export const Nav_link_data_Left=[
    {name:"Movies",Path:"/movie"},
    {name:"TV Shows",Path:"/TV"},
];

export const FooterSections = [
  {
    title: "The Basics",
    links: [
      { name: "About TMDB", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Support Forums", href: "/support" },
      { name: "API Documentation", href: "/api-docs" },
      { name: "System Status", href: "/status" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Contribution Bible", href: "/contribute" },
      { name: "Add New Movie", href: "/add-movie" },
      { name: "Add New TV Show", href: "/add-tv" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Guidelines", href: "/guidelines" },
      { name: "Discussions", href: "/discussions" },
      { name: "Leaderboard", href: "/leaderboard" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Use", href: "/terms" },
      { name: "API Terms of Use", href: "/api-terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "DMCA Policy", href: "/dmca" },
    ],
  },
];
export const sortOptions = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "title.asc", label: "Title (A-Z)" },
    { value: "title.desc", label: "Title (Z-A)" },
  ];

export const filterSections = [
  { id: "sort", title: "Sort" },
  { id: "Filter", title: "Filter" }
];

export const showMeOptions = [
  { id: "everything", label: "everything", defaultChecked: true },
  { id: "notSeen", label: "I haven't seen" },
  { id: "seen", label: "I have seen" }
];

export const actionItems = [
  {
    id: 'lists',
    title: 'Login to create and edit custom lists',
    icon: FormatListBulleted_Icon,
    alt: 'List',
    href: '#',
    tooltip: 'Login to create and edit custom lists'
  },
  {
    id: 'favorites',
    title: 'Add to favourites',
    icon: Favorite_Icon,
    alt: 'Heart',
    href: '#',
    tooltip: 'Add to favourites'
  },
  {
    id: 'watchlist',
    title: 'Add to watchlist',
    icon: Bookmark_Icon,
    alt: 'Bookmark',
    href: '#',
    tooltip: 'Add to watchlist'
  },
  {
    id: 'trailer',
    title: 'Play Trailer',
    icon: PlayArrow_Icon,
    alt: 'Play',
    href: '#',
    tooltip: 'Play Trailer',
    isPlayButton: true
  }
];
export const moreBoxContent = [
  {
    id: 'login',
    text: 'Want to rate or add this item to a list?',
    linkText: 'login',
    href: '/login'
  },
  {
    id: 'signup',
    text: 'Not a member?',
    linkText: 'signup',
    href: ''
  }
];

export const formFields = [
  {
    id: 'username',
    label: 'Username',
    type: 'text',
    name: 'username'
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    name: 'password'
  }
];
export const emojiReactions = [
  {
    id: 'vomit',
    name: 'Disgusted',
    description: 'face vomiting',
    image: '/picture/icon/emojiVomit.svg',
    alt: 'Vomiting emoji',
    value: 'vomit',
   
  },
  {
    id: 'laugh',
    name: 'Laugh',
    description: 'Rolling on the floor laughing',
    image: '/picture/icon/emojiLaugh.svg',
    alt: 'Laughing emoji',
    value: 'laugh',
  },

  {
    id: 'yawn',
    name: 'Bored',
    description: 'Yawning face !',
    image: '/picture/icon/EmojiYawn.svg',
    alt: 'Yawning emoji',
    value: 'yawn',
   
  }
];