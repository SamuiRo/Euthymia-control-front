import { Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { JsonCosmosComponent } from './components/json-cosmos/json-cosmos.component';
import { ItemsTableComponent } from './components/items-table/items-table.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TwitterDashboardComponent } from './components/dashboard/sub-dashboards/twitter-dashboard/twitter-dashboard.component';
import { DiscordDashboardComponent } from './components/dashboard/sub-dashboards/discord-dashboard/discord-dashboard.component';
import { DatabaseDashboardComponent } from './components/dashboard/sub-dashboards/database-dashboard/database-dashboard.component';
import { NftDashboardComponent } from './components/dashboard/sub-dashboards/nft-dashboard/nft-dashboard.component';
import { Web3Component } from './components/web3/web3.component';
import { Web3profileComponent } from './components/web3/sub-menu/web3profile/web3profile.component';
import { WalletComponent } from './components/web3/sub-menu/wallet/wallet.component';
import { Web3profilesComponent } from './components/web3/sub-menu/web3profiles/web3profiles.component';
import { RoutineComponent } from './components/web3/sub-menu/routine/routine.component';
import { LendingComponent } from './components/lending/lending.component';
import { ActivityOverviewComponent } from './components/web3/sub-menu/routine/activity-overview/activity-overview.component';
import { TreasureComponent } from './components/web3/sub-menu/treasure/treasure.component';
import { ArcadeComponent } from './components/web3/sub-menu/arcade/arcade.component';
import { TreasureOverviewComponent } from './components/web3/sub-menu/treasure/treasure-overview/treasure-overview.component';
import { ArcadeOverviewComponent } from './components/web3/sub-menu/arcade/arcade-overview/arcade-overview.component';
import { ActivityManagerComponent } from './components/dashboard/sub-dashboards/activity-manager/activity-manager.component';
import { ActivityManagerAddComponent } from './components/dashboard/sub-dashboards/activity-manager/modules/activity-manager-add/activity-manager-add.component';
import { ActivityManagerUpdateComponent } from './components/dashboard/sub-dashboards/activity-manager/modules/activity-manager-update/activity-manager-update.component';

export const routes: Routes = [
  { path: '', component: LendingComponent },
  {
    path: 'v1',
    title: 'Euthymia',
    component: HomeComponent,
    children: [
      { path: 'accounts', title: 'Accounts', component: JsonCosmosComponent },
      { path: 'items', title: 'Items', component: ItemsTableComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'activitymanager', pathMatch: 'full' },
          {
            path: 'activitymanager',
            title: 'Activity Manager',
            component: ActivityManagerComponent,
            children: [
              { path: '', redirectTo: 'add', pathMatch: 'full' },
              {
                path: 'add',
                title: 'Add Activity',
                component: ActivityManagerAddComponent,
              },
              {
                path: 'update',
                title: 'Update Activity',
                component: ActivityManagerUpdateComponent,
              },
            ],
          },
          {
            path: 'twitter',
            title: 'Twitter',
            component: TwitterDashboardComponent,
          },
          {
            path: 'discord',
            title: 'Discord',
            component: DiscordDashboardComponent,
          },
          {
            path: 'database',
            title: 'Database',
            component: DatabaseDashboardComponent,
          },
          { path: 'nft', title: 'NFT', component: NftDashboardComponent },
        ],
      },
      {
        path: 'web3',
        title: 'Web3',
        component: Web3Component,
        children: [
          { path: '', redirectTo: 'w3profile', pathMatch: 'full' },
          {
            path: 'w3profile',
            title: 'Web3',
            component: Web3profilesComponent,
          },
          {
            path: 'w3profile/:name',
            title: 'Web3',
            component: Web3profileComponent,
          },
          { path: 'routine', title: 'Routine', component: RoutineComponent },
          {
            path: 'routine/:activity',
            title: 'Activity Overview',
            component: ActivityOverviewComponent,
          },
          { path: 'treasure', title: 'Treasure', component: TreasureComponent },
          {
            path: 'treasure/:activity',
            title: 'Treasure Overview',
            component: TreasureOverviewComponent,
          },
          { path: 'arcade', title: 'Arcade', component: ArcadeComponent },
          {
            path: 'arcade/:activity',
            title: 'Arcade Overview',
            component: ArcadeOverviewComponent,
          },
          { path: 'wallet', title: 'Wallet', component: WalletComponent },
        ],
      },
    ],
  },
];
