import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
// import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  > svg {
    transition: 200ms ease;
  }
  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {

    const footPrintImg = '/images/laptop.png';
    // const footPrintImg = `/images/Alice${useColorModeValue('','-dark')}.png`

    return (
        (<Link href="/" scroll={false}>

            <LogoBox>
                {/* <FootprintIcon /> */}
                <Image src={footPrintImg} width={25} height={25} alt="logo"></Image>
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c", sans-serif'
                    fontWeight="bold"
                    ml={3}
                >
                    Alice Pang
                </Text>
            </LogoBox>

        </Link>)
    );
}

export default Logo