import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));


// Steps:

    // 1. Add a 'Header' Component with a title and image

    // 2. Add a 'User Input' Component that collects user input with two-way-binding.