import { Grid, Typography } from '@mui/material';

export const Txtblog3 = () => {
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
          <Typography variant="h6">4 min reading</Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={4} sx={{ px: 9 }}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ color: '#392767' }}>
            Bridging the Gap Between Scientists and Society
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            As a full-time researcher, I was once too consumed by my work to
            consider the relevance of social media or sharing my science with
            the world. After transitioning into a science communicator
            specialising in creating graphical and illustrated content for
            diverse audiences, my perspective underwent a radical
            transformation. Ultimately, it all boils down to perspective.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Most scientists dedicate their time to conducting experiments,
            writing grants and papers, and deciphering enigmatic processes that
            elude comprehension. Adding an extra burden may seem unattainable.
            However, consider this: what if I told you that utilising social
            media could attract talented PhD students and postdocs to your lab,
            providing more hands to advance your research? Or that it could
            facilitate new collaborations, partnerships, grants, and funding
            opportunities to propel your impactful scientific endeavours
            further? What if I told you that your science could capture the
            attention of local media and engage the public? The benefits are
            manifold. Engaging in social media and effectively communicating
            your work need not be arduous; allow me to provide you with some
            insights.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            JOIN THE ONLINE COMMUNITY
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            First and foremost, it is crucial to be present where your target
            audience resides. To save you time, scientists predominantly
            gravitate towards Twitter and LinkedIn. I must confess I am a
            Twitter novice, but I thoroughly enjoy LinkedIn. Your online
            presence should reflect not only the work you do but also your
            professional identity and interests.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            BE ENGAGED, CREATE CONTENT, AND EMBRACE FUN
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Active participation and interaction within the scientific community
            are paramount. Respond to comments, appreciate and share the work of
            others. For scientists, content creation can be as simple as
            documenting your day. It might involve sharing an image of your team
            working in the lab or discussing a challenging grant you recently
            obtained, providing valuable tips for your colleagues. Scientists
            often remain an enigma to many; let us demystify our profession and
            reveal to the world what it truly means to be a scientist.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            THE ART OF SCIENTIFIC COMMUNICATION
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Now, let us focus on how you convey your research findings. The goal
            is to reach a broad audience, ranging from your aunt to colleagues
            on the other side of the globe. Avoid convoluted terminology;
            instead, employ simple language that resonates with all. Visual
            content is your ally, as it aids in explaining your discoveries.
            Consider creating videos to enhance engagement. Users typically skim
            through social media platforms swiftly, spending seconds on each
            post. To captivate their attention, your content must be visually
            compelling. As scientists, we often overlook our research's impact
            and visual appeal. Yet, you can quickly test this by, for instance,
            sharing a microscopy video of a cell in motion within a petri dish.
            It may be a video you still have on your computer that may not be
            suitable for a scientific journal or boast a groundbreaking
            discovery. Nevertheless, it is content that can garner significant
            attention and provide insight into your work.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            AMPLIFYING YOUR IMPACT: CHANGING PERCEPTIONS
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            As scientific communicators, the veracity and precision of the
            information we disseminate are of utmost importance. Your role as a
            scientist is indispensable, as educating the public about the
            wonders of science helps bridge the gap between society and the
            research community. It also enables you to better understand
            people's needs and position research as a central discussion topic.
            We must continue disseminating science and enhancing scientific
            literacy within our society, propelling us toward collective
            improvement.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
