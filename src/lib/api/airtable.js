import { AIRTABLE_API_KEY, AIRTABLE_BASE_KEY } from './constants';

export const airtableDB = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_KEY);
