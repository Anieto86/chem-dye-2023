// data.js
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

//links para iconos del footer
export const socialLinks = [
  {
    url: 'https://www.instagram.com/chemdye_si/?hl=es',
    icon: <InstagramIcon />,
  },
  {
    url: 'https://www.linkedin.com/company/100022936/admin/feed/posts',
    icon: <LinkedInIcon />,
  },
  {
    url: 'https://twitter.com/i/flow/login?redirect_after_login=%2FMari_SciArt',
    icon: <XIcon />,
  },
];

//data para crew
export const crew = [
  {
    photo:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550396/02.%20Team/00_Mari_foto_editada_290524_xts7li.jpg',
    title: 'Dr. Mariana Oksdath',
    subTitle: 'Founder | Visual scientist and Science communicator',
    info: 'I’m Mariana, an Argentinian living in Australia. With over a decade of experience as a researcher in academia and the privilege of working as a designer with prestigious names like Greenpeace, I have found my passion in creating visuals that revolutionise how we perceive science.The power of visuals to convey complex scientific concepts guides my mission. I approach every project with the rigour of a scientist and the creativity and innovation of an artist. My desire is for visual science communication to be widely recognised and appreciated.,',
  },
  {
    photo:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550432/02.%20Team/04_Rebe_foto_editada_290524_pox47z.jpg',
    title: 'Rebeca Fernández Deandrea ',
    subTitle: 'Marketing Specialist and Project Manager',
    info: 'I graduated with degrees in Social Communication and Strategic Digital Marketing from a public university in Argentina. Throughout my professional journey, I have worked for various companies and organisations, and am currently venturing into the field of scientific communication.My mission is to apply tools that showcase everything ChemDye has to contribute to the field of science and improve teamwork processes to achieve every goal we set.',
  },
  {
    photo:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550411/02.%20Team/02_Sofi_foto_editada_290524_ogpjpr.jpg',
    title: 'Dra. Sofía Polcownuk',
    subTitle: 'Scientific illustrator and communicator',
    info: 'I hold a Ph.D. in Biology, with a background in neuroscience and a passion for wildlife ecology. I began my journey in scientific illustration and communication inspired by the landscapes, flora, and fauna of the Argentine Patagonia, my birthplace.I refine my artistic techniques daily by exploring and utilising various mediums, from watercolours to digital tools. Leveraging my skills in illustration and design, I aim to create creative works that celebrate the beauty and complexity of science.',
  },
  {
    photo:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550424/02.%20Team/03_David_foto_editada_290424_n4scds.jpg',
    title: 'David Rojas Márquez',
    subTitle: 'Natural Science Illustrator   ',
    info: 'Born in Colombia and raised in Argentina, my academic journey started with a Bachelor’s degree in genetics and a PhD in immunology. My scientific curiosity and desire to keep learning led me to enrol in a scientific illustration master where I discovered my true passion.My mission is to simplify intricate scientific concepts, utilising my expertise to craft clear and captivating visual representation bringing science closer to a broader audience.',
  },
  {
    photo:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550401/02.%20Team/01_Gaby_foto_editada_290524_j76ruz.jpg',
    title: 'Gabriela M. Thiery',
    subTitle: 'Senior sound and image designer',
    info: 'Hailing from Buenos Aires, Argentina, and boasting over two decades of professional experience across diverse fields in the Art industry, I have developed a high level of versatility in utilising tools such as motion graphics, stop motion, 2D and 3D animation, and illustration.I consider myself a self-taught individual who is passionate about creating from scratch, giving life, and materialising ideas by finding the unique narrative of each project. My goal is to apply my entire background to achieve pieces with their own personality and a visual power that makes a difference.',
  },
];

