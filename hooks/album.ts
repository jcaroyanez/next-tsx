import { useState, useEffect } from "react"
import { default as ApiAlbums } from '../services/album';
import { Album, AlbumDetail } from "../models/album";

export const albumsList = (): Album[] => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    ApiAlbums.getAlbums().then(setAlbums);
  }, []);
  return albums;
}

export const getDetailAlbum = (id: number): AlbumDetail[] => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    if(id) {
      ApiAlbums.getDetailAlbum(id).then(setAlbums);
    }
  }, [id]);
  return albums;
}