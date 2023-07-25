import { Button, Grid, Typography } from '@mui/material';
import { ContactBtn } from './ContactBtn';
import { Link } from 'react-router-dom';
import img1 from '../assets/imgBlog/Img1.jpg';
import img2 from '../assets/imgBlog/Img2.png';
import img3 from '../assets/imgBlog/Img3.png';
import Img4 from '../assets/imgBlog/Img4.jpg';
import { NewsletterSubscription } from './common/NewsletterSubscription';
import { useState } from 'react';

const blogs = [
  {
    title: 'Embracing Transformation: A Journey from Comfort to the Unknown',
    img: img1,
    subTitle:
      "This post explores transitioning from a comfortable career to the unknown, highlighting career changes' increasing prevalence and benefits. It emphasises self-reflection, curiosity, connecting with resources and like-minded individuals, and embracing hard work. Understanding one's professional identity and seeking an aligned environment is crucial. The post underscores exploring new possibilities, leveraging unique skills, and prioritising self-care. Patience, reflection, goal-setting, and self-care are essential throughout the career transformation process.",
    link: 'txt1',
  },
  {
    title: 'Scientific Illustrators: Amplifying the Message',
    img: img2,
    subTitle:
      'This post explores the role of scientific illustrators in science communication, highlighting their ability to translate complex concepts into captivating visuals. It emphasises diverse paths in the field and the importance of utilising their services. In-house scientific illustrators are recommended to enhance science communication.',
    link: 'txt2',
  },
  {
    title:
      'Harnessing the Power of Social Networks: Amplifying Your Scientific Research',
    img: img3,
    subTitle:
      'Harness the power of social media to bridge the gap between scientists and society. Engage, create content, and embrace fun while conveying research findings in simple language and visually compelling ways. Amplify your impact and change perceptions by disseminating science and enhancing scientific literacy within society.',
    link: 'txt3',
  },
  {
    title:
      'Mastering the Art of Creating Impactful Graphical Abstracts in Five Simple Steps',
    img: Img4,
    subTitle:
      "Create impactful graphical abstracts in 5 steps: keep it simple, sketch results, use colours effectively, embrace digital illustration, and prioritise aesthetics. Elevate your research's visibility and captivate the scientific community.",
    link: 'txt4',
  },
];

export const Blog = () => {
  const [show, setShow] = useState(false);
  // const [email, setEmail] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   if (name === 'EMAIL') {
  //     setEmail(value);
  //   } else if (name === 'FNAME') {
  //     setFirstName(value);
  //   } else if (name === 'LNAME') {
  //     setLastName(value);
  //   }
  // };

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={10} sx={{ m: 5, fontSize: 60 }}>
          <Typography variant="h3" fontWeight={600}>
            Join Our <span style={{ color: '#DF367C' }}>Newsletter </span>for
            Expert Tips
            <br />
            and Inspiring Insights in Scientific <br />
            <span style={{ color: '#DF367C' }}>Visualization and Design</span>
          </Typography>
          <Grid item xs={9.5} sx={{ mb: 10 }}>
            <ContactBtn title="Join Us" onClickShow={handleShow} />
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center">
          {show && (
            <Grid item sx={{ m: 3, p: 3 }}>
              <NewsletterSubscription />
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        wrap="wrap"
        sx={{ p: 5 }}
        spacing={5}
      >
        {blogs.map((x, i) => {
          return (
            <Grid container spacing={6} key={i} sx={{ p: 3, ml: 5 }}>
              <Grid item xs={4}>
                <img
                  src={x.img}
                  alt="Image 1"
                  style={{ width: '80%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
                  {x.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {x.subTitle}
                </Typography>
                <Grid item>
                  <Link to={`/Blog/${x.link}`}>
                    <Button>Read More</Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
