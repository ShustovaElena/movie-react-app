import '@testing-library/jest-dom';
import 'jest-localstorage-mock';
import { worker } from './mocks/browser';

beforeAll(() => worker.listen());
afterAll(() => worker.close());
afterEach(() => worker.resetHandlers());
