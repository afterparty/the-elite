import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelSelectComponent } from './level-select/level-select.component';
import { DifficultySelectComponent } from './difficulty-select/difficulty-select.component';
import { RankingsComponent } from './rankings/rankings.component';
import { RunComponent } from './run/run.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: './home/home.module#HomePageModule'
	},
	{
		path: 'list',
		loadChildren: './list/list.module#ListPageModule'
	},
	{
		path: 'level-select',
		component: LevelSelectComponent
	},
	{
		path: 'difficulty-select',
		component: DifficultySelectComponent
	},
	{
		path: 'rankings',
		component: RankingsComponent
	},
	{
		path: 'run',
		component: RunComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
