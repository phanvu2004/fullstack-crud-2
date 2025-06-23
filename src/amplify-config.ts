// Placeholder for Amplify configuration
// This file will be replaced by the actual configuration after backend deployment

export const amplifyConfig = {
  // Default empty configuration
  Auth: {
    Cognito: {
      userPoolId: 'PLACEHOLDER',
      userPoolClientId: 'PLACEHOLDER',
      identityPoolId: 'PLACEHOLDER',
    }
  },
  API: {
    GraphQL: {
      endpoint: 'PLACEHOLDER',
      region: 'PLACEHOLDER',
      defaultAuthMode: 'userPool'
    }
  }
};
