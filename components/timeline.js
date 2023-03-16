import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Text, Tag, HStack } from '@chakra-ui/react'
import 'react-vertical-timeline-component/style.min.css';
import { ExpParagraph } from '../components/paragraph'

export const TimeLine = () => (
    <VerticalTimeline layout='1-column-left'>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(82, 82, 82, 255)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgba(82, 82, 82, 255)' }}
            date="Mar 2022 - Present"
            iconStyle={{ background: 'rgba(82, 82, 82, 255)', color: '#fff' }}
        >
            <Text fontSize='xl' as='b'>Engineer</Text><br />
            <Text fontSize='lg' as='b'>South China Morning Post</Text>
            <ExpParagraph>Revamp Applications with Java Spring Boot, Next.js and MySQL</ExpParagraph>
            <ExpParagraph>Develop Airflow Dags with Python to integrate data to data warehouse system</ExpParagraph>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: '#000' }}
            date="Sep 2021 - Feb 2022"
            iconStyle={{ background: 'rgba(82, 82, 82, 255)', color: '#fff' }}
        >
            <Text fontSize='xl' as='b'>Senior Programmer</Text><br />
            <Text fontSize='lg' as='b'>DBS Bank (Hong Kong) Limited</Text>
            <p>Assist the project team in programming with Angular and Java to work for internal pojects</p>
            <p>Conduct UAT with users</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: '#000' }}
            date="Sep 2020 - Sep 2021"
            iconStyle={{ background: 'rgba(82, 82, 82, 255)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <Text fontSize='xl' as='b'>Software Engineer I</Text><br />
            <Text fontSize='lg' as='b'>Openrice Limited</Text>
            <p>Develop and maintain API using C#, MS SQL Server, MongoDB and Redis for internal and third-party application</p>
            <p>Develop Telegram bot for internal use and iOS push notification program with Python</p>
            <p>Work with RESY to develop booking API integration</p>
            <p>Work with support cases</p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: '#000' }}
            date="July 2019 - Aug 2020"
            iconStyle={{ background: 'rgba(82, 82, 82, 255)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <Text fontSize='xl' as='b'>Associate Software Engineer</Text><br />
            <Text fontSize='lg' as='b'>Thales Transport & Security (Hong Kong) Ltd</Text>
            <p>Work to develop Integrated Communications and Supervision Systems for railways</p>
            <p>Implement IO data to develop and maintain SCADA (Database)</p>
            <p>Perform integration test and configuration</p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: '#000' }}
            date="2016 - 2019"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
        >
            <Text fontSize='xl' as='b'>BEng in Computer Science</Text><br />
            <Text fontSize='lg' as='b'>The Hong Kong University of Science and Technology</Text>
            <p>CGPA: 3.164</p>
        </VerticalTimelineElement>
    </VerticalTimeline>
)