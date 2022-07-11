import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { ButtonComponent } from './Components/button/button.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutComponent } from './Components/about/about.component';
import { TaskItemComponent } from './Components/task-item/task-item.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ButtonComponent,
    HeaderComponent,
    AboutComponent,
    TaskItemComponent,
    FooterComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
