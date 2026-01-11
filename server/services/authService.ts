import { eq } from 'drizzle-orm'
import { db } from '../db'
import { users } from '../db/schema'

// 极简返回值类型（仅为学员理解“返回结构”，非必须）
export type AuthResponse = {
  isSuccess: boolean;
  message: string;
  user?: { id: number; username: string };
}

// 注册用户（核心：展示“查→插”流程，极简报错）
export async function registerUser(username:string,password:string): Promise<AuthResponse> {
  try {
    const exists = await db.query.users.findFirst({
      where: eq(users.username, username)
    })
    if (exists) return { isSuccess: false, message: '已存在用户' }
    
    await db.insert(users).values({ username, password })
    return { isSuccess: true, message: '注册成功' }
  } catch (err) {
    console.log('注册出错了：', err) 
    return { isSuccess: false, message: '注册失败（看控制台找原因）' }
  }
}

// 登录用户（核心：展示“查→密码对比”流程，极简报错）
export async function loginUser(username:string,password:string): Promise<AuthResponse> {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.username, username)
    })
    if (!user) return { isSuccess: false, message: '没有这个用户' }
    if (password !== user.password) return { isSuccess: false, message: '错误密码' }
    
    return { isSuccess: true, message: '成功登录', user: { id: user.id, username: user.username } }
  } catch (err) {
    console.log('登录出错了：', err)
    return { isSuccess: false, message: '登录失败' }
  }
}

// 查询所有用户（核心：展示“查所有”流程，极简报错）
export async function getAllUsers() {
  try {
    return await db.query.users.findMany()
  } catch (err) {
    console.log('查用户出错了：', err)
    return [] // 失败返回空数组
  }
}
