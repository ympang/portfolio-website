import { Container, Box, Heading, Image, useColorModeValue, SimpleGrid, List, ListItem, Button, Icon } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import Link from "next/link"
import Layout from "../components/layouts/article"
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import thumb from '../public/images/Alice.png'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I am a full stack developer
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Alice Pang
                        </Heading>
                        <p>developer</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image src="/images/Alice.png"
                            borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Paragraph</Paragraph>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1996</BioYear>
                        Born in Hong Kong
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Gunpla,{' '}
                        <Link href="https://500px.com/p/craftzdog" target="_blank">
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
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}></Icon>}>
                                    github
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}></Icon>}>
                                    twitter
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        <GridItem
                            href="https://google.com"
                            title="CV"
                            thumbnail={thumb}
                        >
                            Download my resume
                        </GridItem>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page