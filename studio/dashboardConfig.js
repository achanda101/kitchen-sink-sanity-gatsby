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
                  buildHookId: '5f4d374135dfbb7790a6832a',
                  title: 'Sanity Studio',
                  name: 'kitchen-sink-sanity-gatsby-studio',
                  apiId: 'a5ebac8e-9676-4e5a-9bdf-a115c555660f'
                },
                {
                  buildHookId: '5f4d374112091d6874ff2545',
                  title: 'Blog Website',
                  name: 'kitchen-sink-sanity-gatsby',
                  apiId: 'c92b9fbf-90d4-405d-9e12-2f252d381e46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/achanda101/kitchen-sink-sanity-gatsby',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kitchen-sink-sanity-gatsby.netlify.app', category: 'apps'}
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
