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
  articles : [
    {
      ID : '1',
      text : 'Secrets To An Amazing Role Playing Game',
      date : 'Apr 11, 2022',
      visual : '240',
      img : 'blog-item-1',
      time : '10'
    },
    {
      ID : '2',
      text : 'Top 5 Most Important Aspects Of Your Game',
      date : 'Apr 10, 2022',
      visual : '452',
      img : 'blog-item-2',
      time : '5'
    },
    {
      ID : '3',
      text : 'The Rise Of Fantasy Sports And Online Games',
      date : 'Apr 10, 2022',
      visual : '115',
      img : 'blog-item-3',
      time : '15'
    },
    {
      ID : '4',
      text : 'Benefits Of Gaming - PC And Video Games',
      date : 'Apr 09, 2022',
      visual : '325',
      img : 'blog-item-4',
      time : '8'
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
  ],
  feedbacks : [
    {
      ID : '1',
      text : 'Error maiores dolor sapiente suscipit non debitis animi, corrupti perferendis quidem facere in nulla voluptas cum',
      vote : '4',
      name : 'Kim',
      surname : 'Ramos',
      country : 'Serbia',
      pic : 'testimonials-image-3.png'
    },
    {
      ID : '2',
      text : 'Error maiores dolor sapiente suscipit non debitis animi, corrupti perferendis quidem facere in nulla voluptas cum',
      vote : '5',
      name : 'Tom',
      surname : 'Riddle',
      country : 'United Kingdom',
      pic : 'testimonials-image-2.png'
    },
    {
      ID : '3',
      text : 'Error maiores dolor sapiente suscipit non debitis animi, corrupti perferendis quidem facere in nulla voluptas cum',
      vote : '4',
      name : 'Giuseppe',
      surname : 'Gattuso',
      country : 'Italy',
      pic : 'testimonials-image-1.png'
    },
    {
      ID : '4',
      text : 'Error maiores dolor sapiente suscipit non debitis animi, corrupti perferendis quidem facere in nulla voluptas cum',
      vote : '3',
      name : 'Grace',
      surname : 'Ferbson',
      country : 'United States',
      pic : 'testimonials-image-3.png'
    },
    {
      ID : '5',
      text : 'Error maiores dolor sapiente suscipit non debitis animi, corrupti perferendis quidem facere in nulla voluptas cum',
      vote : '5',
      name : 'Garry',
      surname : 'Francis',
      country : 'Kiribati',
      pic : 'testimonials-image-2.png'
    },
  ]
})