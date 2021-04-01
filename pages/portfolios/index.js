import { useState } from 'react';
import axios from 'axios';
import PortfolioCard from '@/components/portfolios/PortfolioCard';
import Link from 'next/link';

const fetchPortfolios = () => {
  const query = `
    query Portfolios {
      portfolios {
        _id
        title
        company
        companyWebsite
        location
        jobTitle
        description
        startDate
        endDate
      }
    }`;
  return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.portfolios)
}

const graphCreatePortfolio = () => {
  const query = `
    mutation CreatedPortfolio {
      createPortfolio(input: {
        title: "new job"
        company: "new company"
        companyWebsite: "new website"
        location: "new location"
        jobTitle: "new job title"
        description: "new desc"
        startDate: "12/12/2012"
        endDate: "11/14/2013"
      }) {
        _id
        title
        company
        companyWebsite
        location
        jobTitle
        description
        startDate
        endDate
      }
    }`;
  return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.createPortfolio)
}

const graphUpdatePortfolio = (id) => {
  const query = `
    mutation UpdatePortfolio {
      updatePortfolio(id: "${id}", input: {
        title: "updated job"
      }) {
        _id
        title
        company
        companyWebsite
        location
        jobTitle
        description
        startDate
        endDate
      }
    }`;
  return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.updatePortfolio)
}

const Portfolios = ({ data }) => {
  const [portfolios, setPortfolios] = useState(data.portfolios);

  const createPortfolio = async () => {
    const newPortfolio = await graphCreatePortfolio();
    const newPortfolios = [...portfolios, newPortfolio];
    setPortfolios(newPortfolios);
  }

  const updatePortfolio = async (id) => {
    const updatedPortfolio = await graphUpdatePortfolio(id);
    const index = portfolios.findIndex(p => p._id === id);
    const updatedPortfolios = portfolios.slice();
    updatedPortfolios[index] = updatedPortfolio;
    setPortfolios(updatedPortfolios);
  }

  return(
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
        <button 
          onClick={createPortfolio}
          className="btn btn-primary">Create Portfolio</button>
      </section>
      <section className="pb-5">
        <div className="row">
          {portfolios.map(portfolio =>
            <div key={portfolio._id} className="col-md-4">
              <Link
                href='/portfolios/[id]'
                as={`/portfolios/${portfolio._id}`}>
                <a className="card-link">
                  <PortfolioCard portfolio={portfolio} />
                </a>
              </Link>
              <button
                className="btn btn-secondary" 
                onClick={() => updatePortfolio(portfolio._id)}>Update</button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

Portfolios.getInitialProps = async () => {
  const portfolios = await fetchPortfolios();
  return { data: {portfolios} };
}

export default Portfolios;