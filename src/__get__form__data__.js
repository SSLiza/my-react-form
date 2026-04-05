// 1. e.target.[fieldName].value
// 2.use form action and formData in the action handler formData.get('name od input field')
//3.controlled component .one per each field.use sate on change of the field .useful to dynamically handle error
//handle all controlled field on one state object 
//const[formdata,setFormData]=useState({
// name=''
//pass:''
// })
// 4.uncontrolled using useref
// 5.hooks form