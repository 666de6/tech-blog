/*
 * @Author: Ada J
 * @Date: 2023-09-11 20:56:25
 * @LastEditTime: 2024-01-21 22:35:11
 * @Description: 
 */
import { type Category, type Item  } from "./type";
import { newId } from ".";
export const categoryList: Category[] = [
  {
    id: 'learning',
    name: 'learning',
    active: true,
    navId: 'blog'
  }
]
export const blogList: Record<string, Item[]> =  {
  learning: [
    {
      id: newId(),
      parentId: 'learning',
      name: 'My 6-Step Strategy to Learn New Technology.',
      url: '/blogs/tech/how_to_learn.md',
      time: '2min',
      date: 'Jan 21 2024',
      category: 'blog'
    }
  ]
}


