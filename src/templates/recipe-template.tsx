import React from 'react';
import Content from '../components/Content';
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '../constants';
import RecipeTags from './recipe-tags';
import { WindowLocation } from '@reach/router';
import { PageStyled } from '../components/PageStyled';
import { PostContainer } from '../components/PostContainer';
import { PostStyled } from '../components/PostStyled';
import ClockSvg from '../../static/img/clock.svg';
import ClockWaitSvg from '../../static/img/clock-wait.svg';
import ServingsSvg from '../../static/img/servings.svg';
import RecipeBanner from '../components/RecipeBanner';

interface RecipeTemplateProps {
  content: string;
  contentComponent: any;
  date: string;
  tags: string[] | undefined;
  title: string;
  category: string;
  location: WindowLocation;
  isPreview?: boolean;
}

export default function RecipeTemplate({
  content,
  contentComponent,
  date,
  tags,
  title,
  category,
  location,
}: RecipeTemplateProps) {
  const PostContent = contentComponent || Content;
  const dateString = date ? `Publicerat ${date}` : '';

  return (
    <>
      <PageStyled>
        <RecipeBanner location={location} category={category}>
          <IntroText>
            <h1>Annas saftiga lussebullar med kesella</h1>
            {/* <h1>{title}</h1> */}
            {/* TODO: Minska textstorleken i mobil */}
          </IntroText>
        </RecipeBanner>
        <PostContainer>
          <PostStyled>
            <Metadata>
              <MetadataItem>
                <TimeIcon src={ClockSvg} alt="" />
                Tillagning: 30 min
              </MetadataItem>
              <MetadataItem>
                <TimeIcon
                  src={ClockWaitSvg}
                  alt=""
                  style={{ height: '1.4em' }}
                />
                Väntetid: 1 timme
              </MetadataItem>
              <MetadataItem>
                <TimeIcon src={ServingsSvg} alt="" />
                30 bullar
              </MetadataItem>
            </Metadata>
            <Description>
              Vårt mest populära recept på lussebullar med kesella i degen. Ger
              saftiga och hållbara lussebullar!
            </Description>
            <section>
              <h2>Du behöver:</h2>
              <h3>Annas saftiga lussebullar</h3>
              <ul>
                <li>50 g jäst</li>
                <li>5 dl standardmjölk</li>
                <li>150 g smör</li>
                <li>250 g kvarg</li>
                <li>2 dl strösocker</li>
                <li>1 g saffran [2 förp]</li>
                <li>1 tsk salt</li>
                <li>16 dl vetemjöl, ev lite mer</li>
                <li>russin</li>
              </ul>
              <h3>Pensling</h3>
              <ul>
                <li>1 ägg</li>
                <li>1 msk mjölk</li>
              </ul>
            </section>
            <section>
              <h2>Gör så här:</h2>
            </section>
            {/* <ol>
              <li>Description</li>
              <li>Image (if not default image)</li>
              <li>Cooking time</li>
              <li>Portions</li>
              <li>Ingredients</li>
              <li>Instructions</li>
              <li>Final text in markdown and possible embedded images</li>
            </ol> */}
            <PostContent content={content} />
            <RecipeTags tags={tags} />
          </PostStyled>
        </PostContainer>
      </PageStyled>
    </>
  );
}

const TimeIcon = styled('img')`
  height: 1.5em;
  margin-right: ${spacing.half};
`;

const Ingredients = styled('section')``;

const MetadataItem = styled('div')`
  display: flex;
  justify-content: flex-start;
`;

const Metadata = styled('section')`
  display: grid;
  grid-gap: ${spacing.half};
  grid-template-columns: auto;
  margin-bottom: ${spacing.default};

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: auto auto auto;
  }

  img:not(:first-child) {
    margin-left: ${spacing.default};
  }
`;

const Description = styled('div')``;

const PostDate = styled('div')`
  color: ${colors.postDate};

  @media (min-width: ${breakpoints.medium}) {
    transform: translateY(${spacing.postHeadingOffset});
  }
`;

const IntroText = styled('div')`
  color: ${colors.white};
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${spacing.default};
  padding-right: ${spacing.default};
  text-align: center;
`;
