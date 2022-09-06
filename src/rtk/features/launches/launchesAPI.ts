import axios from "axios";
export interface LaunchesFetchModel {
  flight_number: number,
  launch_year: string,
  launch_date_unix: number,
  launch_date_utc: string,
  launch_date_local: string,
  mission_name: string,
  rocket: {},
  launch_site: {},
  launch_success: boolean
}

export async function fetchLaunches(){
  const dataPromis = await axios.get('https://api.spacexdata.com/v3/launches')
    return dataPromis.data
  }