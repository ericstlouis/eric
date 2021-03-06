import {Head, Work, Nav, Footer} from '../components'
import { supabase } from '../utils/client'

export async function getStaticProps(context) {
  const { data, error } = await supabase.from('Portfolio-Projects').select('*');
  if(error) {
    throw new Error(error)
  }
  return{
    props: {
      data
    }
  }
}
export default function Home({data}) {
  console.log(data)
  return (
    <div>
      <Nav />
      <Head />
      <Work projects={data}  />
      <Footer />
    </div>
  )
}
