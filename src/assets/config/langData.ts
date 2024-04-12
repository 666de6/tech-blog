/*
 * @Author: Ada J
 * @Date: 2023-09-11 20:56:25
 * @LastEditTime: 2023-10-03 19:08:33
 * @Description: 
 */
import { type Category, type Item  } from "./type";
export const categoryList: Category[] = [
  {
    id: 'en',
    name: 'English',
    active: true
  },
  {
    id: 'jp',
    name: 'Japanese',
    active: false
  }
]
export const blogList: Record<string, Item[]> =  {
  en: [
    {
      id: '1',
      parentId: 'en',
      name: 'english learning.',
      url: '',
      time: '2min',
      date: 'Sep 11',
      category: 'lang'
    }
  ],
  jp: [
    {
      id: '2',
      parentId: 'jp',
      name: 'Japanese learning.',
      url: '',
      time: '2min',
      date: 'Sep 11',
      category: 'lang'
    }
  ]
}