import styled from 'styled-components';
import AppStoreSvg from '@/assets/app-store.svg'
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack } from '@/components/common/layout';
import TwitterSvg from '@/assets/twitter-icon.svg'
import DiscordSvg from '@/assets/discord-icon.svg'
import GitHubSvg from '@/assets/github-icon.svg'
import config from '@/data/config';

const TwitterIcon = styled(TwitterSvg)`
  width: 48px;
  height: 48px;
`
const DiscordIcon = styled(DiscordSvg)`
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
            <DiscordIcon />
            <Typography variant="headline-body">Join the conversation</Typography>
            <Typography variant="body-reduced">
              Join to discuss Memento, to ask for any help 
              from the community, or to influence Memento.
            </Typography>
            <Typography variant="body-reduced"><a href={config.links.discord}>Start a conversation</a></Typography>
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
