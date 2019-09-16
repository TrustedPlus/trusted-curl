const { Curl } = require('../../dist')

const curl = new Curl()
const url = 'https://testca2012.cryptopro.ru/ui/api/b1ca4992-d7cd-4f7e-b56e-a81e00db58ee/regrequest'

const data = {
  "Comment": "3",
  "Description": "2",
  "Email": "me@cp.ru",
  "KeyPhrase": "1",
  "OidArray": [
    {
      "2.5.4.3": "g21"
    },
    {
      "2.5.4.10": "cp"
    }
  ]
}

curl.setOpt(Curl.option.URL, url)

//curl.setOpt('SSL_VERIFYHOST', 0)
//curl.setOpt('SSL_VERIFYPEER', 0)

curl.setOpt(Curl.option.HTTPHEADER, ['Content-Type: application/json', 'Accept: application/json']);
curl.setOpt(Curl.option.POSTFIELDS, JSON.stringify(data))
curl.setOpt(Curl.option.VERBOSE, true)

curl.on('end', (statusCode, body) => {
  console.log('Body:')
  console.log(body)

  curl.close()
})

curl.on('error', curl.close.bind(curl))

curl.perform()
