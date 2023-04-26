import { PropTypes } from 'prop-types'
import { useState, useEffect, useCallback } from 'react'


const Polling = ({ apiUrl, pollingInterval }) => {
  const [data, setData] = useState([])
  console.log(data)

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [apiUrl]);
  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, pollingInterval);

    return () => clearInterval(interval);
  }, [fetchData, pollingInterval]);

  return (
    <div>
      <h2>Latest Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.first_name}</li>
        ))}

      </ul>

    </div>
  )
}

Polling.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  pollingInterval: PropTypes.number.isRequired

}

export default Polling
