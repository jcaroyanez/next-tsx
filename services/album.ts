import { URL_API_ALBUM } from "../constans/app"
import { Album } from "../models/album";

const getAlbums = async(): Promise<Album[]> => {
  const response = await fetch(URL_API_ALBUM);
  const responseJson = response.json();
  return responseJson;
}

const getDetailAlbum = async(id: number): Promise<any> => {
  const response = await fetch(`${URL_API_ALBUM}/${id}/photos`);
  const responseJson = response.json();
  return responseJson;
}

export default {
  getAlbums,
  getDetailAlbum
}