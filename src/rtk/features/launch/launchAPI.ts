import axios from "axios";

export async function fetchLaunch(id:number|string){
  const dataPromis = await axios.get('https://api.spacexdata.com/v3/launches/'+id)
    return dataPromis.data
  }