
import Image from 'next/image';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import Typography from '@/components/common/Typography';
import { Row, Column, Section, Stack } from '@/components/common/layout';
import Button from '@/components/common/Button';
import HeroImage from '../HeroImage';
import { useRouter } from 'next/router';

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
                    Keep that in mind.
                  </Typography>
                  <Typography variant="intro-elevated" color="tertiary" gutterBottom>
                    Memento helps you actually come back to the things you save through a home screen widget.
                  </Typography>
                  <Button size="lg" onClick={() => router.push("https://apps.apple.com/")}>Download</Button>
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
