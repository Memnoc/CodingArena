// some callback examples
// to make callback hell real

function make_request(url, callback) {
  // make netwrok request
  callback(null, response)
}
function make_request_two(url, callback) {
  // make netwrok request
  callback(null, response)
}
function make_request_three(url, callback) {
  // make netwrok request
  callback(null, response)
}

// if we need to use this mess to make three network requests

make_request('http://example.com/1', (error, data1) => {
  if (error) {
    console.error(error)
    return
  }
  make_request_two('http://example.com/2', (error, data2) => {
    if (error) {
      console.error(error)
      return
    }
    make_request_three('http://example.com/3', (error, data3) => {
      if (error) {
        console.error(error)
        return
      }
      // do something with data1, data2, data3
    })
  })
})
