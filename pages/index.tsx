import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { AddIcon, StarIcon } from '@chakra-ui/icons'
import { useColorScheme } from '../hooks/useColorScheme'

export default function Home() {
  const colorScheme = useColorScheme()
  return (
    <Flex justify='space-evenly'>
      <Link href='/new' passHref>
        <Button as='a' colorScheme={colorScheme} leftIcon={<AddIcon />}>
          New Drawing
        </Button>
      </Link>
      <Link href='/from-template' passHref>
        <Button as='a' colorScheme={colorScheme} leftIcon={<StarIcon />}>
          From A Template
        </Button>
      </Link>
    </Flex>
  )
}
