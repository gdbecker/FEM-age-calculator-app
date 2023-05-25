import React from 'react';
import ProjectCard from './components/ProjectCard';

 function Home() {
  return (
    <main className="flex flex-col gap-7 w-full p-10 items-center justify-between bg-white lg:grid lg:grid-cols-3">
      <ProjectCard 
        img_bg="bg-3-column-card"
        title="3-Column Preview Card Component"
        title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/3-column-card"
        level="1"
        demo_url="https://3-column-card-gdbecker.netlify.app"
        solution_url="https://www.frontendmentor.io/solutions/3column-card-with-nextjs-sass-voBV4ThwSG"
        brief_url="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-"
      />

      <ProjectCard 
        img_bg="bg-rating-component"
        title="Interactive Rating Component"
        title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/rating-component"
        level="1"
        demo_url="https://rating-component-gdbecker.netlify.app"
        solution_url="https://www.frontendmentor.io/solutions/rating-component-with-react-bootstrap-Tba__w3pRE"
        brief_url="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
      />
      
      <ProjectCard 
        img_bg="bg-nft-card"
        title="NFT Preview Card Component"
        title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/nft-card"
        level="1"
        demo_url="https://nft-card-gdbecker.netlify.app"
        solution_url="https://www.frontendmentor.io/solutions/nft-card-component-with-react-bootstrap-hiW4LJD-cc"
        brief_url="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"
      />
      
      <ProjectCard 
        img_bg="bg-qr-code"
        title="QR Code Component"
        title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/qr-code"
        level="1"
        demo_url="https://qr-code-gdbecker.netlify.app"
        solution_url="https://www.frontendmentor.io/solutions/qr-code-component-hosted-on-netlify-rwLGIUAbUi"
        brief_url="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
      />

      <ProjectCard 
        img_bg="bg-news-homepage"
        title="News Homepage"
        title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/news-homepage"
        level="2"
        demo_url="https://news-homepage-gdbecker.netlify.app"
        solution_url="https://www.frontendmentor.io/solutions/news-homepage-with-react-bootstrap-tkackbvjn1"
        brief_url="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl"
      />
    </main>
  )
}

export default Home;
