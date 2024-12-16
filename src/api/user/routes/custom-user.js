module.exports = {
    routes: [
      {
        method: 'PUT',
        path: '/users/me',
        handler: 'user-settings.updateMe',
        config: {
          prefix: '',
          auth: {
            strategies: ['users-permissions']
          },
          policies: []
        }
      }
    ]
  };