'use strict';

/**
 * exercise-topic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exercise-topic.exercise-topic');
