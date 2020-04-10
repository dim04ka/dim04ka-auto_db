const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values) => {
  return sleep(1000).then(() => {
    
    if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
      // eslint-disable-next-line no-throw-literal
      throw { email: 'Email already Exists' }
    }
  })
}