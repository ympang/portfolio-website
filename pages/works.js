import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBot from '../public/images/bot.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbBot} url={""}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="cangjie"
            title="Cangjie Input Query Bot"
            thumbnail={thumbBot}
            url={"https://github.com/ympang/cangjie-input-query-bot/"}
          >
            Telegram bot that functions as a Cangjie dictionary
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
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
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
// export { getServerSideProps } from '../components/chakra'
