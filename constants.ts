
import { CostData, DayPlan, FoodCategory, FoodSpot } from './types';

// Charts Data
export const transportComparisonData: CostData[] = [
  { name: '巴士 (Bus)', cost: 150, time: 90 }, // ~22 MYR
  { name: '計程車 (Grab)', cost: 1000, time: 60 }, // ~140 MYR
  { name: '包車 (Private)', cost: 1500, time: 60 }, // ~200 MYR
];

export const budgetDistributionData = [
  { name: '住宿', value: 4000 },
  { name: '交通', value: 1000 },
  { name: '餐飲', value: 6000 },
  { name: '娛樂/門票', value: 4000 },
];

// Food Data
export const foodSpots: FoodSpot[] = [
  {
    id: '1',
    name: 'Burger & Lobster',
    category: FoodCategory.RESTAURANT,
    description: '雲頂必吃！來自倫敦的龍蝦與漢堡，SkyAvenue 1樓。',
    location: 'SkyAvenue',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Burger+%26+Lobster+Genting',
    imageUrl: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    name: 'Malaysian Food Street',
    category: FoodCategory.LOCAL,
    description: '匯集馬來西亞各地小販美食，炒粿條、福建麵必點。',
    location: 'SkyAvenue 4F',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Malaysian+Food+Street+Genting',
    imageUrl: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    name: 'Din Tai Fung 鼎泰豐',
    category: FoodCategory.RESTAURANT,
    description: '如果在山上想吃熟悉的中式點心，品質穩定的選擇。',
    location: 'SkyAvenue',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Din+Tai+Fung+Genting',
    imageUrl: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: '4',
    name: '美滋鍋 (Beauty in The Pot)',
    category: FoodCategory.RESTAURANT,
    description: '養顏美容火鍋，適合朋友聚餐，裝潢粉嫩。',
    location: 'SkyAvenue',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Beauty+in+The+Pot+Genting',
    imageUrl: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: '5',
    name: 'Llaollao',
    category: FoodCategory.SNACK,
    description: '清爽的優格冰淇淋，逛街累了的最佳點心。',
    location: 'SkyAvenue',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Llaollao+Genting',
    imageUrl: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: '6',
    name: 'Gohtong Jaya 街邊大排檔',
    category: FoodCategory.LOCAL,
    description: '位於半山腰，價格較山上便宜，有很多道地海鮮飯店。',
    location: 'Gohtong Jaya',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gohtong+Jaya+Food',
    imageUrl: 'https://picsum.photos/400/300?random=6'
  }
];

// Itinerary Data (Updated for 2028 CNY - Jan 26 is CNY Day 1)
export const itineraryData: DayPlan[] = [
  {
    day: 1,
    date: '2028/01/25 (除夕)',
    title: '抵達雲頂與室內探索',
    items: [
      {
        time: '09:00',
        activity: '吉隆坡出發 (KL Sentral)',
        location: 'KL Sentral Bus Terminal',
        duration: '1.5 小時',
        transport: 'Go Genting 巴士',
        note: '建議提前線上訂票，直達 Awana Bus Terminal',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=KL+Sentral'
      },
      {
        time: '11:00',
        activity: '搭乘 Awana SkyWay 纜車',
        location: 'Awana Station',
        duration: '20 分鐘',
        transport: '纜車',
        note: '中途可停清水岩廟 (Chin Swee Station)，若行李多可先直達頂端寄放',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Awana+SkyWay'
      },
      {
        time: '12:00',
        activity: '飯店 Check-in / 寄放行李',
        location: 'First World Hotel / Similar',
        duration: '1 小時',
        note: '農曆新年期間人潮眾多，預留排隊時間',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=First+World+Hotel+Genting'
      },
      {
        time: '13:30',
        activity: '午餐：Malaysian Food Street',
        location: 'SkyAvenue Level 4',
        duration: '1 小時',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Malaysian+Food+Street+Genting'
      },
      {
        time: '15:00',
        activity: 'Skytropolis 室內主題樂園',
        location: 'First World Plaza',
        duration: '3 小時',
        note: '不受天氣影響，適合下午遊玩',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Skytropolis+Indoor+Theme+Park'
      },
      {
        time: '19:00',
        activity: '晚餐 & 雲頂娛樂城',
        location: 'SkyCasino',
        duration: '自由時間',
        note: '小賭怡情，需攜帶護照入場',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=SkyCasino+Genting'
      }
    ]
  },
  {
    day: 2,
    date: '2028/01/26 (初一)',
    title: '戶外樂園與文化體驗',
    items: [
      {
        time: '09:00',
        activity: '早餐：道地南洋早餐',
        location: 'OldTown White Coffee',
        duration: '1 小時',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=OldTown+White+Coffee+Genting'
      },
      {
        time: '10:30',
        activity: '清水岩廟 (Chin Swee Caves Temple)',
        location: 'Chin Swee Station',
        duration: '2 小時',
        transport: '纜車往返 (免費)',
        note: '參觀九層萬佛塔，風景壯觀，新年期間香火鼎盛',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chin+Swee+Caves+Temple'
      },
      {
        time: '13:00',
        activity: '午餐：Burger & Lobster',
        location: 'SkyAvenue',
        duration: '1.5 小時',
        note: '避開尖峰時段，建議早點去排隊',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Burger+%26+Lobster+Genting'
      },
      {
        time: '15:00',
        activity: 'Genting SkyWorlds 戶外主題樂園',
        location: 'SkyWorlds',
        duration: '4-5 小時',
        note: '建議下載 App 預約 VQ (Virtual Queue)',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Genting+SkyWorlds+Theme+Park'
      },
      {
        time: '20:00',
        activity: 'SkySymphony 光影秀 & 逛街',
        location: 'SkyAvenue Atrium',
        duration: '1 小時',
        note: '免費觀賞，每小時一場',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=SkySymphony+Genting'
      }
    ]
  },
  {
    day: 3,
    date: '2028/01/27 (初二)',
    title: '購物與返程',
    items: [
      {
        time: '10:00',
        activity: '退房 & 早餐',
        location: 'Hotel',
        duration: '1 小時',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Genting+Highlands'
      },
      {
        time: '11:30',
        activity: 'Genting Highlands Premium Outlets',
        location: 'Awana Station 旁',
        duration: '3 小時',
        transport: '纜車下山',
        note: '許多名牌折扣，適合離開前最後衝刺',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Genting+Highlands+Premium+Outlets'
      },
      {
        time: '14:30',
        activity: '午餐：半山腰美食',
        location: 'Premium Outlets Food Court',
        duration: '1 小時',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Genting+Premium+Outlets+Food'
      },
      {
        time: '16:00',
        activity: '搭乘巴士返回吉隆坡',
        location: 'Awana Bus Terminal',
        duration: '1.5 小時',
        transport: '巴士',
        note: '帶著戰利品快樂回家',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Awana+Bus+Terminal'
      }
    ]
  }
];
