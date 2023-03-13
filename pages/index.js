import { Container, Box, Heading, Image, useColorModeValue, SimpleGrid, List, ListItem, Button, Icon } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear, BioCompany, BioDetail } from "../components/bio"
import Link from "next/link"
import Layout from "../components/layouts/article"
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import thumb from '../public/images/Alice.png'
import Footer from "../components/footer"
import {
    Tag,
    TagLabel,
    HStack
} from '@chakra-ui/react'

const Page = () => {
    return (
        <Layout>
            <Container maxW="container.md" pt={14}>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I am Alice Pang
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Alice Pang
                        </Heading>
                        <p>Skilled in backend development</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image src="/images/Alice.png"
                            borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Skills
                    </Heading>
                    <Paragraph>Programming:</Paragraph>
                    <Paragraph>Java (Spring Boot), Python, C# (.NET Framework), SQL(MySQL, Presto), NoSQL(Elastic Search)</Paragraph>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Experience
                    </Heading>
                    <BioSection>
                        <BioYear>Mar 2022 - Present</BioYear>
                        <BioCompany>Engineer, South China Morning Post</BioCompany><br></br>
                        Revamp Applications with Java Spring Boot, Next.js and MySQL<br></br>
                        Develop Airflow Dags with Python to integrate data to data warehouse system<br></br>
                        {/* <HStack spacing={4}>
                            {['sm', 'md', 'lg'].map((size) => (
                                <Tag size={size} key={size} variant='solid' colorScheme='teal'>
                                    <BioDetail>Teal</BioDetail>
                                </Tag>
                            ))}
                        </HStack> */}
                        <Tag size='lg' variant='solid' colorScheme='teal'>
                                    <BioDetail>Java Spring Boot</BioDetail>
                                </Tag>
                    </BioSection>
                    <BioSection>
                        <BioYear>Sep 2021 - Feb 2022</BioYear>
                        <BioCompany>Senior Programmer, DBS Bank (Hong Kong) Limited</BioCompany><br></br>
                        Assist the project team in programming with Angular and Java to work for internal pojects<br></br>
                        Conduct UAT with users
                    </BioSection>
                    <BioSection>
                        <BioYear>Sep 2020 - Sep 2021</BioYear>
                        <BioCompany>Software Engineer I, Openrice Limited</BioCompany><br></br>
                        Develop and maintain API using C#, MS SQL Server, MongoDB and Redis for internal and third-party application<br></br>
                        Develop Telegram bot for internal use and iOS push notification program with Python<br></br>
                        Work with RESY to build booking API integration<br></br>
                        Work with support cases<br></br>
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
                <Footer />
            </Container>
        </Layout>
    )
}

export default Page