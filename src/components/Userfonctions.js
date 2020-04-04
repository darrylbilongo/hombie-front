export function getHobbies () {
    return axios
          .get('http://localhost:8082/api/hobbies', {
              
          })
          .then(
              res => {
                return res;
              }
          )
          .catch(err => {
                alert("Ne peut pas avoir les evenements")
                console.log(err)
    })
  }