import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  SimpleGrid,
  List,
  ListItem,
  Button,
  Icon,
  Tag,
  TagLabel,
  Center,
  HStack
} from '@chakra-ui/react'
import Section from '../components/section'
import { Paragraph } from '../components/paragraph'
import { BioSection, BioYear, BioCompany, BioDetail } from '../components/bio'
import Link from 'next/link'
import Layout from '../components/layouts/article'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import thumb from '../public/images/Alice.png'
import Footer from '../components/footer'
import { SkillGridItem } from '../components/grid-item'
import backend from '../public/images/backend.png'
import frontend from '../public/images/ui-design.png'
import database from '../public/images/database-storage.png'
import container from '../public/images/crane.png'
import { TimeLine } from '../components/timeline'

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md" pt={14}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I am Alice Pang
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Alice Pang
            </Heading>
            <p>Skilled in backend development</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              src="/images/laptop.png"
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
            />
          </Box>
        </Box>
        <Center>
          <Button
            w={{ base: '50%', md: '30%' }} // set width for mobile and desktop
            colorScheme="teal"
          >
            Download my resume
          </Button>
        </Center>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <SkillGridItem id="margelo" thumbnail={backend} title="Backend">
              Java (Spring Boot), Python, C# (.NET Framework)
            </SkillGridItem>
          </Section>
          <Section delay={0.2}>
            <SkillGridItem id="modetokyo" thumbnail={frontend} title="Frontend">
              Next.js (Semantic UI, Formik)
            </SkillGridItem>
          </Section>
          <Section delay={0.3}>
            <SkillGridItem id="database" thumbnail={database} title="Database">
              SQL(MySQL, Presto), NoSQL(Elastic Search)
            </SkillGridItem>
          </Section>
          <Section delay={0.3}>
            <SkillGridItem id="others" thumbnail={container} title="Others">
              AliCloud, Kubernetes, Docker, Git
            </SkillGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience and Education
          </Heading>
          <TimeLine />
          {/* <HStack spacing={4}>
                        {['sm', 'md', 'lg'].map((size) => (
                            <Tag size={size} key={size} variant='solid' colorScheme='teal'>
                                <BioDetail>Teal</BioDetail>
                            </Tag>
                        ))}
                    </HStack> */}
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            <Link href="https://photo-list-mui.vercel.app/" target="_blank">
              Gunpla
            </Link>
            {', '}
            <Link href="https://photo-list-mui.vercel.app/" target="_blank">
              Photography
            </Link>
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub}></Icon>}
                >
                  github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter}></Icon>}
                >
                  twitter
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Page
