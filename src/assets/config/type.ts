/*
 * @Author: Ada J
 * @Date: 2023-09-22 17:35:48
 * @LastEditTime: 2023-09-25 20:59:58
 * @Description: 
 */
export type Item = {
  id: string,
  parentId: string,
  name: string,
  url: string,
  isExternal?: boolean,
  time: string,
  date: string,
  category: string 
}
export type Category = {
  id: string,
  name: string,
  active: boolean
}