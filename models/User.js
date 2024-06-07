import db from '../db/index.js'

class User {
  static async findAll() {
    const query = `
      select id, username, firstName, lastName, email, avatar 
      from users
    `
    const results = await db.raw(query)
    return results
  }

  static async findById(id) {
    const query = `
      select id, username, firstName, lastName, email, avatar 
      from users
      where id = ?
    `
    const [result] = await db.raw(query, [id])
    return result
  }

  static async create(payload) {
    const query = `
      insert into users (username, firstName, lastName, email, avatar, password)
      values (?, ?, ?, ?, ?, ?)
      returning *
    `

    const [result] = await db.raw(query, [
      payload.username,
      payload.firstName,
      payload.lastName,
      payload.email,
      payload.avatar,
      payload.password
    ])

    return result
  }
}

export default User
