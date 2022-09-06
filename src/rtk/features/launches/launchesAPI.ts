import axios from "axios";

export async function fetchLaunches(){
  const dataPromis = await axios.get('https://api.spacexdata.com/v3/launches')
    return dataPromis.data
  }