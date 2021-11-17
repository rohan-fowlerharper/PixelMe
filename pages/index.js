import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { AddIcon, StarIcon } from '@chakra-ui/icons'

export default function Home() {
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
