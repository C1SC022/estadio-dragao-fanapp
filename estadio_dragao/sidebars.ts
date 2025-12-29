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
  milestoneSidebar: [
  {
    type: 'category',
    label:'Milestone 01',
    items: [
      {
        type: 'doc',
        id: 'milestone01/Presentation',
        label: 'Presentation',
      }
    ],
  },
  {
    type: 'category',
    label:'Milestone 02',
    items: [
      {
        type: 'doc',
        id: 'milestone02/Presentation',
        label: 'Presentation',
      },
      {
        type: 'doc',
        id: 'milestone02/soa',
        label: 'State of the Art',
      },
      {
        type: 'doc',
        id: 'milestone02/personas',
      },
      {
        type:'doc',
        id: 'milestone02/user_stories',
      },
      {
        type: 'category',
        label: 'Requirements',
        items: [
          {
            type: 'doc',
            id: 'milestone02/functional_requirements',
          },
          {
            type: 'doc',
            id: 'milestone02/non_functional_requirements',
          },
        ],
      },
      {
        type: 'doc',
        id: 'milestone02/tech_stack',
      },
      {
        type: 'doc',
        id: 'milestone02/architecture',
      },
      {
        type: 'doc',
        id: 'milestone02/database',
      },
      {
        type: 'doc',
        id: 'milestone02/use_cases',
      },
      {
        type: 'doc',
        id: 'milestone02/MVPAcceptanceCriteria_KPIs',
      },
      {
        type: 'doc',
        id: 'milestone02/workflows',
      },
      {
        type: 'doc',
        id: 'milestone02/mockups',
      },
      {
        type: 'doc',
        id: 'milestone02/risks_n_costs',
      },
      
    ],
  },
  {
    type: 'category',
    label:'Milestone 03',
    items: [
      {
        type: 'doc',
        id: 'milestone03/architecture',
      },
      {
        type: 'category',
        label: 'Requirements',
        items: [
          {
            type: 'doc',
            id: 'milestone03/r_changes',
          },
          {
            type: 'doc',
            id: 'milestone03/fr',
          },
          {
            type: 'doc',
            id: 'milestone03/nfr',
          },
        ],
      },
    ],
  },
],

};

export default sidebars;
