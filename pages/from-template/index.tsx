import Head from 'next/head'
import Editor from '../../components/Editor'
import { nyanCat } from '../../data'

export default function FromTemplate() {
  return (
    <>
      <Head>
        <title>Pixels | From Template</title>
      </Head>
      <Editor template={nyanCat} />
    </>
  )
}
