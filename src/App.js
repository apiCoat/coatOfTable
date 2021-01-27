import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

const App = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
  async function getData() {
    fetch(
      "https://raw.githubusercontent.com/apiCoat/coatOfTable/master/src/data/data.json"
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (txt) {
        let d = txt.replace(/first_name/g, `"First Name"`);
        d = d.replace(/last_name/g, `"Last Name"`);
        d = JSON.parse(d);
        setData(d);
      });
  }
  getData();
  }, []); 

  const columns = [
    {
      title: "First name", field: 'first_name'
    },
    {
      title: "Last name", field: 'last_name'
    }
  ]
  return (
    <div>
      <MaterialTable title="coatOfTable"
                     data={data}
                     columns={columns}
                     options={{
                       search: true,
                       paging: true,
                       filtering: false,
                       exportButton: false
                     }}
                    />
    </div>
  )
}

export default App;
