import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { AddIcon, StarIcon } from '@chakra-ui/icons'
import { useColorScheme } from '../hooks/useColorScheme'
import Head from 'next/head'

export default function Home() {
  const colorScheme = useColorScheme()

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Express yourself 🖼️ and take a break from the hustling business of life. Pixels is a small web application where you can draw on a paint-by-numbers canvas ft. Nyan Cat 🏳️‍🌈😼'
        />
        <title>Pixels</title>
      </Head>
      <Flex justify='space-evenly'>
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
