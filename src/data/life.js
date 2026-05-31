// "My Life" photo blog. Photos are grouped by year (newest first).
//
// To add a photo: drop the image into /public/images/life/ and add an entry
// { src, caption } under the right year (or create a new { year, photos: [] } block).
//
// Optional per-photo fields:
//   aspect: 'W/H' — set the tile's aspect ratio. Default '4/3'.
//                   Common values: '3/4' (portrait, taller), '2/3' (more elongated portrait),
//                   '1/1' (square), '16/9' (landscape, wider), '21/9' (panoramic).
//   span:   2     — make this tile span 2 grid columns (full row on mobile, 2/3 on desktop).
//                   Combine with a wide aspect like '16/9' or '21/9' for panoramic shots.

export const hero = '/images/life/unsplash-image-1.jpg'

export const intro = `Beyond research, I enjoy capturing moments, exploring new places, and fitness.
I'm also an amateur piano players.`

export const quote =
  'You bring to the act of photography all the pictures you have seen, the books you have read, the music you have heard, the people you have loved. —— Ansel Adams'

export default [
  {
    year: 2026,
    photos: [
      { src: '/images/life/DSC_2796.jpg', caption: 'Manhattan, 2026.02'},
      { src: '/images/life/DSC_3069-2.jpg', caption: 'Manhattan, 2026.02' },
      // { src: '/images/life/Turkey_2.jpg', caption: 'Fethiye, 2024.04' },
      // { src: '/images/life/Turkey_1.jpg', caption: 'Göreme, 2024.05' },
    ],
  },
  {
    year: 2025,
    photos: [
      { src: '/images/life/DSC_2299.jpg', caption: 'DC, 2025.11'},
      { src: '/images/life/DSC_2335-3.jpg', caption: 'DC, 2025.11' },
      // { src: '/images/life/Turkey_2.jpg', caption: 'Fethiye, 2024.04' },
      // { src: '/images/life/Turkey_1.jpg', caption: 'Göreme, 2024.05' },
    ],
  },
  {
    year: 2024,
    photos: [
      { src: '/images/life/HongKong_2.jpg', caption: 'Hong Kong, 2024.07' },
      { src: '/images/life/Turkey_3.jpg', caption: 'Istanbul, 2024.04' },
      { src: '/images/life/Turkey_2.jpg', caption: 'Fethiye, 2024.04' },
      { src: '/images/life/Turkey_1.jpg', caption: 'Göreme, 2024.05' },
    ],
  },
  {
    year: 2023,
    photos: [
      { src: '/images/life/HongKong_1.jpg', caption: 'Hong Kong, 2023.10' },
      { src: '/images/life/Chongqing_1.jpg', caption: 'Chongqing, 2023.07' },
    ],
  },
]
