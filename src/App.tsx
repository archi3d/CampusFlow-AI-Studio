/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Marketplace from './components/Marketplace';
import Services from './components/Services';
import Home from './components/Home';

export default function App() {
  const [activeTab, setActiveTab] = React.useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'dashboard':
      case 'listings':
      case 'bids':
      case 'messages':
      case 'saved':
        return <Dashboard />;
      case 'books':
      case 'electronics':
      case 'housing':
        return <Marketplace />;
      case 'services':
        return <Services />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
