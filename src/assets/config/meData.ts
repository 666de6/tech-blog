/*
 * @Author: Ada J
 * @Date: 2023-09-11 20:56:25
 * @LastEditTime: 2023-10-14 21:38:46
 * @Description: 
 */
import { type Category, type Item  } from "./type";
export const categoryList: Category[] = [
  {
    id: 'resume',
    name: 'Ada Jiang',
    active: false
  },
]
export const blogList: Record<string, Item[]> =  {
  resume: [
    {
      id: '1',
      parentId: 'resume',
      name: 'My resume.',
      url: '/blogs/me.md',
      time: '',
      date: '',
      category: 'me'
    },
    {
      id: '2',
      parentId: 'resume',
      name: 'My hobbies.',
      url: '/blogs/hobbies.md',
      time: '',
      date: '',
      category: 'me'
    }
  ],

}