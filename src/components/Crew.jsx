import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ContactBtn } from './common/ContactBtn';

const crew = [
  {
    title: 'Mariana Oksdath',
    // img: img1,
    subTitle: `Founder | Visual Scientist`,
    text: 'Mariana is a visual scientist and founder of Anthropic. She has over 10 years of experience using AI to help scientists communicate complex ideas simply and effectively through data visualization, illustration and animation.',
  },
  {
    title: 'Gabriela M. Thiery ',
    // img: img1,
    subTitle: `Motion Graphics | Illustrator`,
    text: 'Mariana is a visual scientist and founder of Anthropic. She has over 10 years of experience using AI to help scientists communicate complex ideas simply and effectively through data visualization, illustration and animation.',
  },
  {
    title: 'Mariana Oksdath',
    // img: img1,
    subTitle: `Founder | Visual Scientist`,
    text: 'Mariana is a visual scientist and founder of Anthropic. She has over 10 years of experience using AI to help scientists communicate complex ideas simply and effectively through data visualization, illustration and animation.',
  },
  {
    title: 'Mariana Oksdath',
    // img: img1,
    subTitle: `Founder | Visual Scientist`,
    text: 'Mariana is a visual scientist and founder of Anthropic. She has over 10 years of experience using AI to help scientists communicate complex ideas simply and effectively through data visualization, illustration and animation.',
  },
];

export const Crew = () => {
  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={10}>
        <Typography variant="h2" mb="20px">
          ChemDye, a studio where the worlds of art and science come together
        </Typography>
        <Typography variant="h5">
          As your trusted partner, our top priority is to collaborate closely
          with you, ensuring we create visuals that illustrate the story of your
          science.
        </Typography>
        <Link
          target="_blank"
          to={`https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`}
        >
          <ContactBtn title="Connect with us" />
        </Link>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        wrap="wrap"
      >
        {crew.map((c, i) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={i}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title={c.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {c.title}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  {c.subTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {c.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More</Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
};
