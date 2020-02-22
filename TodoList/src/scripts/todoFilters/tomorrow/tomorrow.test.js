import tomorrow from './tomorrow';

describe('filter tomorrow test', () => {
  
  it('filter tomorrow all right', () => {
    expect(tomorrow([{id: 2, title: "rrr", createdAt: "2020-02-21T21:00:30.391Z", dueDate: "2020-02-23", isDone: false}])).toEqual([{id: 2, title: "rrr", createdAt: "2020-02-21T21:00:30.391Z", dueDate: "2020-02-23", isDone: false}]);
  })
});