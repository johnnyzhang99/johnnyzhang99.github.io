// ============================================================================
// Publications — single source of truth.
//
// To ADD a publication: copy one { ... } block and edit the fields.
// To EDIT one: change its fields here.
// Publications are grouped by `year` and sorted newest-first automatically.
//
// Fields:
//   title    (required) — full paper title
//   authors  (required) — author list; use '*' to mark the corresponding author
//   venue    (required) — journal / conference
//   year     (required) — number, used for grouping
//   date     (required) — 'YYYY-MM-DD' (used to sort within a year)
//   teaser   (required) — thumbnail path under /public/images/publications/
//   paperurl (required) — external link opened when the title is clicked
//   slidesurl, citation, excerpt (optional)
// ============================================================================
export default [
  {
    title:
      'HuGe: Towards Human-controllable image Generation in autonomous driving',
    authors: 'Yuanzhi Zeng, Shiwei Chen, Yutian Zhang, Dong Sun, Yong Wang, and Haipeng Zeng*',
    venue: 'Visual Informatics',
    year: 2025,
    date: '2025-10-22',
    teaser: '/images/publications/HuGe.png',
    paperurl: 'https://doi.org/10.1016/j.visinf.2025.100262',
  },
  {
    title:
      'CSLens: Towards Better Deploying Charging Stations via Visual Analytics —— A Coupled Networks Perspective',
    authors: 'Yutian Zhang, Liwen Xu, Shaocong Tao, Quanxue Guan, Quan Li, and Haipeng Zeng*',
    venue: 'IEEE Transactions on Visualization and Computer Graphics (VIS 2024)',
    year: 2024,
    date: '2024-09-10',
    teaser: '/images/publications/CSLens.png',
    paperurl: 'https://ieeexplore.ieee.org/abstract/document/10670473',
  },
  {
    title:
      'EVCSeer: An Exploratory Study on Electric Vehicle Charging Stations Utilization Via Visual Analytics',
    authors: 'Yutian Zhang, Shuxian Gu, Quan Li, and Haipeng Zeng*',
    venue: 'IEEE Computer Graphics and Applications',
    year: 2024,
    date: '2024-05-03',
    teaser: '/images/publications/EVCSeer.png',
    paperurl: 'https://ieeexplore.ieee.org/abstract/document/10518106',
  },
  {
    title:
      'MARLens: Understanding Multi-Agent Reinforcement Learning for Traffic Signal Control Via Visual Analytics',
    authors: 'Yutian Zhang, Guohong Zheng, Zhiyuan Liu, Quan Li, and Haipeng Zeng*',
    venue: 'IEEE Transactions on Visualization and Computer Graphics',
    year: 2024,
    date: '2024-04-23',
    teaser: '/images/publications/MARLens.png',
    paperurl: 'https://ieeexplore.ieee.org/abstract/document/10506996',
  },
]
