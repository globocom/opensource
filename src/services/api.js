const getUser = async () => {
  return {
    ID: 'arturfelipe.sousa@gmail.com',
    Name: 'Artur Felipe Sousa',
    Email: 'arturfelipe.sousa@gmail.com',
    State: '',
    City: '',
    Address: '',
    PostalCode: '',
    AvatarURL: 'https://avatars0.githubusercontent.com/u/1333599?v=4',
    GithubUser: 'arturfsousa',
    GithubID: 1333599,
    CreatedAt: '2018-10-24T04:02:52.412Z',
  }

  let resp

  try {
    resp = await fetch('/user')
  } catch (error) {
    console.error('[OPENSOURCE] Fail to fetch', error)
  }

  if (resp.status !== 200) {
    return null
  }

  const data = await resp.json()
  return data.result
}

export { getUser }
