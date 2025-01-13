import {Page} from "./types";
import PageHome from "../containers/PageHome";
import PagePersonaCard from "../containers/PagePersonaCard";
import {BrowserRouter, Route, Routes as Switch} from "react-router-dom";

export const pages: Page[] = [
    { path: '/', exact: true, component: PageHome },
    { path: '/persona-card', component: PagePersonaCard },
]

const Routes = () => {
    return (
        <BrowserRouter basename="/">
            <Switch>
                {
                    pages.map(page => <Route key={page.path} Component={page.component} path={page.path}  />)
                }
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;