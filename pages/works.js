import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBot from '../public/images/bot.png'
import thumbPhotoList from '../public/images/photo-list.png'
import thumbStreamFinder from '../public/images/stream-finder.png'
import thumbManga from '../public/images/manga.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="photo-grid"
            title="Gunpla Photo List"
            thumbnail={thumbPhotoList}
            url={'https://photo-list-mui.vercel.app/'}
          >
            Photo gallery that showcases my photographs with grid-based layout 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="cangjie"
            title="Cangjie Input Query Bot"
            thumbnail={thumbBot}
            url={'https://github.com/ympang/cangjie-input-query-bot/'}
          >
            Telegram bot that functions as a Cangjie dictionary
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="manga"
            title="Manga List"
            thumbnail={thumbManga}
            url={'https://track-manga.onrender.com/'}
          >
            A full stack website to keep track of manga update daily
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="stream-finder"
            title="Stream Finder"
            thumbnail={thumbStreamFinder}
            url={'https://stream-movie-search.vercel.app/'}
          >
            A website to find where to watch movie and tv shows
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbBot} title="Margelo" url={""}>
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="modetokyo" thumbnail={thumbBot} title="mode.tokyo" url={""}>
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
// export { getServerSideProps } from '../components/chakra'
