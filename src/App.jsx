import React, {useState, useEffect} from 'react'
export default function App () {

    const [activeClass, setActiveClass] = useState(false)
    const [words, setWords] = useState([])
    const links = ['about', 'animations', 'contact']

    useEffect(() => {
        const newWords = []
        links.forEach(word => {
            const letters = Array.from(word.toLocaleUpperCase())
            newWords.push(letters)
        })

        setWords(newWords)
    }, [])

    const Routes = () => {
        return  (
            <Switch>
                <Route path="/" component={Homepage} />
                {/*<Route path="/about" component={About} />*/}
                {/*<Route path="/animations" component={Animations} />*/}
                {/*<Route path="/contact" component={Contact} />*/}
            </Switch>
        )
    }

    return (
        <React.Fragment>
            <BrowserRouter>
                <nav>
                    <div className="nav">
                        <h1 className="logo">Animations <br/>T4Code</h1>
                        <div className={"btn-burger " + (activeClass ? 'active' : '')} onClick={() => setActiveClass(!activeClass)}>
                    <span className="burger">
                      <span className="bar bar-1"> </span>
                      <span className="bar bar-2"> </span>
                    </span>
                        </div>
                    </div>
                </nav>
                <div className={"menu " + (activeClass ? 'active' : '')}>
                    {words.map((word, id) => (
                        <NavLink key={id} className="menu-item" to={links[id]}>
                            {word.map((letter, id) => (
                                <span key={id} className="item">{letter}</span>
                            ))}
                        </NavLink>
                    ))}
                </div>

                <div className={"main-container " + (activeClass ? 'hidden' : '')}>
                    <Routes />
                </div>
            </BrowserRouter>
        </React.Fragment>

)
}
import {BrowserRouter, NavLink, Switch, Route} from 'react-router-dom'

import Homepage from './Homepage'
