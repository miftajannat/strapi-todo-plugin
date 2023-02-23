/*
 *
 * HomePage
 *
 */

import React, {memo} from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import {
   Layout,
BaseHeaderLayout,
ContentLayout
 } from '@strapi/design-system';

const HomePage = () => {
  return (
    <Layout>
      <BaseHeaderLayout
        title='Todo Plugin'
        subtitle='This is the todo plugin homepage'
       as = 'h2'
      />
      <ContentLayout>
        <p >Happy Strapi coding</p>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
