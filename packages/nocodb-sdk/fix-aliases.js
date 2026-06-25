#!/usr/bin/env node
// Temporary fix: resolve path aliases in SDK build output for Windows
const fs = require('fs');
const path = require('path');

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name.endsWith('.js') || e.name.endsWith('.d.ts')) {
      let c = fs.readFileSync(fp, 'utf8');
      if (c.includes('~/')) {
        c = c.split('~/').join('./');
        fs.writeFileSync(fp, c, 'utf8');
      }
    }
  }
}

walk('packages/nocodb-sdk/build');
console.log('SDK build aliases fixed');
