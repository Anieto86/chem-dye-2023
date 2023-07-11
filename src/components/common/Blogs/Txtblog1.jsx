import { Grid, Typography, ListItemText, List, ListItem } from '@mui/material';

const listItems = [
  'Decide to change.',
  'Embrace curiosity and receptiveness.',
  'Explore and understand yourself better—your likes, skills, values, and more.',
  'Expand your horizons and discover new possibilities.',
  'Connect with others on a human level.',
  'Set achievable goals and take small steps forward.',
  'Stay motivated and remember to prioritise self-care throughout the process of professional transformation.',
];

export const Txtblog1 = () => {
  return (
    <Grid container spacing={4}>
      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          direction: 'column',
        }}
      >
        <Typography variant="h6">By Mariana Oksdath Mansilla</Typography>
        <Typography variant="h6">3 min reading</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          style={{
            color: '#392767',
          }}
          gutterBottom
        >
          Embracing Transformation: A Journey from Comfort to the Unknown
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        // justifyContent="center"
        // alignItems="center"
        spacing={4}
        xs={10}
      >
        <Grid item>
          <Typography variant="body1">
            Welcome to my newsletter!I'm Mariana, a scientific designer and
            illustrator, and in this space, I'll be exploring topics related to
            science communication. Are you ready to embark on this journey with
            me? Let's dive in.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Today, I want to share a personal story that delves into the meaning
            of changing careers—
            <span style={{ fontWeight: 600 }}>
              moving from the comfort zone to the unknown
            </span>
            . In our fast-paced world, switching careers, sometimes even to
            entirely different fields, has become increasingly common.
            Professional life is more dynamic than ever, allowing us to reinvent
            ourselves multiple times. From my perspective, this shift offers
            tremendous benefits. A multidisciplinary background enables
            professionals to approach problems from various angles, fostering
            adaptability and versatility. Moreover, those who dare to change
            careers are more likely to find fulfilment in their work, driven by
            their own passions.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Many of us have experienced a situation where we feel unfulfilled,
            sensing something isn't quite right. Yet, changing that reality
            often feels like an insurmountable challenge. For many years, I
            believed it was merely a beautiful dream. However, as I reflect on
            my professional experiences and the path I've traversed, I realise
            that each step, whether right or wrong, has propelled me toward
            where I am now. It was a gradual process, and{' '}
            <span style={{ fontWeight: 600 }}>
              my first step was acknowledging my desire for a new professional
              path.
            </span>
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1">
            I was completely lost initially, but my curiosity and openness grew
            stronger. Curiosity can lead you to discover valuable resources such
            as enlightening blogs, insightful podcasts, or connecting with
            fascinating individuals. The key is to passively absorb information
            about professional transformations and explore connections and
            programs to aid you on your journey.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1">
            <span style={{ fontWeight: 600 }}>
              There's no magic formula; it requires hard work
            </span>
            . However, the rewards make it all worthwhile, even though success
            is uncertain. Understanding yourself is crucial—your professional
            identity, your skills, what brings you joy—and don't forget your
            values. You should seek an environment that aligns and integrates
            all these aspects. Next, open your mind to explore what else is out
            there, considering how your unique set of skills can be applied in
            new ways. Finally, embrace your humanity and connect with
            like-minded individuals who share your passions and values. Learn
            from those who are already living your dream job, understand their
            paths, and gain wisdom from their experiences.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1">
            Remember, this is a long journey—don't rush the process. Take the
            time to reflect and digest the information you gather. Plan
            meticulously, design a strategy, and think in smaller steps. It's
            easy to get caught up in grand dreams or ideas that could take a
            lifetime to achieve, which can be demotivating. Setting achievable
            short-term goals and breaking them down into manageable tasks gives
            you a sense of progress as you check items off your list.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            As someone who loves making lists, I've created a starter guide of
            things that helped me during my career change. You've got this:
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" component="div">
          <List>
            {listItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={
                    <Typography component="span" variant="body1">
                      {`${index + 1}. ${item}`}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Typography>
      </Grid>
    </Grid>
  );
};
