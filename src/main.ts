import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Amplify } from 'aws-amplify';
import { amplifyConfig } from './amplify-config';

// Configure Amplify
try {
  Amplify.configure(amplifyConfig);
  console.log('Amplify configured successfully');
} catch (error) {
  console.error('Error configuring Amplify:', error);
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
