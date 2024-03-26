import { UseQueryResult, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { SatInterface } from "../interfaces/interfaces"

const useSatData = (): UseQueryResult<SatInterface[]> => {
  const getSatData = () => axios.get('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')

  return useQuery({
    queryKey: ['sat'],
    queryFn: getSatData,
    select: (response) => response.data
  })
}

export default useSatData