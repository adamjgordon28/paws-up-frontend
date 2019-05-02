import React from 'react';


class Filter extends React.Component {

  render(){
    return(
      <div>
        <form>
        <tr>
          <td> Animal: </td>
          <td> <input type="checkbox"/></td>
          <td> <input type="checkbox"/></td>

        </tr>
        </form>
        <form>
        <tr>
          <td> Size: </td>
          <td> <input type="checkbox"/></td>
          <td> <input type="checkbox"/></td>

        </tr>
        </form>
        <form>
        <tr>
          <td> Age: </td>
          <td> <input type="checkbox"/></td>
          <td> <input type="checkbox"/></td>

        </tr>
        </form>
        <form>
        <tr>
          <td>Sex: </td>
          <td> <input type="checkbox"/></td>
          <td> <input type="checkbox"/></td>

        </tr>
        </form>
      </div>
    )
  }
}


export default Filter
