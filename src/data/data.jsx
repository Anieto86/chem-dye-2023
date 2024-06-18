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
export const imageUrls = [
  {
    number: 0,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327390/01.%20Portfolio/CorticalLab_171022_rjw2pc.jpg',
    description: 'Cortical Lab 171022',
  },
  {
    number: 1,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327402/01.%20Portfolio/MichelleHill_270224_oi2x2u.png',
    description: 'Michelle Hill',
  },
  {
    number: 2,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327394/01.%20Portfolio/Calabrese_et_al_GA_SP_191223_final-01_wjpjlm.png',
    description: 'Calabrese et al GA SP 191223',
  },
  {
    number: 3,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327398/01.%20Portfolio/MarinaCCB_231222_iluppr.jpg',
    description: 'Marina CCB 231222',
  },
  {
    number: 4,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327400/01.%20Portfolio/Marina_Kochetkova_Illustration_US_letter_vpzibh.jpg',
    description: 'Marina Kochetkova Illustration US Letter',
  },
  {
    number: 5,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717554177/01.%20Portfolio/MH_FIG_1_FINAL_Glycoform3_270224_doadul.png',
    description: 'MH FIG 1 Glycoform3',
  },
  {
    number: 6,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327398/01.%20Portfolio/Biogenox_oqg5cn.jpg',
    description: 'Biogenox',
  },
  {
    number: 7,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327392/01.%20Portfolio/04_Vicryl_Tie_ra30ed.jpg',
    description: 'Vicryl Tie',
  },
  {
    number: 8,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327392/01.%20Portfolio/03_Creating_a_pocket_z3kttz.jpg',
    description: 'Creating a Pocket',
  },
  {
    number: 9,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717554389/01.%20Portfolio/SANGER_-_Infographic_wlugh4.jpg',
    description: 'Sanger Infographic',
  },
  {
    number: 10,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327392/01.%20Portfolio/01_Psoriasis_kpkatr.jpg',
    description: 'Psoriasis',
  },
  {
    number: 11,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718340485/01.%20Portfolio/Psoriasis_Herpes_mopzot.jpg',
    description: 'Image 2',
  },
  {
    number: 12,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327393/01.%20Portfolio/B_D-Injection_omnoic.jpg',
    description: 'B D Injection',
  },
  {
    number: 13,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327396/01.%20Portfolio/Inforgraphic_Global_warming_CO2_pollution_V4_mmuyw7.jpg',
    description: 'Infographic Global Warming CO2 Pollution',
  },
  {
    number: 14,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327395/01.%20Portfolio/01_CAR_T_cell_theraphy_infographic_zjn5al.jpg',
    description: 'CAR T Cell Therapy Infographic',
  },
  {
    number: 15,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327401/01.%20Portfolio/NEW_Illustration_global_warming_v6_qshfwb.jpg',
    description: 'New Illustration Global Warming',
  },
  {
    number: 16,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327786/01.%20Portfolio/Escenario_2_Pulmon_Mariana_OksdathMansilla_jtozsv.jpg',
    description: 'Scenario 2 Lung Mariana Oksdath Mansilla',
  },
  {
    number: 17,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327416/01.%20Portfolio/Free_Material_Infographic_nfpecz.jpg',
    description: 'Free Material Infographic',
  },
  {
    number: 18,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327570/01.%20Portfolio/Imagen_for_topic_Graphical_Abstract_n9lmrc.jpg',
    description: 'Image for Topic Graphical Abstract',
  },
  {
    number: 19,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327516/01.%20Portfolio/Imagen_for_topic_3_CC_cieajm.jpg',
    description: 'Image for Topic 3 CC',
  },
  {
    number: 20,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327398/01.%20Portfolio/Option2_ImageScienceComm_Topic2_acedyt.png',
    description: 'Option 2 Image Science Comm Topic 2',
  },
  {
    number: 21,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327397/01.%20Portfolio/CorticalLab_web_011022_qjd011.jpg',
    description: 'Cortical Lab Web 011022',
  },
  {
    number: 22,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476852/01.%20Portfolio/06_Image_06_jxo6st.jpg',
    description: 'Image 6',
  },
  {
    number: 23,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476856/01.%20Portfolio/14_Image_14_eglgyl.jpg',
    description: 'Image 14',
  },
  {
    number: 24,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476851/01.%20Portfolio/15_Image_15_ckdylm.jpg',
    description: 'Image 15',
  },
  {
    number: 25,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476859/01.%20Portfolio/16_Image_16_pqqxqu.jpg',
    description: 'Image 16',
  },
  {
    number: 26,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476852/01.%20Portfolio/03_Image_03_urwuss.jpg',
    description: 'Image 3',
  },
  {
    number: 27,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476851/01.%20Portfolio/02_Image_02_d7mxcm.jpg',
    description: 'Image 2',
  },
  {
    number: 28,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327391/01.%20Portfolio/3DIllustrations_1705203_watp97.jpg',
    description: '3D Illustrations',
  },
  {
    number: 29,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718333341/01.%20Portfolio/3D_cover_Delivery_12062024_b7p9dw.jpg',
    description: 'Image 2',
  },
  {
    number: 30,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718327394/01.%20Portfolio/Cell_Extrusion_kchhif.gif',
    description: 'Cell Extrusion',
  },
  {
    number: 31,
    url: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1718338492/01.%20Portfolio/EyesAnimated_z8iatp.gif',
    description: 'Image 2',
  },
];

//contact info
export const contactInfo = [
  'ChemDye Scientific Illustration',
  'si.chemdye@gmail.com',
  '+61 0466252387',
];
