import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super()
    this.state = {
      page : "profile"
    }
  }

  onClickMenu = (e) => {
    // debugger
    this.setState({
      page: e.target.id
    })
  }

  getPage = () => {
    switch (this.state.page) {
      case "profile":
          return <Profile />
      break;
      case "photo":
         return <Photos />
      break;
      case "cocktail":
         return <Cocktails />
      break;
      case "pokemon":
         return <Pokemon />
      break;
     default:
       break;
   }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
   let detailsToDisplay = this.getPage();
   
    return (
      <div>
        <MenuBar menuClick = {this.onClickMenu} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
