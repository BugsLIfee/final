import axios from "axios"
import { request }from "../../oauth/api/APIUtils";


class TagApi {
  url = "/api/tag/"

  tagCreate(tagApiModel) {
    return axios.post(this.url, tagApiModel).then((response) => (response && response.data) || null)
  }
  tagList(tagId) {
    return axios.get(this.url + `${tagId}`).then((response) => (response && response.data) || null)
  }
  //todoList(todoApiModel):url get  return todo
  tagListAll() {
    return request({
      url: this.url,
      method:'GET'
    });
    // return axios.get(this.URL).then((response) => (response && response.data) || null)
  }
  //todoModify(todoApiModel):url put  return void
  tagModify(tagApiModel) {
    //let todoJson = JSON.stringify(todoApiModel);
    return axios.put(this.url, tagApiModel).then((response) => (response && response.data) || null)
  }
  //todoDelete(todoApiModel):url delete return void
  tagDelete(tagId) {
    return axios
      .delete(this.url + `${tagId}`)
      .then((response) => (response && response.data) || null)
  }
}
export default TagApi