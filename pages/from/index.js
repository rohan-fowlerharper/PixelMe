import Editor from '../../components/Editor'
import { nyanCat } from '../../data'


const FromTemplate = () => {
  return (
    // todo: add breadcrumbs and home button
    // todo: add fetch data from server and pass as template
    <Editor template={nyanCat} />
  )
}

export default FromTemplate
