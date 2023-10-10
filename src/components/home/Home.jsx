import React from 'react'
import './Home.css'

// imports from hooks
import { infos, icons } from '../../hooks/database/db'
import Seo from '../../hooks/seo/Seo'

// import comps
import Todo from '../todo/Todo'
import Auth from '../../hooks/auth/Auth'
import Theme from '../../hooks/localstorage/Theme'

const Home = () => {
    return (
        <div className='todo_home_page'>
            <Seo
                title="To - Do List"
                description="A simple to-do app to manage your daily tasks efficiently."
                name="TO DO APP"
                type="website"
            />

            <div className="home_col">
                <header>
                    <div className="home_col_headers">
                        <div className='home_col_headers_name'>
                            <h1>{infos.name}</h1>
                            <small>{infos.name2}</small>
                        </div>

                        <div className='theme_auth'>
                            <Auth />
                            <Theme />
                        </div>
                    </div>
                </header>

                <main>
                    <div className="home_col_main">
                        <Todo />
                    </div>
                </main>

                <footer>
                    <p>{icons.drag} Drag & Drop to Reorder List</p>
                </footer>
            </div>
        </div>
    )
}

export default Home