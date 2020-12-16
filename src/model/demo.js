import User from './test'

// add
const user = {
  name: 'lilei',
  age: 18,
  email: 'lilei@qq.com'
}

const insertMethods = async () => {
  const data = new User(user)
  const res = await data.save()
  console.log(res)
}

// find
const findMethod = async () => {
  const res = await User.find()
  console.log(res)
}

// update
const updateMethod = async () => {
  const res = await User.updateOne({ name: 'lilei' }, {
    age: 28
  })
  console.log(res)
}


// delete
const deleteMethod = async () => {
  const res = await User.deleteOne({ name: 'chenpeng' })
  console.log(res)
}

deleteMethod()