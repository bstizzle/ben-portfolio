import { useRouter } from 'next/router';

const PortfolioDetail = () => {

  const router = useRouter();
  const id = router.query.id;

  return(
    <h1>detail page with ID: {id}</h1>
  )
}

export default PortfolioDetail;