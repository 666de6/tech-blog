/*
 * @Author: Ada J
 * @Date: 2023-09-11 20:56:25
 * @LastEditTime: 2024-01-21 22:35:11
 * @Description: 
 */
import { type Category, type Item  } from "./type";
export const categoryList: Category[] = [
  {
    id: 'working-project',
    name: 'For work',
    active: true
  },
  {
    id: 'learning-project',
    name: 'For learn',
    active: false
  },
  {
    id: 'fun-project',
    name: 'For fun',
    active: false
  },
   
]
export const blogList: Record<string, Item[]> =  {
  'working-project': [
    {
      id: '1',
      parentId: 'working-project',
      name: 'Xuyao mini-app.',
      url: '/blogs/project/xuyao.md',
      time: '',
      date: '',
      category: 'project'
    },
    {
      id: '3',
      parentId: 'working-project',
      name: 'Frontend Note.',
      url: 'https://ada-frontend-note.netlify.app/',
      isExternal: true,
      time: '',
      date: '',
      category: 'project'
    },
    {
      id: '4',
      parentId: 'working-project',
      name: 'DHC-UI.',
      url: '/blogs/dhc-ui.md',
      time: '',
      date: '',
      category: 'project'
    },
  ],
  'learning-project': [
    {
      id: '1',
      parentId: 'learning-project',
      name: 'Blog Website(full stack with Appwrite).',
      url: 'https://github.com/666de6/react-with-appwrite',
      isExternal: true,
      time: '',
      date: '',
      category: 'project'
    },
    {
      id: '2',
      parentId: 'learning-project',
      name: 'Online Course.',
      url: '/blogs/online-course.md',
      time: '',
      date: '',
      category: 'project'
    },
  ],
  'fun-project': [
    {
      id: '1',
      parentId: 'fun-project',
      name: 'Ming Grapher.',
      url: 'https://github.com/666de6/mind-grapher',
      isExternal: true,
      time: '',
      date: '',
      category: 'project'
    },
    {
      id: '2',
      parentId: 'fun-project',
      name: 'Terminal Flashcard.',
      url: '/blogs/terminal-card.md',
      time: '',
      date: '',
      category: 'project'
    }

  ]



}
