import { getValue, setValue, getHValue, delValue } from './RedisConfig'

setValue('chenpeng', 'chenpeng connect redis successful!')

getValue('chenpeng').then((res) => {
  console.log(res)
})

delValue('chenpeng')

setValue('hsetTest', { name: 'chenpeng', age: 18 })

getHValue('hsetTest').then((res) => {
  console.log('hsetTest:' + JSON.stringify(res));
})