import axios from 'axios'

export const addTodo = (payload) => async (dispatch) => {
  console.log(payload, 'this is payload');


  try {
      let data = JSON.stringify(payload)
      const response = await axios.post(`https://react-native-test-tme.firebaseio.com/todos.json`, data)
      console.log(response,'this is response')
  } catch (error) {
      console.log(error,' this is error')
      console.log(error.response.message,'____')
      
  }

//   try {
//       fetch(`https://react-native-test-tme.firebaseio.com/todos`, {
//         method: 'POST',
//         body: JSON.stringify(payload),
//       }).then((response) => JSON.parse(response)).then(res => console.log(res)).catch(error => console.log(error.message))
      
//   } catch (error) {
//       console.log(error.message)
//       console.log(error.response)
      
//   }
//   // https://react-native-test-tme.firebaseio.com
 
    
};
