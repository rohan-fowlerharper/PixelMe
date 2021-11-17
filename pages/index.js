import { Button, Flex } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from 'next/router'
import { AddIcon, StarIcon } from '@chakra-ui/icons'

export default function Home() {
  // todo: implement router hook with links - learn more how to do this too
  const router = useRouter()
  return (
    <>
    {/* TODO: add simple navigation to new and from template pages */}
      <Flex justify="space-evenly">
        <Button colorScheme="pink" leftIcon={<AddIcon />}>
          <Link href="/new"><a>New</a></Link>
        </Button>
        <Button colorScheme="pink" leftIcon={<StarIcon />}>
          <Link href="/from"><a>From Template</a></Link>
        </Button>
      </Flex>
    </>
  )
}
