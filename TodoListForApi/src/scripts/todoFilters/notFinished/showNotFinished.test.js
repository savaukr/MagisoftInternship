import showNotFinished from './showNotFinished.js';

describe('show not finished task in list', () => {
  
  it('Adds 2 numbers correctly', () => {
    expect(showNotFinished([
        {id: 0, title: "do home work", createdAt: "2020-02-21T20:59:16.767Z", dueDate: "2020-02-22", isDone: true},
        {id: 1, title: "rrr", createdAt: "2020-02-21T20:59:56.865Z", dueDate: "2020-02-22", isDone: false}
    ])).toEqual([{id: 1, title: "rrr", createdAt: "2020-02-21T20:59:56.865Z", dueDate: "2020-02-22", isDone: false}])
  })
});