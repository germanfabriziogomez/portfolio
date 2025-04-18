import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import AboutMe from './components/about-me/AboutMe'
import Contact from './components/contact/Contact'
import Layout from './components/layout/Layout'

const rutas = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/', element: <Home />
			},
			{
				path: '/about-me', element: <AboutMe />
			},
			{
				path: '/projects', element: <Projects />
			},
			{
				path: '/contact', element: <Contact />
			},
			
		]
	}

])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={rutas} />
	</StrictMode>
)
