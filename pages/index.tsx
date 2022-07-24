import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { AddIcon, StarIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <Flex justify='space-evenly'>
      <Button colorScheme='pink' leftIcon={<AddIcon />}>
        <Link href='/new'>
          <a>New</a>
        </Link>
      </Button>
      <Button colorScheme='pink' leftIcon={<StarIcon />}>
        <Link href='/from'>
          <a>From Template</a>
        </Link>
      </Button>
    </Flex>
  )
}
