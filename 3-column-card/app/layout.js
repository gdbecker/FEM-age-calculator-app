import './styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Frontend Mentor | 3-Column Preview Card Component',
  description: 'Solution for this challenge!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}

        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Garrett Becker</a>.
        </div>
      </body>
    </html>
  )
}