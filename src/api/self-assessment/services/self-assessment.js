'use strict';

/**
 * self-assessment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::self-assessment.self-assessment');
