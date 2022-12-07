import * as initializeTestFirebase from 'firebase-functions-test';
import { initializeApp } from 'firebase-admin/app';

export function setupTestFirebase() {
  const tester = initializeTestFirebase();

  const app = initializeApp({
    projectId: 'fake-firebase-project',
  });

  // At the moment no other modules like auth, firestore or storage are needed
  // So this function seems to be unnecessary
  // But it's important for further test implementations,
  // if other services like firestore are used.

  return {
    tester,
    app,
  };
}
