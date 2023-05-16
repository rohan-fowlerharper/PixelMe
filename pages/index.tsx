import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { AddIcon, StarIcon } from '@chakra-ui/icons'
import { useColorScheme } from '../hooks/useColorScheme'

export default function Home() {
  const colorScheme = useColorScheme()
  return (
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
  )
}
