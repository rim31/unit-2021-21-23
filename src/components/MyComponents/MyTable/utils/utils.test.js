jest.mock('../../../../__mocks__/api')
import { formatDate, propertySort, createData, fetch } from './utils';

const input = {
  code: 200,
  data: [
    {
      diff: [{ field: "name", oldValue: "John", newValue: "Bruce" }],
      id: "e28d290a-a2f2-48c2-9001-ff43884e271b",
      timestamp: 1581631200000
    },
    {
      diff: [{ field: "name", oldValue: "Bruce", newValue: "Nick" }],
      id: "8bd0166f-f0c6-48fd-9fcd-a17e76eb1e92",
      timestamp: 1581717600000
    }, {
      diff: [{ field: "name", oldValue: "Nick", newValue: "Michel" }],
      id: "0a75a2b3-be64-4aeb-ba4c-8ddb913791ac",
      timestamp: 1581804000000
    }
  ],
  limit: 3,
}
const data = [
  {
    diff: [{ field: "name", oldValue: "John", newValue: "Bruce" }],
    id: "e28d290a-a2f2-48c2-9001-ff43884e271b",
    timestamp: 1581631200000
  },
  {
    diff: [{ field: "name", oldValue: "Bruce", newValue: "Nick" }],
    id: "8bd0166f-f0c6-48fd-9fcd-a17e76eb1e92",
    timestamp: 1581717600000
  }, {
    diff: [{ field: "name", oldValue: "Nick", newValue: "Michel" }],
    id: "0a75a2b3-be64-4aeb-ba4c-8ddb913791ac",
    timestamp: 1581804000000
  }
]
const res = [
  {
    "date": "2020-02-14",
    "newValue": "Bruce",
    "oldValue": "John",
    "userID": "e28d290a-a2f2-48c2-9001-ff43884e271b"
  }, {
    "date": "2020-02-15",
    "newValue": "Nick",
    "oldValue": "Bruce",
    "userID": "8bd0166f-f0c6-48fd-9fcd-a17e76eb1e92"
  }, {
    "date": "2020-02-16",
    "newValue": "Michel",
    "oldValue": "Nick",
    "userID": "0a75a2b3-be64-4aeb-ba4c-8ddb913791ac"
  }
]

describe('utils functions format Date testing', () => {
  it('should convert date to YYYY-MM-DD from a good timestamp', () => {
    expect(formatDate(1581631200000)).toEqual("2020-02-14")
  });
  it('should not convert date to with wrong format of timestamp', () => {
    expect(formatDate("lol")).toEqual("NaN-NaN-NaN")
  });
});

describe('utils functions sort Array by date', () => {
  const unsortArray = [
    {
      "date": "2020-02-14",
      "newValue": "Bruce",
      "oldValue": "John",
      "userID": "e28d290a-a2f2-48c2-9001-ff43884e271b"
    }, {
      "date": "2020-02-15",
      "newValue": "Nick",
      "oldValue": "Bruce",
      "userID": "8bd0166f-f0c6-48fd-9fcd-a17e76eb1e92"
    }, {
      "date": "2020-02-16",
      "newValue": "Michel",
      "oldValue": "Nick",
      "userID": "0a75a2b3-be64-4aeb-ba4c-8ddb913791ac"
    }
  ]
  it('should convert date to YYYY-MM-DD from a good timestamp', () => {
    expect(unsortArray.sort(propertySort("date", 1))).toEqual(res)
  });
});


describe('utils functions create Array for material UI table', () => {
  it('should should be fill by undefined', () => {
    let test = []
    data.forEach(e => {
      test.push(createData());
    })
    expect(test).toEqual(
      [
        {
          "date": undefined,
          "newValue": undefined,
          "oldValue": undefined,
          "userID": undefined,
        },
        {
          "date": undefined,
          "newValue": undefined,
          "oldValue": undefined,
          "userID": undefined,
        },
        {
          "date": undefined,
          "newValue": undefined,
          "oldValue": undefined,
          "userID": undefined,
        },
      ]
    )
  });

  it('should combined function for format array', () => {
    let test = []
    data.forEach(e => {
      test.push(createData(formatDate(e.timestamp), e.id, e.diff[0].oldValue, e.diff[0].newValue));
    })
    expect(test).toEqual(res)
  });

  it('should stay empty and not crash', () => {
    let test = []
    test.forEach(e => {
      test.push(createData(formatDate(e.timestamp), e.id, e.diff[0].oldValue, e.diff[0].newValue));
    })
    expect(test).toEqual([])
  });
});

describe('utils fetch mock ', () => {
  it('fetch mock', () => {
    fetch().then(res => {
      expect(res).toEqual(input)
    })
  });
});