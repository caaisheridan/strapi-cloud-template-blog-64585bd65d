module.exports = {
    async updateMe(ctx) {
      if (!ctx.state.user) {
        return ctx.unauthorized('You must be logged in');
      }
  
      const userId = ctx.state.user.id;
      const updateData = ctx.request.body;
  
      // Remove any sensitive fields that shouldn't be updated
      delete updateData.role;
      delete updateData.password;
      delete updateData.confirmed;
      delete updateData.blocked;
  
      try {
        const updatedUser = await strapi.plugins['users-permissions'].services.user.edit(
          userId,
          updateData
        );
  
        // Sanitize the response
        delete updatedUser.password;
        delete updatedUser.resetPasswordToken;
        
        return updatedUser;
      } catch (error) {
        return ctx.badRequest('Unable to update user');
      }
    }
  };