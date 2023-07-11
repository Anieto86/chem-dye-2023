import { Grid, Typography } from '@mui/material';

export const Txtblog2 = () => {
  return (
    <Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-end"
        sx={{
          p: 2,
        }}
      >
        <Grid item>
          <Typography variant="h6">By Mariana Oksdath Mansilla</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">3 min reading</Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={4} sx={{ px: 9 }}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ color: '#392767' }}>
            Translating Complex Data into Compelling Scientific Stories
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            When we envision the world of science, we often picture researchers
            in white coats conducting explosive experiments with unruly hair.
            But what does science truly look like?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Have you ever heard of scientific illustrators? These talented
            individuals play a pivotal role in bringing science to life through
            captivating visuals. They possess a unique ability to comprehend
            scientific concepts like scientists do and transform them into
            artistic images that resonate with audiences. Scientific
            illustrators typically have a background in art. However, the paths
            that lead to this career are diverse due to the scarcity of
            dedicated courses worldwide, with each person following their own
            unique trajectory.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Scientific illustrators often emerge from academic backgrounds,
            having pursued master's or doctoral degrees, or in my case, after
            spending several years as a postdoc. Their strong scientific
            foundation serves as a solid base, which they complement with design
            and artistic skills. The options for acquiring these skills are
            boundless—attending local art classes, taking online courses, or
            engaging in self-guided learning. There is no right or wrong path;
            it's about finding what works best for you and your circumstances.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1">
            Within the realm of scientific illustration, there are various
            specialisations and job types. Medical illustrators with expertise
            in human anatomy collaborate with surgeons, doctors, and hospitals.
            Illustrators specialising in nature contribute to museums, while
            those focused on research support the scientific community,
            universities, and private companies. The work format can range from
            freelance to being a staff member at a design studio or a science
            communication agency. Due to the relatively young nature of this
            career and the highly creative individuals involved, new ideas and
            pathways emerge every day.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1">
            I have always grappled with the notion that researchers must be
            proficient in every aspect of their work. It is increasingly common
            to see scientific specialists in fields such as writing,
            illustration, and project management. It is crucial to encourage the
            utilisation of these professionals' services, allocating funds in
            grant proposals to include their valuable contributions. For
            instance, universities and research centres would greatly benefit
            from having in-house scientific illustrators, as they can
            conceptualise and interpret complex science, creating compelling,
            accurate, and visually stunning images that significantly enhance
            science communication. Having access to such dedicated services can
            expedite the work of scientists and foster impactful outreach
            efforts.
          </Typography>
        </Grid>

        <Grid
          item
          sx={
            {
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center',
              // bgcolor: 'red',
            }
          }
        >
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            A scientific illustrator empowers and amplifies the message, helping
            scientists make their voices heard.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            If you want to delve deeper into this incredible career, I highly
            recommend exploring the "Association of Medical Illustrators"
            (ami.org) and "Now Medical Studios" (https://www.learnmedical.art/).
            These resources offer valuable insights and further information on
            this captivating field.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
