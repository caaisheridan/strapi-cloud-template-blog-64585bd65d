module.exports = {
    async register(ctx) {
      const { email, password } = ctx.request.body;
  
      if (!email || !password) {
        return ctx.badRequest('Email and password are required.');
      }
  
      try {
        const username = email.split('@')[0]; // Generate username from email (before the @)
  
        // Create a new user with email, password, and auto-generated username
        const newUser = await strapi.plugins['users-permissions'].services.user.add({
          email,
          password,
          username,
        });
  
        return ctx.send({
          message: 'User registered successfully',
          user: newUser,
        });
      } catch (err) {
        return ctx.badRequest('Registration failed', { error: err });
      }
    },
  };
  