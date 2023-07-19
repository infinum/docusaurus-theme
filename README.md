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
     - Go to `src/theme` and create a `Footer` folder in it
     - Create an `index.js` file with the following contents:
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
     - Go to `src/theme` and create a `BlogListPage` folder in it
     - Create an `index.js` file with the following contents:
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
          import { EsOpenSource } from '../sections/os-projects';
          import { EsOsFreebies } from '../sections/os-freebies';

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
          			<SearchMetadata tag='blog_posts_list' />
          		</>
          	);
          }

          function BlogListPageContent(props) {
          	const { metadata, items } = props;

          	return (
          		<BlogLayout>
          			<h1 className='es-big-title'>Typing as <wbr /> we code</h1>

          			<div className='es-blog-grid'>
          				<BlogPostItems items={items} />
          			</div>

          			<BlogListPaginator metadata={metadata} />
          			<EsOpenSource gray />
          			<EsOsFreebies gray />
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

   - Replace the _Admonition_ cards
     - Go to `src/theme` and create a `Admonition` folder in it
     - Create an `index.js` file with the following contents:
          ```jsx
          import React from 'react';
          import { AdmonitionCard } from '@infinum/docusaurus-theme';

          export default function Admonition(props) {
          	return (
          		<AdmonitionCard {...props} />
          	);
          }
          ```

5. Build your site `npm start` and check everything

## Built-in components
_More detailed description coming soon_

- `CtaCards`
- `CtaImageButton`
- `FeatureShowcase`
- `Hero`
- `IconLinkCards`
- `ImageAndText`
- `InfinumLogo`
- `ShowcaseCard`
- `TextCards`

- `icons`
