import { useMemo } from 'react';
import { Bell, Download, Feather, GitHub, Info, Layout, Phone, Sliders, Tool, Zap } from 'react-feather';
import Tile from '@/components/common/Tile';
import Image from 'next/image';
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack } from '@/components/common/layout';
import { useSite } from '@/components/common/Site';
import styled, { css, keyframes } from "styled-components"
import { mediaQueries } from '@/styles/breakpoints';

const AdaptiveImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 400px;
  object-fit: contain;
`;

const StyledGridItem = styled(GridItem)`
  @media (max-width: 768px) {
    &:nth-child(3) {
      order: 4;
    }
    &:nth-child(4) {
      order: 3;
    }
  }
`

const IntroFeaturesSection = () => {
  const { colorScheme = "light", breakpoint } = useSite();

  const gap = useMemo(() => breakpoint === 'xs' ? 24 : 40, [breakpoint])
  
  return (
    <Section contained gutterBottom={20} variant="secondary" style={{paddingTop: '10%'}}>
      <Grid columns={{ xs: 1, lg: 2 }} gap={{ xs: 6, lg: 12 }}>
        <StyledGridItem style={{display: 'flex', alignItems: 'center'}}>
          <Stack>
            <Download size={gap} />
            <Typography variant="intro" gutterTop>Easily Save Items</Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Memento is integrated with iOS, so you can save links 
              and notes through the app, the Share Sheet, Siri, or 
              the Action Button.
            </Typography>
          </Stack>
        </StyledGridItem>
        <StyledGridItem>
          <AdaptiveImage 
            width={400}
            height={400}
            src={`/share-${colorScheme}.png`}
            alt='Two iPhones, one with an action button menu to enter a new note, the other with a share sheet containing the Memento app icon'
          />
        </StyledGridItem>
        <StyledGridItem>
          <AdaptiveImage 
            width={500}
            height={500}
            src={`/view-${colorScheme}.png`}
          />
        </StyledGridItem>
        <StyledGridItem style={{display: 'flex', alignItems: 'center'}}>
          <Stack>
            <Bell size={gap} />
            <Typography variant="intro" gutterTop>
              Unintrusive Reminders
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Memento shows you saved links through Widgets on
              the home screen and lock screen, reminding you of
              them without annoying notifications.
            </Typography>
          </Stack>
        </StyledGridItem>
      </Grid>
    </Section>
  );
}

export default IntroFeaturesSection;
