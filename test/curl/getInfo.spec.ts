/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import 'should'

import { Curl } from '../../lib'

const url = 'https://example.com'

let curl: Curl
describe('getInfo()', () => {
  beforeEach(() => {
    curl = new Curl()
    curl.setOpt('URL', url)
  })

  afterEach(() => {
    curl.close()
  })

  it('should not work with non-implemented infos', done => {
    curl.on('end', status => {
      if (status !== 200) {
        throw Error(`Invalid status code: ${status}`)
      }

      ;(() => {
        curl.getInfo(Curl.info.PRIVATE)
      }).should.throw(/^Unsupported/)

      done()
    })

    curl.on('error', done)

    curl.perform()
  })
})
