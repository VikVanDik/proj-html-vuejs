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
  ]
})