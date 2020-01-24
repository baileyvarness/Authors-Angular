import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllAuthors() {
    return this._http.get("/api/authors");
  }

  createAuthor(authorToCreate) {
    return this._http.post("/api/authors", authorToCreate);
  }

  deleteAuthor(authorId) {
    return this._http.delete("/api/authors/" + authorId);
  }

  updateAuthor(authorToUpdate) {
    return this._http.put("/api/authors/" + authorToUpdate._id, authorToUpdate);
  }

  getOneAuthor(authorId) {
    return this._http.get("/api/authors/" + authorId);
    // return this._http.delete(`/api/authors/${authorId}`);
  }

}
