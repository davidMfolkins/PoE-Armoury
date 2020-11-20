const getLadder = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT rankings FROM ladders', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}