//time line roadmap
export const timelineItems = [
  {
    number: '1',
    image:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717735668/04.%20Services/Service-roadmap01_zdd3b3.png',
    title: 'Initial contact',
    text: 'Send us an email and tell us about your project! You can start by telling us who you are or which company you work for. Also, include all the details you consider important about the project you would like to work on together.',
  },
  {
    number: '2',
    image:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717737216/04.%20Services/Services-roadmap02_lknns6.png',
    title: "Let's get into details",
    text: "At this stage, we will meet to get on the same page and assess the project's needs in depth. We will team up to create ideas that suit your needs. After our initial conversation, you will receive a project proposal.",
  },
  {
    number: '3',
    image:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717737637/04.%20Services/Services-Roadmap_03_yoftee.png',
    title: "Let's get to work",
    text: "After collecting all the information, we'll put together an initial draft for your review. Your input is crucial in refining it until it perfectly aligns with your research needs. We agree on the number of revisions upfront, ensuring you always have a clear expectation of what to anticipate from us.",
  },
];

//service cards
export const services = [
  {
    title: 'Graphic Design',
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550769/04.%20Services/02_Guidance_vnsb3i.png',
    text: [
      'Reports\n',
      'Logos\n',
      'Social media graphics\n',
      'Educational material\n',
      'Print designs\n',
    ],
  },
  {
    title: 'Scientific Illustrations',
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550770/04.%20Services/02_Illustrations_vn3jsx.png',
    text: [
      'Figures for journals\n',
      'Graphical abstracts\n',
      'Posters\n',
      'Infographics\n',
      'Presentations\n',
      'Medical illustrations\n',
    ],
  },
  {
    title: 'Animation',
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550770/04.%20Services/03_Animation_srscoo.png',
    text: ['Video abstracts\n', '3D Animation\n', '3D Illustrations\n'],
  },
  {
    title: 'Workshop',
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550771/04.%20Services/04_Workshop_gecv9n.png',
    text: [
      'Join our workshops to master the art of scientific illustration, whether you’re a student or a scientist. Learn to translate ideas from conception to reality in a collaborative and imaginative environment',
    ],
  },
];

// Lista de logos de empresas
export const companiesLogos = [
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551349/03.%20Icons/0._AERO_cc6m3s.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551347/03.%20Icons/6._Biogenox_j1ws6l.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551346/03.%20Icons/5._CorticalLab_dkz7au.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/4._GP_y2fc38.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/3._BDLS_qf5dkl.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/2._UniSA_oqlukz.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/1._NovaEye_uouutm.png',
];

//footer links
export const links = [
  { to: '/crew', text: 'Meet the team' },
  { to: '/work', text: 'Explore our work' },
  { to: '/services', text: 'What we do' },
];

export const linksPolicies = [
  { to: '/policies/website', text: 'About this website' },
  { to: '/policies/privacy', text: 'Privacy Policy' },
  { to: '/policies/cookies', text: 'Cookies' },
];

//work img portfolio
export const portfolios = [
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717554639/01.%20Portfolio/18_Image_18_dctbjp.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717554389/01.%20Portfolio/SANGER_-_Infographic_wlugh4.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717554215/01.%20Portfolio/17_Image_17_ypunpe.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717554177/01.%20Portfolio/MH_FIG_1_FINAL_Glycoform3_270224_doadul.png',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476859/01.%20Portfolio/16_Image_16_pqqxqu.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476856/01.%20Portfolio/14_Image_14_eglgyl.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476856/01.%20Portfolio/11_Image_11_lsbviu.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476856/01.%20Portfolio/13_Image_13_wn75kb.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476856/01.%20Portfolio/12_Image_12_lwketg.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476854/01.%20Portfolio/10_Image_10_wgyvyz.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476853/01.%20Portfolio/07_Image_07_j7mi7g.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476852/01.%20Portfolio/08_Image_08_yn9pw7.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476852/01.%20Portfolio/09_Image_09_l35783.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476852/01.%20Portfolio/06_Image_06_jxo6st.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476852/01.%20Portfolio/03_Image_03_urwuss.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476851/01.%20Portfolio/15_Image_15_ckdylm.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476851/01.%20Portfolio/05_Image_05_r0teyr.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476851/01.%20Portfolio/02_Image_02_d7mxcm.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476850/01.%20Portfolio/01_Image_01_uz94cn.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476850/01.%20Portfolio/04_Image_04_haivrr.jpg',
  },
];

//contact info
export const contactInfo = [
  'ChemDye Scientific Illustration',
  'si.chemdye@gmail.com',
  '+61 0466252387',
];
