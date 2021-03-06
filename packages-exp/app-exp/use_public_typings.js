/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { writeFileSync } = require('fs');

// point typings field to the public d.ts file in package.json
const PUBLIC_TYPINGS_PATH = './dist/app-exp-public.d.ts';
console.log(
  `Updating the typings field to the public d.ts file ${PUBLIC_TYPINGS_PATH}`
);

const packageJson = require('./package.json');
packageJson.typings = PUBLIC_TYPINGS_PATH;

writeFileSync('./package.json', `${JSON.stringify(packageJson, null, 2)}\n`, {
  encoding: 'utf-8'
});
