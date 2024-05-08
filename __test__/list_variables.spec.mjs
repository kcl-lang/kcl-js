import test from 'ava'

import { listVariables, ListVariablesArgs } from '../index.js'

test('listVariables', (t) => {
  const result = listVariables(ListVariablesArgs('__test__/test_data/schema.k', []))
  t.is(result.variables['app'].value, 'AppConfig {replicas: 2}')
})
