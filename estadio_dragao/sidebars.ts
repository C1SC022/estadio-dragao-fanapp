import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'category',
      label: 'how',
      items: [
        {
          type: 'doc',
          id: 'how',
        },
      ],   
    }
  ],
  workSidebar: [
  {
    type: 'category',
    label:'Week 01',
    items: [
      {
        type: 'doc',
        id: 'personas',
      },
      {
        type:'doc',
        id: 'user_stories',
      },
      {
        type: 'category',
        label: 'Requirements',
        items: [
          {
            type: 'doc',
            id: 'functional_requirements',
          },
          {
            type: 'doc',
            id: 'non_functional_requirements',
          },
        ]
      },
    ],
  },
  {
    type: 'category',
    label:'Week 02',
    items: [
      {
        type: 'doc',
        id: 'untitled',
      },
    ],
  }
],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
