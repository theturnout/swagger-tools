/* global describe, it */

/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Apigee Corporation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

'use strict';

// Here to quiet down Connect logging errors
process.env.NODE_ENV = 'test';
// Indicate to swagger-tools that we're in testing mode
//process.env.RUNNING_SWAGGER_TOOLS_TESTS = 'true';
process.env.DEBUG = '*';
var _ = require('lodash');
var assert = require('assert');
var helpers = require('../helpers');
var path = require('path');
var pkg = require('../../package.json');
var request = require('supertest');

var swaggerObject = _.cloneDeep(require('../../samples/3.0/petstore.json'));

describe('Swagger UI Middleware v3.0', function () {
  it('should serve Swagger documents at /api-docs by default', function (done) {
    helpers.createServer([swaggerObject], {}, function (app) {
      request(app)
        .get('/api-docs')
        .expect(200)
        .end(helpers.expectContent(swaggerObject, done));
    });
  });
});

