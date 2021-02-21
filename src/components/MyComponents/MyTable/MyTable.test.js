import React from 'react';
import { shallow } from 'enzyme';
import MyTable from './MyTable';
// import formateDate from './utils/ ';

const data = {
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

describe('<MyTable /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MyTable />);
  });

  describe('render()', () => {
    it('table should exist', () => {
      expect(wrapper.find("#MyTable").exists()).toBeTruthy()
    });
    it('should contain title header of the  table', () => {
      const dateButton = wrapper.find('#SortableDate')
      const date = wrapper.find("#SortableDate").text()
      expect(date).toEqual("Date ⭥");
      const UserID = wrapper.find("#UserID").text()
      expect(UserID).toEqual("User ID");
      const OldValue = wrapper.find("#OldValue").text()
      expect(OldValue).toEqual("Old Value");
      const NewValue = wrapper.find("#NewValue").text()
      expect(NewValue).toEqual("New Value");
    });
    // it('should simulate sort by date in table', () => {
    //   // TO DO
    // });

    // it('should convert date to YYYY-MM-DD', () => {
    //   expect(formateDate(1581631200000)).toEqual("2020-02-14")
    // });


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

    it('should simulate data for table', () => {
    });
  });
});
