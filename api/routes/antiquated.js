router.get("/ladder/:name",  async function (req, res, next) {

  let ladderName;
  if (req.params.name === 'standard') {
    ladderName = 'Heist'
  } else if (req.params.name === 'hardcore') {
    ladderName = 'Hardcore%20Heist'
  }

  let todaysLadder = await getTodaysLadder(db, req.params.name);

  if (!todaysLadder) {
    console.log('fetching fresh ladder...')

  axios.get(`https://www.pathofexile.com/api/ladders/${ladderName}?limit=50&type=league`)
  .then( async (result) => {
    const ladder_id = await saveLadder(db, req.params.name, CircularStructureStringify(result.data))

    return await saveCharacters(db, result.data.entries, ladder_id)

  }).then( async (result) => {

    todaysLadder = await getTodaysLadder(db, req.params.name)

    const characters = await fetchLadderCharacters(db, todaysLadder)
    res.send(CircularStructureStringify(characters))
  })
  .catch((err) =>{
    console.log(err)
    res.status(403).send('something wrong with ur URL')
  })
  
} else {
  const characters = await fetchLadderCharacters(db, todaysLadder)
  res.send(CircularStructureStringify(characters))
}
});
