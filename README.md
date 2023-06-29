# Infinum Docusaurus theme

> **Note**
> This repo is still work in progress. Code might not be optimal, documentation might not be complete. Not all Docusaurus features have been restyled yet!

This theme adds style overrides and new components for building consistent open-source, Docusaurus-based project pages.


## To get started (WIP)
1. Create a new Docusaurus project (**with the `classic` theme!**):
   `npx create-docusaurus@latest my-website classic`

2. Install the Infinum Docusaurus theme package:
   `npm i @infinum/docusaurus-theme`

3. Configure Docusaurus:
   - Open the config file (`docusaurus.config.js`)
   - Edit your `title`, `tagline`, and `favicon`
   - Edit the navbar:
     - Remove `title` from the `navbar` object
     - Set the `logo` and the menu `items` (avoid multi-level nesting if possible)
   - Edit the footer
      ```
      footer: {
              links: [
                  {
                      title: 'Community',
                      items: [
                          {
                              label: '',
                              href: 'https://...',
                              icon: '',
                          },
                          ...
                      ],
                  },
              ],
      }
      ```
      **Note**: look for the `icon` in the Icon component from the package (will also include a list at some point)
   - Edit the `copyright`
   - At the top of the file add:
     ```js
     const darkCodeTheme = require('prism-react-renderer/themes/dracula');
     ```
   - Add these at the end of the config, just after `copyright`:
        ```
        prism: {
        	theme: darkCodeTheme,
        },
        colorMode: {
        	defaultMode: 'light',
        	disableSwitch: true,
        	respectPrefersColorScheme: false,
        },
        ```

4. Override some of the default components
   - Replace the footer
     - Run `npm run swizzle @docusaurus/theme-classic Footer -- --eject`
     - Go to `src/theme/Footer` and remove everything except `index.js`
     - Replace the contents of `index.js` with:
        ```jsx
        import React from 'react';
        import { useThemeConfig } from '@docusaurus/theme-common';

        import { Footer as InfinumFooter } from '@infinum/docusaurus-theme';

        function Footer() {
        	const { footer } = useThemeConfig();

        	return (
        		<InfinumFooter footer={footer} />
        	);
        }

        export default React.memo(Footer);
        ```
    - Replace the contents of the blog listing page
      - Run `npm run swizzle @docusaurus/theme-classic BlogListPage -- --eject`
      - Go to `src/theme/BlogListPage` and remove everything except `index.js`
      - Replace the contents fo `index.js` with:
          ```jsx
          import React from 'react';
          import clsx from 'clsx';
          import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
          import {
          	PageMetadata,
          	HtmlClassNameProvider,
          	ThemeClassNames,
          } from '@docusaurus/theme-common';
          import BlogLayout from '@theme/BlogLayout';
          import BlogListPaginator from '@theme/BlogListPaginator';
          import SearchMetadata from '@theme/SearchMetadata';
          import BlogPostItems from '@theme/BlogPostItems';
          import { IconLinkCards, CtaImageButton, icons } from '@infinum/docusaurus-theme';

          function BlogListPageMetadata(props) {
          	const { metadata } = props;
          	const {
          		siteConfig: { title: siteTitle },
          	} = useDocusaurusContext();
          	const { blogDescription, blogTitle, permalink } = metadata;
          	const isBlogOnlyMode = permalink === '/';
          	const title = isBlogOnlyMode ? siteTitle : blogTitle;
          	return (
          		<>
          			<PageMetadata title={title} description={blogDescription} />
          			<SearchMetadata tag="blog_posts_list" />
          		</>
          	);
          }

          function BlogListPageContent(props) {
          	const { metadata, items } = props;

          	return (
          		<BlogLayout>
          			<h1 className='es-big-title'>Typing as we code</h1>
          			<div className='es-blog-grid'>
          				<BlogPostItems items={items} />
          			</div>
          			<BlogListPaginator metadata={metadata} />


          			<IconLinkCards
          				gray
          				title='Start exploring'
          				cards={[
          					{
          						icon: icons.wordpress,
          						text: 'Eightshift Boilerplate',
          						url: '/blog'
          					},
          					{
          						icon: icons.lockPrivacySecurity,
          						text: 'Eightshift Coding Standards for WordPress',
          						url: '/blog'
          					},
          					{
          						icon: icons.userJourney,
          						text: 'Eightshift Boilerplate Plugin',
          						url: '/blog'
          					},
          					{
          						icon: icons.book,
          						text: 'Eightshift Libs',
          						url: '/blog'
          					},
          					{
          						icon: icons.frontendDevelopment,
          						text: 'Eightshift Frontend Libs',
          						url: '/blog'
          					},
          					{
          						icon: icons.designerPenTool,
          						text: 'Eightshift Forms',
          						url: '/blog'
          					},
          					{
          						icon: icons.book2,
          						text: 'Eightshift Docs',
          						url: '/blog'
          					},
          					{
          						icon: icons.book,
          						text: 'Eightshift Storybook',
          						url: '/blog'
          					}
          				]}
          			/>

          			<CtaImageButton
          				gray
          				title='Find more libraries, tools, and design assets  free for everyone to use.'
          				buttonLabel='Open-source freebies'
          				buttonUrl='/blog'
          				imageUrl='/img/wp4.png'
          			/>
          		</BlogLayout>
          	);
          }
          export default function BlogListPage(props) {
          	return (
          		<HtmlClassNameProvider
          			className={clsx(
          				ThemeClassNames.wrapper.blogPages,
          				ThemeClassNames.page.blogListPage,
          			)}>
          			<BlogListPageMetadata {...props} />
          			<BlogListPageContent {...props} />
          		</HtmlClassNameProvider>
          	);
          }
          ```
          (make sure to replace any of the generic content here, like the IconLinkCards)

5. Build your site `npm start` and check everything
