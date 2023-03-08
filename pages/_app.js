import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
// import Chakra from '../components/chakra'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}></Layout>
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
    // <Chakra cookies={pageProps.cookies}>
    //   <Fonts />
    //   <Layout router={router}>
    //   </Layout>
    // </Chakra>
  )
}

export default Website