const sortRepos = repos => {
  return repos
    .sort((a, b) => {
      var indexA = a.name.toUpperCase()
      var indexB = b.name.toUpperCase()
      if (indexA < indexB) {
        return -1
      }
      if (indexA > indexB) {
        return 1
      }
      return 0
    })
    .sort((a, b) => {
      if (a.issues.totalCount < b.issues.totalCount) {
        return 1
      }
      if (a.issues.totalCount > b.issues.totalCount) {
        return -1
      }
      return 0
    })
}

export default sortRepos
