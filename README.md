# Assignment App

A simple React App capable of taking input of User's __Name, Role, Date__ and showing them in a __Table__
  - _Input Name, Role & Date in a Form_
  - _Click Submit Button_
  - _Show all data in a table_

# Components
### 1. FormComponent
#### src/components/FormComponent.js ####

  It is a Basic Form Component. It renders a __Form__ Component imported from __Reactstrap__ - _a Bootstrap package for ReactJS_. It consists of three user input fields and a button. 
  - _Name_
  - _Role_
  - _Date_
  - _Submit Button_
### Methods ###
#### Constructor() ####
Calls _super()_ to initiate __This__ context. It initializes three states for keeping track of changing values of __Name, Role, Date__
Property  | Parameters | Parameter Type
------------- | ------------- | --------
Method  | props | Custom properties passed from _Parent Class_ __App__

#### handleNameType() ####
Called on change value of __Name__ input field. It updates __name__ state with the updated value.
Property  | Parameters | Parameter Type
------------- | ------------- | --------
Method  | - | -


#### handleRoleSelect() ####
Called on change value of __Role__ input field. It updates __role__ state with the updated value.
Property  | Parameters | Parameter Type
------------- | ------------- | --------
Method  | - | -

#### handleDateSelect() ####
Called on change value of __Date__ input field. It updates __date__ state with the updated value.
Property  | Parameters | Parameter Type
------------- | ------------- | --------
Method  | - | -

#### handleSubmitClick() ####
Called on click of __Submit__ button of the Form. It calls __handleDataStore()__ _prop_ method. This method is passed from its _parent class_ __App__ to call method __storeData()__ with parameter _row_. _row_ consists all three input values stored as _state_.

`row = {
            name: this.state.name,
            role: this.state.role,
            date: this.state.date
        }`
Property  | Parameters | Parameter Type
------------- | ------------- | --------
Method  | - | -
#### render() ####
Renders __Form__ Component imported from _reactstrap_ which consists of three _input field_ and a _submit button_.
Property  | Parameters | Parameter Type
------------- | ------------- | --------
Method  | - | -

### 2. TableComponent
#### src/components/TableComponent.js ####
A basic component to display all data in _tabular_ form. It takes all the data as _prop_ from its _parent class_ __App__.

### Methods ###
#### render() ####
Data passed from _parent class_ __App__ are mapped to different rows through _Javascript map_ function. It renders a __Table__ imported from _reactstrap_ that displays all data.
Property  | Parameters | Parameter Type
------------- | ------------- | --------
Method  | - | -

### 3. App
#### src/components/App.js ####
Wrapper Component that works as _parent class_ of _class_ __FormComponent__ and __TableComponent__.

### Methods ###
#### Constructor() ####
Calls _super()_ to initiate __This__ context. It also initialized _state_ __dataSource__ which is an array of _JSON Object_. __dataSource__ stores _row object_ passed from _child class_ __FormComponent__.

Property  | Parameters | Parameter Type
------------- | ------------- | --------
Method  | - | -

#### storeData(row) ####
Method for storing _row object_ into _state_ __dataSource__. This method is passed to _Child Class_ __FormComponent__ as a prop. It concates new _row object_ with existing array of _row objects_.
Property  | Parameters | Parameter Type
------------- | ------------- | --------
Method  | row | _JSON Object_ passed from _child class_ __FormComponent__

#### render() ####
It wraps __FormComponent__ and __TableComponent__ and renders both Component wrapped by _div_.
Property  | Parameters | Parameter Type
------------- | ------------- | --------
Method  | - | -

    
