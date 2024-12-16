'use strict';

/**
 * action-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::action-plan.action-plan');
