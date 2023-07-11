import { Grid, Typography } from '@mui/material';

export const Txtblog4 = () => {
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
            Elevate Your Research and Captivate the Scientific Community with a
            Stellar Graphical Abstract
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            First and foremost, congratulations! The fact that you're
            considering a graphical abstract signifies that you've already
            conquered the most challenging part. You've validated your
            hypothesis and obtained exciting results that are ready to be shared
            with the world. You rock!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            But why should you bother with this seemingly minor detail? Well, a
            graphical abstract (GA) is more than just a concise summary of your
            findings. It's an opportunity to educate fellow scientists about
            your discoveries and engage the community with the novelty of your
            work. Researchers typically spend only a few minutes on each paper
            when seeking information, sometimes even less. Therefore, creating
            graphics that speak for themselves is crucial, effectively
            showcasing your research in a matter of minutes.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            A winning GA is one that everyone will want to feature in their next
            presentation.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            By now, I hope I've convinced you of the importance of giving due
            attention to your graphical abstract. So, without further ado, let
            me provide you with killer tips to make your next GA shine.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            TIP 1: Keep it Simple, Focus on the Story
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Avoid the temptation to include all your scientific data in the GA.
            Instead, strive for simplicity, as if you were explaining your
            findings in a few words. The GA should encapsulate the essence of
            your work, like reading the conclusion.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            TIP 2: Sketch Your Results
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Begin by sketching your results on a piece of paper, envisioning
            that you're explaining your discoveries to a broad audience who may
            not be experts in your field.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            TIP 3: Harness the Power of Colors
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Once you have a sketch that satisfies you, consider the design and
            aesthetics. The colour palette plays a significant role, but you
            don't have to tackle it alone. Several tools, such as coolors.co,
            design-seeds, and @ux.base on Instagram can assist you in selecting
            the perfect palette. I recommend visiting blogs like "Agent Majeure"
            for further insights on colour and aesthetics.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            TIP 4: Embrace Digital Illustration
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            While many scientists still rely on PowerPoint for illustrations
            (and there's nothing wrong with that), it's time to explore new
            horizons. If you enjoy creating digital illustrations, consider
            learning Adobe Illustrator, a vector-based software that enhances
            the quality and efficiency of your drawings. Alternatively,
            BioRender is free software that offers pre-designed icons, enabling
            you to create high-quality and professional images. If you lack the
            time and skills or simply prefer assistance, reach out to a
            scientific illustrator who will happily support you throughout the
            process.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            TIP 5: Prioritize Aesthetics
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            A remarkable GA should be clear, clean, and accurate, with attention
            to detail. Maintain consistent font throughout the illustration, and
            feel free to modify size or properties to add emphasis where
            necessary. Colours can guide the viewer's attention to the main
            points of interest. To achieve a polished finish, incorporate white
            spaces and avoid overwhelming the illustration with unnecessary
            information. The design should be functional, effortlessly conveying
            the critical aspects of your discoveries. By following these five
            steps, you'll master the art of creating impactful graphical
            abstracts that captivate audiences and elevate the visibility of
            your research.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            By following these five steps, you'll master the art of creating
            impactful graphical abstracts that captivate audiences and elevate
            the visibility of your research.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
