export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e42fa35c1e521eeebdf0027',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-test-studio-89irsj2s',
                  apiId: '97c6c77c-2962-47f9-b872-d934a959b348'
                },
                {
                  buildHookId: '5e42fa36e187cbf55c5bb03a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-test-web-d2cw99a2',
                  apiId: 'b7489a86-45f5-4bfa-9dd0-886ae64dbdd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jorngeorg/sanity-gatsby-blog-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-test-web-d2cw99a2.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
