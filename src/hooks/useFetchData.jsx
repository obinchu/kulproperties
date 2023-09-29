import { useState, useEffect } from 'react';
import Axios from 'axios';
// import { useQuery } from 'react-query';
// import { useSearchParams } from 'react-router-dom';

const useFetchData = (value, bedroom, bathroom, searchValue) => {
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `https://kulproperties-73b1dd21a039.herokuapp.com/api/properties`;

        // if (value !== 'Property Types') {
        //   apiUrl += `&property_type=${value}`;
        // }

        // if (bedroom !== 'bedroom') {
        //   apiUrl += `&bd=${bedroom}`;
        // }

        // if (bathroom !== 'bathroom') {
        //   apiUrl += `&bt=${bathroom}`;
        // }

        const response = await Axios.post(apiUrl, null, {
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            selectedValue: value,
            searchValue,
          },
        });

        console.log(response.data, "fetched data");
        setFilteredData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts

    // You can also add cleanup logic here if needed

  }, [value, bedroom, bathroom, searchValue]); // Add any dependencies here that should trigger a re-fetch when they change

  return { filteredData, isLoading };
};

export default useFetchData;
