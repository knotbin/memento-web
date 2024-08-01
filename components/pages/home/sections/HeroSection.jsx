
import Image from 'next/image';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import Typography from '@/components/common/Typography';
import { Row, Column, Section, Stack } from '@/components/common/layout';
import Button from '@/components/common/Button';
import HeroImage from '../HeroImage';
import { useRouter } from 'next/router';
import config from '@/data/config';

const ProductIconWrap = styled.div`
  width: 128px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroSection = ({ versionNumber, minimumSystemVersion }) => {
  const router = useRouter();
  
  return (
    <Parallax
      style={{ overflow: 'visible' }}
      renderLayer={(percentage) => {
        return (
          <Section contained gutterTop>
            <Row align="center" style={{ position: 'relative', zIndex: 1 }}>
              <Column width={{ md: 12, lg: 12 }}>
                <Stack gap={2} align="center">
                  <ProductIconWrap>
                    <Image
                      width={128}
                      height={128}
                      src="/product-icon.png"
                      alt="Memento product icon"
                    />
                  </ProductIconWrap>
                  <Typography variant="headline-elevated">
                    Your mental inbox.
                  </Typography>
                  <Typography variant="intro-elevated" color="tertiary" gutterBottom>
                    Memento is an app to save ideas you want to revisit with widgets to help you keep them in mind.
                  </Typography>
                  <Button size="lg" onClick={() => router.push(config.links.download)}>Download</Button>
                  <Typography variant="body-reduced" color="tertiary">{ versionNumber } | iOS {minimumSystemVersion ? `${minimumSystemVersion.split(".")[0]}+` : ``}</Typography>
                </Stack>
              </Column>
            </Row>
            <Row align="center">
              <Column>
                <HeroImage percentage={percentage} />
              </Column>
            </Row>
          </Section>
        )
      }}
    />
  );
}

export default HeroSection;
