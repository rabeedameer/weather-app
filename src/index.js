#!/usr/bin/env node
import Weather from './lib/app';

const app = new Weather();
const args = process.argv.slice(2);

app.weather(args[0])
    .then(console.log)
    .catch(console.error);
