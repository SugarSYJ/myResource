import {RouterModule, Routes} from '@angular/router'

import {Component1Component} from '../components/component1/component1.component'
import {Component2Component} from '../components/component2/component2.component'
import {StudentComponent} from '../components/student/student.component'
import {CnodeComponent} from '../components/cnode/cnode.component'


const routes: Routes = [
    {path: '', redirectTo: '/cp1', pathMatch: 'full'},
    {path: 'cp1', component: Component1Component},
    {path: 'cp2', component: Component2Component},
    {path: 'student', component: StudentComponent},
    {path: 'cnode', component: CnodeComponent},
    {path: '**', component: Component2Component}
]

const rootRouter = RouterModule.forRoot(
    routes,
    {enableTracing: false}
)

export default rootRouter;