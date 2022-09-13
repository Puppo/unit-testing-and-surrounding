import "@testing-library/jest-dom";
import { vi } from "vitest";
import "vitest-fetch-mock";
import createFetchMock from "vitest-fetch-mock";

export const fetchMock = createFetchMock(vi);

fetchMock.enableMocks();
