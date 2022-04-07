export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624efe4d3ea06d00988993a1',
                  title: 'Sanity Studio',
                  name: 'sanity-er-test-demo-studio',
                  apiId: '47fb82b7-16e9-4ed4-b0ed-3d665fbf0553'
                },
                {
                  buildHookId: '624efe4d56da14005f31d26a',
                  title: 'Blog Website',
                  name: 'sanity-er-test-demo',
                  apiId: '4678f078-d9eb-48fc-a33b-f52d09e42771'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/papercraneadmin/sanity-er-test-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-er-test-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
