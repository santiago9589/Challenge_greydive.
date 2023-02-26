import { api } from 'api/api';
import ErrorComponent from 'components/ErrorComponent/ErrorComponent';
import BodyHome from 'components/HomeComponent/BodyHome';
import NavbarComponent from 'components/navbar/navbarComponen';


async function getData() {
  const res = await api.list()
  return res;
}


const Home = async () => {

  const data = await getData();

  return (
    <>
      <BodyHome data={data.data} />
      {
        data.error && (<ErrorComponent error={data.error} />)
      }
    </>
  )
}

export default Home
