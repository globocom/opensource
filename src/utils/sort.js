const sortRepos = (repos, field = 'stargazers') => {
  return repos.sort((a, b) => {
    const totalA = a[field].totalCount
    const totalB = b[field].totalCount
    return totalB - totalA
  })
}

export default sortRepos
