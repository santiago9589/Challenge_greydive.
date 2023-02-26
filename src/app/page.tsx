import { api } from 'api/api';
import BodyHome from 'components/HomeComponent/BodyHome';


async function getData() {
  const res = await api.list()
  return res;
}


const Home = async () => {

  const data = await getData();

  return (
    <>
      <BodyHome data={data} />
    </>
  )
}

export default Home
