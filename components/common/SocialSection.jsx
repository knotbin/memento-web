import styled from 'styled-components';
import AppStoreSvg from '@/assets/app-store.svg'
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack } from '@/components/common/layout';
import TwitterSvg from '@/assets/twitter-icon.svg'
import IGSvg from '@/assets/ig-icon.svg'
import GitHubSvg from '@/assets/github-icon.svg'
import config from '@/data/config';

const TwitterIcon = styled(TwitterSvg)`
  width: 48px;
  height: 48px;
`
const IGIcon = styled(IGSvg)`
  width: 48px;
  height: 48px;
`
const GitHubIcon = styled(GitHubSvg)`
  width: 48px;
  height: 48px;
`
const AppStoreIcon = styled(AppStoreSvg)`
  width: 48px;
  height: 48px;
`

const SocialSection = () => {
  return (
    <Section contained gutterY>
      <Grid columns={{ xs: 1, md: 2, lg: 4}} gap>
        <GridItem>
          <Stack gap={1} align="center" style={{ textAlign: 'center' }}>
            <TwitterIcon />
            <Typography variant="headline-body">Keep up to date</Typography>
            <Typography variant="body-reduced">
              Stay in the know! Follow us @_mementoapp on Twitter to get the
              latest updates.
            </Typography>
            <Typography variant="body-reduced"><a href={config.links.twitter}>Follow Us</a></Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack gap={1} align="center" style={{ textAlign: 'center' }}>
            <IGIcon />
            <Typography variant="headline-body">See what we're up to</Typography>
            <Typography variant="body-reduced">
            Follow us on Instagram to stay updated on Memento’s outreach and 
            marketing efforts.
            </Typography>
            <Typography variant="body-reduced"><a href={config.links.instagram}>Start a conversation</a></Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack gap={1} align="center" style={{ textAlign: 'center' }}>
            <GitHubIcon />
            <Typography variant="headline-body">Start Contributing</Typography>
            <Typography variant="body-reduced">
              Browse Memento's codebase, star it, request features, report bugs, or contribute code.
            </Typography>
            <Typography variant="body-reduced"><a href={config.links.githubRepo}>Check it out</a></Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack gap={1} align="center" style={{ textAlign: 'center' }}>
            <AppStoreIcon/>
            <Typography variant="headline-body">Download Memento</Typography>
            <Typography variant="body-reduced">
              Get Memento, your mental inbox, on the App Store for iPhone and iPad for $0.99.
            </Typography>
            <Typography variant="body-reduced"><a href={config.links.download}>Download</a></Typography>
          </Stack>
        </GridItem>
      </Grid>
    </Section>
  );
}

export default SocialSection;
