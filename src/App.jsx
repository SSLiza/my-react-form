import './App.css'
import ControlledField from './components/controlledfield/ControlledField'
import FamilyTree from './components/familytree/FamilyTree'
import FormAction from './components/formaction/FormAction'
import HooksForm from './components/HooksForm/HooksForm'
import ProductManagement from './components/productmanagement/ProductManagement'
import SimpleForm from './components/simpleform/SimpleForm'
import UncontrolledField from './components/uncontrolledfield/UncontrolledField'

function App() {

  return (
    <>
      <h1>Explore React Form </h1>
      {/* <SimpleForm /> */}
      {/* <FormAction/> */}
      {/* <ControlledField/> */}
      {/* <UncontrolledField/> */}
      {/* <HooksForm/> */}
      <ProductManagement/>
      {/* <FamilyTree/> */}
    </>
  )
}

export default App
