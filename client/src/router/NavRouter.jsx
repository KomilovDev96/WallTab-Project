import { AboutPage, BlogPage, CatalogPage, ContactPage } from "../pages";


export const NavRouter = [
    { id: 1, title: 'About us', path: '/about', element: <AboutPage /> },
    { id: 2, title: 'Contact us', path: '/contact', element: <ContactPage /> },
    { id: 3, title: 'Blog', path: '/blog', element: <BlogPage /> },
    { id: 4, title: 'Catalog', path: '/catalog', element: <CatalogPage /> },
    { id: 5, title: 'Notfound', path: '*', element: <>404</> },
]

