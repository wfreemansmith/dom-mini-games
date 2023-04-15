const src = [
  "https://img.apmcdn.org/768cb350c59023919f564341090e3eea4970388c/square/72dd92-20180309-rick-astley.jpg",
  "https://www.xfire.com/wp-content/uploads/2022/08/Rickroll-Rick-Astley-Never-Gonna-Give-You-Up-Ad-stories1.jpg.webp",
  "https://phantom-marca.unidadeditorial.es/7d1c17a3272bc250d19d565326182a2c/crop/0x0/1064x709/resize/1320/f/jpg/assets/multimedia/imagenes/2023/01/01/16725816922461.png",
  "https://resources.mynewsdesk.com/image/upload/ar_16:9,c_fill,dpr_auto,f_auto,g_auto,q_auto:good,w_1782/tgbusmgh5uqvupkbwcqb",
  "https://www.geo.tv/assets/uploads/updates/2023-04-08/480922_9405538_updates.jpg",
  "https://www.gbnews.com/media-library/prince-harry.jpg?id=33446178&width=1200&height=800&quality=90&coordinates=0%2C0%2C0%2C0",
  "https://www.royal.uk/sites/default/files/styles/grid_2x2/public/images/biography/prince-harry-1.jpg?itok=VYHjEMgW&anti-cache=8912ccf12ebef",
]

export const getImages = () => {
  src.sort((a, b) => 0.5 - Math.random()).splice(6);
  return [...src, ...src].sort((a, b) => 0.5 - Math.random());
} 
