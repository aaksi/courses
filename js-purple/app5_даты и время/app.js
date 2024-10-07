const user = {
  name: 'John',
  birthday: '07/22/2020',
}


function getBirthday(user) {
  const data = new Date()

  const nowDay = data.getUTCDate()
  const nowMonth = data.getUTCMonth()


  const userBirthday = new Date(user.birthday)
  const userBirthdayDay = userBirthday.getUTCDate() + 1
  const userBirthdayMonth = userBirthday.getUTCMonth()

  if (nowDay === userBirthdayDay && nowMonth === userBirthdayMonth) return true
  return false
}


console.log(getBirthday(user))
