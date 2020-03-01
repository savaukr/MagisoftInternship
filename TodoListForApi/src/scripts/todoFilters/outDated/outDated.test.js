import outDated from './outDated';

describe('filter outDated test', () => {
  
    it('filter outDated all right', () => {
      expect(outDated([{id: 2, title: "rrr", createdAt: "2020-02-21T21:00:30.391Z", dueDate: "2020-02-19", isDone: false}])).toEqual([{id: 2, title: "rrr", createdAt: "2020-02-21T21:00:30.391Z", dueDate: "2020-02-19", isDone: false}]);
    })
  
  });
