import { Button, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { AddIcon, StarIcon } from '@chakra-ui/icons'
import { useColorScheme } from '../hooks/useColorScheme'
import Head from 'next/head'

export default function Home() {
  const colorScheme = useColorScheme()
  const textDarkness = useColorModeValue('900', '100')

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Express yourself 🖼️ and take a break from the hustling business of life. Pixels is a small web application where you can draw on a paint-by-numbers canvas ft. Nyan Cat 🏳️‍🌈😼'
        />
        <title>Pixels</title>
      </Head>
      <Flex justify='center' align='center' direction='column' mb={12}>
        <Heading
          as='h1'
          fontSize='9xl'
          fontFamily='mono'
          textTransform='uppercase'
          fontWeight={900}
          letterSpacing='tighter'
          lineHeight='none'
          color={`${colorScheme}.${textDarkness}`}
        >
          Pixels
        </Heading>
        <Heading
          as='h2'
          opacity={0.4}
          textTransform='uppercase'
          fontSize='xl'
          alignSelf='right'
          color={`${colorScheme}.${textDarkness}`}
        >
          Paint By Numbers
        </Heading>
      </Flex>
      <Flex justify='center' gap={8}>
        <Button
          as={Link}
          href='/new'
          colorScheme={colorScheme}
          leftIcon={<AddIcon />}
        >
          New Drawing
        </Button>
        <Button
          as={Link}
          href='/from-template'
          colorScheme={colorScheme}
          leftIcon={<StarIcon />}
        >
          From A Template
        </Button>
      </Flex>
    </>
  )
}
