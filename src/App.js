import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from "axios";

const App = () => {
  
  const [loading, setLoading] = useState(true);
  const [data, setDatas] = useState([]);
  useEffect(() => {
    axios(
      "https://raw.githubusercontent.com/apiCoat/coatOfTable/master/src/data.json"
    )
      .then((res) => setDatas(res.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
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
                     isLoading={loading}
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
