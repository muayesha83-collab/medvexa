import { createBrowserRouter } from 'react-router'
import Root          from './layouts/Root'
import Home          from './pages/Home'
import About         from './pages/About'
import Services      from './pages/Services'
import Work          from './pages/Work'
import ProjectDetail from './pages/ProjectDetail'
import Research      from './pages/Research'
import ResearchProject from './pages/ResearchProject'
import Blog          from './pages/Blog'
import BlogArticle   from './pages/BlogArticle'
import Contact       from './pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true,                Component: Home          },
      { path: 'about',              Component: About         },
      { path: 'services',           Component: Services      },
      { path: 'work',               Component: Work          },
      { path: 'work/:id',           Component: ProjectDetail },
      { path: 'research',           Component: Research      },
      { path: 'research/:id',       Component: ResearchProject },
      { path: 'blog',               Component: Blog          },
      { path: 'blog/:id',           Component: BlogArticle   },
      { path: 'contact',            Component: Contact       },
    ],
  },
])
