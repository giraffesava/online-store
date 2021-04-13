export enum AD_TYPES {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
}

export const ads = [{
  title: AD_TYPES.STANDARD,
  url: 'https://puzzlepalace.com.au/wp-content/uploads/2019/06/New-York-1500-Piece-Jigsaw-Puzzle-Clementoni-1.jpg',
  description: 'You will visit: New York, Washington, Los Angeles.',
  price: '250$',
},
{
  title: AD_TYPES.PREMIUM,
  url: 'https://woman.forumdaily.com/wp-content/uploads/2020/11/shutterstock_386306728.jpg',
  description: 'You will visit: New York, Brooklyn, Los Angeles, Chicago.',
  price: '450$',
},
{
  title: AD_TYPES.VIP,
  url: 'https://www.tourprom.ru/site_media/images/upload/2016/8/25/poiphoto/statuya-svobody.jpg',
  description: 'You can choose 5 places where you want to go.',
  price: '850$',
}];
