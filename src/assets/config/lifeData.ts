/*
 * @Author: Ada J
 * @Date: 2023-09-11 20:56:25
 * @LastEditTime: 2023-10-14 21:38:46
 * @Description: 
 */
import { type Category, type Item  } from "./type";
export const categoryList: Category[] = [
  {
    id: 'slow',
    name: 'Slow Living',
    active: false
  },
  // {
  //   id: 'mini',
  //   name: 'Minimalism',
  //   active: true
  // },
]
export const blogList: Record<string, Item[]> =  {
  slow: [
    {
      id: '1',
      parentId: 'slow',
      name: 'I quit.',
      url: '/blogs/slow-living/I_quit.md',
      time: '',
      date: 'Sep 15,2023',
      category: 'life'
    },
    {
      id: '2',
      parentId: 'slow',
      name: 'Just for today.',
      url: '/blogs/slow-living/just_for_today.md',
      time: '',
      date: 'Mar 19,2024',
      category: 'life'
    },
    {
      id: '3',
      parentId: 'slow',
      name: 'After a 7-month career break...',
      url: '/blogs/slow-living/after_a_7m_career_break.md',
      time: '',
      date: 'Apr 4,2024',
      category: 'life'
    },
  ],
  // mini: [
  //   {
  //     id: '1',
  //     parentId: 'mini',
  //     name: 'Minimalism',
  //     url: '',
  //     time: '2min',
  //     date: 'Sep 11',
  //     category: 'life'
  //   }
  // ],
}