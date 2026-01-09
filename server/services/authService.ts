import { eq } from 'drizzle-orm'
import { db } from '../db'
import { users } from '../db/schema'

export async function registerUser(username:string,password:string) {
  const exists = await db.query.users.findFirst({
    where:eq(users.username,username)
  })
  if (exists)
    return { isSuccess:false, message:'已存在用户' }
  await db.insert(users).values({
    username:username,
    password:password
  })
}

export async function loginUser(username:string,password:string) {
  const user = await db.query.users.findFirst({
    where: eq(users.username,username)
  })
  if (!user)
    return { isSuccess:false,message:'没有这个用户' }
  if (password !== user.password)
    return { isSuccess:false,message:'错误密码' }
  return {
    isSuccess:true,
    message:'成功登录',
    user:{
      id:user.id,
      username:user.username
    }
  }
}

export async function getAllUsers() {
  return db.query.users.findMany()
}

