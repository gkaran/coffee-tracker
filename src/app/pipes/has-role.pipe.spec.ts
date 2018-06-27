import { HasRolePipe } from './has-role.pipe';

describe('HasRolePipe', () => {
  it('create an instance', () => {
    const pipe = new HasRolePipe();
    expect(pipe).toBeTruthy();
  });
});
