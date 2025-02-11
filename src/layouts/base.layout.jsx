import React from 'react'
import RoutesConfig from '../shared/router.config'

function BaseLayout({children}) {

    const routesToDisplay = RoutesConfig.map(
        r => ({...r, description:r.path.split("/")[1]})
    );
  return (
    <div>
        <ul>
            {
            routesToDisplay.map(
                router => (
                <li key={routesToDisplay.indexOf(router)}>
                    <a href={router.path}> to { router.description} page  </a>
                </li>
                )
            )
        }
        </ul>
        <br />
        { children }
        <br />
        <footer>
            <h4> this is my social links : </h4>
            <ul>
                <li> test </li>
                <li> test </li>
                <li> test </li>
            </ul>
        </footer>
    </div>
  )
}

export default BaseLayout
