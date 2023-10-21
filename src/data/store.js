import { reactive } from 'vue';

export const store = reactive ({
  facts : [
    {
      ID : '1',
      text : 'Twitch Streams',
      data : '1135'
    },
    {
      ID : '2',
      text : 'Total Games',
      data : '44'
    },
    {
      ID : '3',
      text : 'Youtube Streams',
      data : '982'
    },
    {
      ID : '4',
      text : 'Pro Teams',
      data : '40'
    },
  ],
  matches : [
    {
      ID : '1',
      teamHome : 'game-img-1.png',
      teamAway : 'game-img-2.png',
      game : 'Call Of Duty',
      date : 'December 25, 2022 4:00 PM',
      youtube : {
        img : 'youtube-icon.png',
        text : 'Youtube'
      },
      twitch : {
        img : 'twitch-icon',
        text : 'Twitch'
      }
    },
    {
      ID : '2',
      teamHome : 'game-img-3.png',
      teamAway : 'game-img-4.png',
      game : 'Legendary Battles',
      date : 'December 25, 2022 4:00 PM',
      youtube : {
        img : 'youtube-icon.png',
        text : 'Youtube'
      },
      twitch : {
        img : 'twitch-icon.png',
        text : 'Twitch'
      }
    },
    {
      ID : '3',
      teamHome : 'game-img-5.png',
      teamAway : 'game-img-6.png',
      game : 'Nay Corral Gundown',
      date : 'December 25, 2022 4:00 PM',
      youtube : {
        img : 'youtube-icon.png',
        text : 'Youtube'
      },
      twitch : {
        img : 'twitch-icon.png',
        text : 'Twitch'
      }
    },
    {
      ID : '4',
      teamHome : 'game-img-7.png',
      teamAway : 'game-img-5.png',
      game : 'League Of Legends',
      date : 'December 25, 2022 4:00 PM',
      youtube : {
        img : 'youtube-icon.png',
        text : 'Youtube'
      },
      twitch : {
        img : 'twitch-icon.png',
        text : 'Twitch'
      }
    },
  ]
})