import React from 'react'
import Link from 'next/link'

function ProjectCard({ alpha2Code, img_url, name, population, region, capital }) {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Link 
      href={{
        pathname: `/${alpha2Code}` ,
        // query: {
        //   demo_url: `${demo_url}`,
        //   title: `${title}`,
        //   code_url: `${code_url}`,
        //   type: `${type}`,
        // }
      }}
      className="flex w-full max-h-fit flex-col rounded-md overflow-hidden bg-white shadow-md dark:bg-darkBlue">
      <div 
        className="flex flex-row h-40 bg-no-repeat bg-cover bg-center"
        style={{backgroundImage: `url(${img_url})`}}></div>
      <div className="flex flex-col p-7 text-veryDarkBlue-Light dark:text-white">
        <h1 className="text-md font-nunitoSansExtraBold mb-4">{name}</h1>
        <p className="text-sm font-nunitoSansSemiBold mb-1">Population: <span className="font-nunitoSansLight">{numberWithCommas(population)}</span></p>
        <p className="text-sm font-nunitoSansSemiBold mb-1">Region: <span className="font-nunitoSansLight">{region}</span></p>
        <p className="text-sm font-nunitoSansSemiBold mb-1">Capital: <span className="font-nunitoSansLight">{capital}</span></p>
      </div>
    </Link>
  )
}

export default ProjectCard;