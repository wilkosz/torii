/* jshint node:true */
module.exports = {
  scenarios: [
    {
      name: 'Ember 1.12.1',
      bower: {
        dependencies: {
          'ember': '1.12.1'
        }
      }
    },
    {
      name: 'Ember 1.13',
      bower: {
        dependencies: {
          'ember': '~1.13.0'
        }
      }
    },
    {
      name: 'ember-lts-2.4',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-4'
        },
        resolutions: {
          'ember': 'lts-2-4'
        }
      }
    },
    {
      name: 'ember-lts-2.8',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-8'
        },
        resolutions: {
          'ember':'lts-2-8'
        }
      }
    },
    {
      name: 'Ember Canary',
      allowedToFail: true,
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      }
    },
    {
      name: 'Ember Beta',
      allowedToFail: true,
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      }
    },
    {
      name: 'Ember Release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      }
    }
  ]
};
