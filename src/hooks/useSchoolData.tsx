import { UseQueryResult, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { SchoolInterface } from "../interfaces/interfaces"

const useSchoolData = (): UseQueryResult<SchoolInterface[]> => {
  const getSchoolData = () => axios.get('https://data.cityofnewyork.us/resource/s3k6-pzi2.json')

  return useQuery({
    queryKey: ['schools'],
    queryFn: getSchoolData,
    select: (response) => response.data
  })
}

export default useSchoolData