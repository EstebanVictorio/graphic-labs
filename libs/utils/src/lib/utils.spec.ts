import { utils, anotherUtil } from './utils';

describe('utils', () => {
  it('should work', () => {
    expect(utils()).toEqual('utils');
    expect(anotherUtil()).toEqual('anotherUtil');
  });
});
