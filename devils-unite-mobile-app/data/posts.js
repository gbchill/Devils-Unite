import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ644QD6RJBzjwheiazrxMTqY6QVqF_PbPXcw&s',
    user: USERS[0].user,
    likes: 7870,
    caption: '🎉 Join us for an unforgettable night at the campus club!  🎶🕺💃',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'thebruhman',
        comment: 'This looks amazing! Can’t wait! 🙌'
      },
      {
        user: 'johndoe123',
        comment: 'Is there a dress code? 🤔'
      },
    ],
  },

  {
    imageUrl: 'https://media.licdn.com/dms/image/D5622AQH8l8kHJDwrNw/feedshare-shrink_800/0/1698092974060?e=2147483647&v=beta&t=o2gevwlIpe-6fEqDyXLrTEc951qTMDgDNYjdzcJTFIk',
    user: USERS[1].user,
    likes: 1364,
    caption: '💻 Ready to level up your coding skills? Join us this weekend for an immersive coding workshop! Whether you’re a beginner or a pro, there’s something for everyone. Snacks and drinks provided! 🍕🥤',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'coderqueen',
        comment: 'I’m so excited for this! 👩‍💻'
      },
      {
        user: 'techguy',
        comment: 'Can beginners join too?'
      },
    ],
  },

  {
    imageUrl: 'https://stamcenter.asu.edu/wp-content/uploads/sites/51/2023/01/NEWD2023_Flyer.png',
    user: USERS[2].user,
    likes: 64,
    caption: '🎊 Ring in the New Year with us at the Student Center! We’ve got music, food, and plenty of activities lined up. Let’s celebrate together and make it a night to remember! 🥳✨',
    profile_picture: USERS[2].image,
    comments: [
      {
        user: 'partyanimal',
        comment: 'This is gonna be epic! 🎉'
      },
      {
        user: 'studylife',
        comment: 'What time does it start?'
      },
    ],
  },

  {
    imageUrl: 'https://m.discgolfscene.com/flyers/tournaments/28011/poly-pop-up-2-0-1574274447-large.jpg',
    user: USERS[3].user,
    likes: 139,
    caption: '🌞 Don’t miss our pop-up event at the quad this Friday! We’ll have outdoor games, food trucks, and live music. 🎶🎈',
    profile_picture: USERS[3].image,
    comments: [
      {
        user: 'sportygal',
        comment: 'I’m definitely coming! 🏃‍♀️'
      },
      {
        user: 'relaxingdude',
        comment: 'What activities are planned?'
      },
    ],
  },

  {
    imageUrl: 'https://www.upressonline.com/wp-content/uploads/2023/01/IMG_7710.jpg',
    user: USERS[1].user,
    likes: 1364,
    caption: '🖼️ Join us this Thursday for the opening of our art exhibition!  🎨🍷',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'artlover',
        comment: 'Can’t wait to see the artworks! 🎨'
      },
      {
        user: 'photoguy',
        comment: 'Will there be a photography section?'
      },
    ],
  },

  {
    imageUrl: 'https://pbs.twimg.com/media/EQgro8vUcAAuyE5.jpg:large',
    user: USERS[4].user,
    likes: 1031,
    caption: '🎮 Game night at the dorm lounge this Friday! Bring your favorite board games and video games. Snacks and drinks will be provided. Let’s have some fun and meet new friends! 🕹️🍿',
    profile_picture: USERS[4].image,
    comments: [
      {
        user: 'gamerchick',
        comment: 'Count me in! What games are we playing? 🎲'
      },
      {
        user: 'boardgamefan',
        comment: 'Is there a Catan tournament?'
      },
    ],
  },
];
